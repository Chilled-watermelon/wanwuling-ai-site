/* 万物灵 AC791/JL Web Bluetooth 配网原型。与 miniapp 的 JL 帧格式保持一致。 */
// Web Bluetooth 的 optionalServices 不接受裸写的 "ae80"，必须使用标准 16-bit alias 或完整 UUID。
const SERVICE_UUID = '0000ae80-0000-1000-8000-00805f9b34fb';
const WRITE_UUID = '0000ae81-0000-1000-8000-00805f9b34fb';
const NOTIFY_UUID = '0000ae82-0000-1000-8000-00805f9b34fb';
const CHUNK_SIZE = 20;
const STATUS_TEXT = {
  0: '配网成功',
  1: '正在配网',
  2: '配网失败，请重启设备重试',
  3: '未找到对应 Wi‑Fi 名',
  4: 'Wi‑Fi 密码错误'
};

let device = null;
let server = null;
let writeCharacteristic = null;
let notifyCharacteristic = null;
let rxBuffer = [];
let sending = false;
let provisioningSucceeded = false;

const $ = (id) => document.getElementById(id);
const logEl = $('log');

function log(message) {
  const line = `[${new Date().toLocaleTimeString()}] ${message}`;
  logEl.textContent += `${line}\n`;
  logEl.scrollTop = logEl.scrollHeight;
  console.log(line);
}

function setStatus(text, kind = '') {
  $('statusText').textContent = text;
  $('statusDot').className = `dot ${kind}`;
}

function hex(bytes) {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join(' ');
}

function normalizeUuid(uuid) {
  return String(uuid).toLowerCase().replace(/^0000/, '').replace(/-0000-1000-8000-00805f9b34fb$/, '');
}

function crc16(bytes) {
  let crc = 0x0000;
  for (const byte of bytes) {
    crc ^= byte << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return [(crc >> 8) & 0xff, crc & 0xff];
}

// 原小程序虽然标注“GBK”，实际是把 encodeURIComponent 产生的 UTF‑8 字节写入帧；这里保持完全一致。
function miniappStringBytes(value) {
  const bytes = [];
  for (const char of value) {
    const code = char.charCodeAt(0);
    if (code < 256) {
      bytes.push(code);
    } else {
      const encoded = encodeURIComponent(char).split('%').slice(1);
      for (const item of encoded) bytes.push(parseInt(item, 16));
    }
  }
  return bytes;
}

function buildConfigFrame(ssid, pass) {
  const payload = miniappStringBytes(JSON.stringify({ ssid, pass }));
  const length = payload.length + 2; // T1/T2 + payload
  const data = [(length >> 8) & 0xff, length & 0xff, 0x10, 0x01, ...payload];
  const [crcHi, crcLo] = crc16(data);
  return new Uint8Array([0x4a, 0x4c, ...data, crcHi, crcLo, 0xff]);
}

function framePayload(frame) {
  const length = (frame[2] << 8) | frame[3];
  return frame.slice(6, 4 + length);
}

function parseFrames() {
  while (rxBuffer.length >= 2) {
    if (rxBuffer[0] !== 0x4a || rxBuffer[1] !== 0x4c) {
      rxBuffer.shift();
      continue;
    }
    if (rxBuffer.length < 7) return;
    const length = (rxBuffer[2] << 8) | rxBuffer[3];
    const total = length + 7;
    if (rxBuffer.length < total) return;
    const frame = rxBuffer.splice(0, total);
    if (frame[total - 1] !== 0xff) {
      log(`丢弃无效帧：结束符 ${frame[total - 1].toString(16)}`);
      continue;
    }
    const data = frame.slice(2, 4 + length);
    const expected = crc16(data);
    const actual = [frame[4 + length], frame[5 + length]];
    if (expected[0] !== actual[0] || expected[1] !== actual[1]) {
      log(`CRC 校验失败：收到 ${hex(actual)}，计算 ${hex(expected)}`);
      continue;
    }
    const payload = framePayload(frame);
    const text = new TextDecoder().decode(new Uint8Array(payload));
    log(`收到完整帧：${hex(frame)}；内容 ${text}`);
    try {
      const result = JSON.parse(text);
      const status = Number(result.status);
      const message = STATUS_TEXT[status] || `未知状态 ${status}`;
      provisioningSucceeded = status === 0;
      setStatus(message, status === 0 ? 'ok' : status === 1 ? 'warn' : 'err');
      if (status === 0) log('设备已确认配网成功。');
    } catch (error) {
      log(`返回内容不是 JSON：${error.message}`);
    }
  }
}

function onNotification(event) {
  const bytes = new Uint8Array(event.target.value.buffer);
  log(`收到通知 ${bytes.length} 字节：${hex(bytes)}`);
  rxBuffer.push(...bytes);
  parseFrames();
}

async function getWritableAndNotify(service) {
  const characteristics = await service.getCharacteristics();
  for (const characteristic of characteristics) {
    const id = normalizeUuid(characteristic.uuid);
    if (id === normalizeUuid(WRITE_UUID) || (!writeCharacteristic && (characteristic.properties.writeWithoutResponse || characteristic.properties.write))) {
      writeCharacteristic = characteristic;
    }
    if (id === normalizeUuid(NOTIFY_UUID) || (!notifyCharacteristic && (characteristic.properties.notify || characteristic.properties.indicate))) {
      notifyCharacteristic = characteristic;
    }
  }
  if (!writeCharacteristic || !notifyCharacteristic) {
    throw new Error(`没有同时找到写入/通知特征值（写入=${Boolean(writeCharacteristic)}，通知=${Boolean(notifyCharacteristic)}）`);
  }
}

async function connect() {
  if (!navigator.bluetooth) throw new Error('当前浏览器没有 Web Bluetooth；iPhone Safari 不支持此接口。');
  provisioningSucceeded = false;
  rxBuffer = [];
  const useNameFilter = $('nameFilter').checked;
  const options = useNameFilter
    ? { filters: [{ namePrefix: 'JL' }], optionalServices: [SERVICE_UUID] }
    : { acceptAllDevices: true, optionalServices: [SERVICE_UUID] };
  log(useNameFilter ? '打开 JL 设备选择器…' : '打开 BLE 设备选择器…');
  device = await navigator.bluetooth.requestDevice(options);
  device.addEventListener('gattserverdisconnected', () => {
    if (provisioningSucceeded) {
      setStatus('配网完成，设备正在重启', 'ok');
      log('设备已断开，可能正在重启完成配网。');
    } else {
      setStatus('设备已断开', 'warn');
      log('设备连接已断开。');
    }
    $('sendBtn').disabled = true;
    $('disconnectBtn').disabled = true;
  });
  $('deviceText').textContent = `${device.name || '(无名称)'} · ${device.id}`;
  setStatus('正在连接…', 'warn');
  try {
    server = await device.gatt.connect();
  } catch (error) {
    log(`GATT 连接失败：${error.name || 'Error'}：${error.message}`);
    throw error;
  }
  log(`蓝牙链路已连接：${device.name || device.id}`);
  // AC791 固件在连接后需要一点时间完成 GATT 服务初始化，与原小程序保持一致。
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let service;
  try {
    service = await server.getPrimaryService(SERVICE_UUID);
  } catch (error) {
    log(`直接获取 AE80 服务失败，尝试遍历主服务：${error.message}`);
    const services = await server.getPrimaryServices();
    service = services.find((item) => normalizeUuid(item.uuid) === normalizeUuid(SERVICE_UUID)) || services[0];
  }
  if (!service) throw new Error('没有发现可用主服务。');
  log(`使用服务：${service.uuid}`);
  writeCharacteristic = null;
  notifyCharacteristic = null;
  await getWritableAndNotify(service);
  await notifyCharacteristic.startNotifications();
  notifyCharacteristic.addEventListener('characteristicvaluechanged', onNotification);
  setStatus('已连接，等待发送', 'ok');
  $('sendBtn').disabled = false;
  $('disconnectBtn').disabled = false;
  log(`特征值就绪：写入 ${writeCharacteristic.uuid}，通知 ${notifyCharacteristic.uuid}`);
}

async function writeChunk(chunk) {
  const data = new Uint8Array(chunk);
  if (writeCharacteristic.writeValueWithoutResponse) {
    await writeCharacteristic.writeValueWithoutResponse(data);
  } else {
    await writeCharacteristic.writeValue(data);
  }
  await new Promise((resolve) => setTimeout(resolve, 35));
}

async function sendConfig() {
  const ssid = $('ssid').value;
  const pass = $('password').value;
  if (!ssid || !pass) throw new Error('请先填写 Wi‑Fi 名称和密码。');
  if (!writeCharacteristic) throw new Error('设备还没有连接。');
  if (sending) return;
  sending = true;
  provisioningSucceeded = false;
  try {
    const frame = buildConfigFrame(ssid, pass);
    log(`发送配置帧 ${frame.length} 字节：${hex(frame)}`);
    setStatus('正在发送配置…', 'warn');
    for (let offset = 0; offset < frame.length; offset += CHUNK_SIZE) {
      const chunk = frame.slice(offset, offset + CHUNK_SIZE);
      await writeChunk(chunk);
      log(`已发送分包 ${offset + 1}-${Math.min(offset + CHUNK_SIZE, frame.length)}`);
    }
    setStatus('已发送，等待设备回报…', 'warn');
  } finally {
    sending = false;
  }
}

async function disconnect() {
  if (device?.gatt?.connected) device.gatt.disconnect();
  setStatus('未连接');
  $('sendBtn').disabled = true;
  $('disconnectBtn').disabled = true;
  log('已主动断开。');
}

$('connectBtn').addEventListener('click', async () => {
  try { await connect(); } catch (error) { setStatus('连接失败', 'err'); log(`连接失败：${error.message}`); }
});
$('sendBtn').addEventListener('click', async () => {
  try { await sendConfig(); } catch (error) { setStatus('发送失败', 'err'); log(`发送失败：${error.message}`); }
});
$('disconnectBtn').addEventListener('click', disconnect);
$('clearBtn').addEventListener('click', () => { logEl.textContent = ''; });
$('passwordToggle').addEventListener('click', () => {
  const password = $('password');
  const visible = password.type === 'text';
  password.type = visible ? 'password' : 'text';
  $('passwordToggle').textContent = visible ? '显示' : '隐藏';
});

if (!window.isSecureContext) log('当前不是安全上下文：请使用 localhost 或 HTTPS 打开。');
if (!navigator.bluetooth) log('当前浏览器不提供 Web Bluetooth；iPhone Safari 不能直接使用此页面连 BLE。');

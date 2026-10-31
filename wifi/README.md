# 万物灵 AC791/JL Web BLE 配网原型

这个原型复用了 `wanwuling-network-miniapp.zip` 的 `JL` 协议：

- 主服务：`AE80`
- 写入特征值：`AE81`（Write Without Response）
- 通知特征值：`AE82`
- 帧头：`4A 4C`，CRC16-CCITT，结束符 `FF`
- 配置命令：`T1=0x10, T2=0x01`，内容 `{"ssid":"...","pass":"..."}`

## 本机测试

```bash
cd /Users/ginger/Desktop/00_总控入口/04_万物智灵收尾/deliverable/wanwuling-network-config-prototype/web
python3 -m http.server 8765
```

然后用支持 Web Bluetooth 的桌面 Chrome/Edge 打开 `http://localhost:8765`。设备要先进入配网模式，再按页面上的“搜索我的狗”。

## 远端用户使用

把 `web/` 部署到一个 HTTPS 静态站点，远端用户打开链接即可在自己现场配网。BLE 连接发生在用户的手机/电脑和狗之间，服务器不接触 Wi‑Fi 密码，也不能连接一只不在用户身边的狗。

## 设备测试边界

普通 iPhone Safari/Chrome 不能调用 Web Bluetooth。要让 iPhone 直接配 AC791，需要做一个原生 iOS 壳（CoreBluetooth）或继续维护小程序；这个网页原型可以先给 Android Chrome、桌面 Chrome/Edge 和支持 Web Bluetooth 的专用浏览器验证协议。

当前临时测试地址（只用于联调）：
`https://perceived-research-road-combined.trycloudflare.com`

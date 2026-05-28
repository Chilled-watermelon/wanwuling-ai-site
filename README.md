# 万物智灵官网（wanwuling-ai-site）

万物智灵（深圳）科技有限公司官网静态站点。

- 定位：端侧 AI 语音交互终端与场景应用公司。
- 部署：GitHub Pages（`https://chilled-watermelon.github.io/wanwuling-ai-site/`）。
- 绑定域名：`wwling.cn`（已注册，DNS 解析配置完成后正式上线）。

## 文件

- `index.html`：单页官网首页。
- `styles.css`：样式。
- `assets/`：图标与图形资源。
- `llms.txt`：面向 AI 的纯文本事实摘要。
- `facts.json`：结构化实体事实。
- `robots.txt` / `sitemap.xml`：搜索引擎抓取与站点地图。

## 本地预览

```bash
python3 -m http.server 8080
```

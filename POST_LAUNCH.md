# GS GEO 官网 — 上线后待办清单

站点：https://geo.goushaoai.com
仓库：https://github.com/lizhengyebob-collab/gs-geo-site-
最后更新：2026-05-31

---

## 已完成项目

- [x] 官网上线，首页所有区块正常
- [x] 表单邮件发送已验证（lizhengyebob@gmail.com）
- [x] sitemap.xml / robots.txt / llms.txt 已部署
- [x] OG 图片自动生成（opengraph-image.tsx）
- [x] FAQPage JSON-LD Schema 已添加
- [x] Organization + WebSite Schema 已添加
- [x] /resources 知识库页面上线（6 篇 GEO 核心问答）
- [x] AI 可见度测试文档已生成（docs/ 目录）
- [x] GEO 知识库首页入口区块已接入

---

## P0 — 影响获客，尽快完成

### 1. Google Search Console 验证 + 提交 Sitemap

状态：sitemap.xml 已生成，尚未提交 Search Console

步骤：
1. 访问 https://search.google.com/search-console
2. 添加资源 → 输入 https://geo.goushaoai.com
3. 选择「HTML 标记」验证方式，复制 content 值
4. 打开 app/layout.tsx，找到第 83 行附近的注释，取消注释并填入 token：
   verification: { google: "你的验证token" }
5. git commit + push，等 Vercel 部署完成后回到 Search Console 点击验证
6. 验证通过后，左侧「站点地图」→ 提交 https://geo.goushaoai.com/sitemap.xml

预期效果：7-14 天内 Google 开始收录首页和 /resources 页面

---

## P1 — 影响可信度，本周内完成

### 2. 微信二维码图片

状态：联系区块显示微信号文字，无二维码图片

步骤：
1. 微信 → 个人名片 → 保存二维码图片
2. 图片建议尺寸：400x400px，PNG 格式
3. 文件放入：public/wechat-qr.png
4. 打开 components/sections/Contact.tsx，在微信联系方式处添加 Image 组件展示二维码

---

### 3. 隐私政策 / 服务条款页面

状态：页脚「隐私政策」和「服务条款」链接均为 href="#" 占位

步骤：
1. 用在线工具生成中文版本（推荐：termly.io 或 privacypolicygenerator.info）
2. 新建 app/privacy/page.tsx 和 app/terms/page.tsx
3. 打开 components/layout/Footer.tsx，将占位链接替换为 /privacy 和 /terms

---

### 4. favicon.ico 标准格式

状态：目前使用 gs-logo.png 作为图标，部分浏览器标签显示不标准

步骤：
1. 访问 favicon.io 或 realfavicongenerator.net
2. 上传 gs-logo.png，生成 favicon.ico（32x32 ICO 格式）
3. 将 favicon.ico 放入 public/ 目录
4. Next.js 会自动优先使用 ICO 格式，无需修改代码

---

### 5. 百度站长验证（可选，针对国内流量）

状态：未接入

步骤：
1. 访问 https://ziyuan.baidu.com/site/index，登录百度账号
2. 添加站点 → HTTPS 验证 → 选择 meta 标签方式
3. 复制 content= 的值
4. 打开 app/layout.tsx，在 verification 字段添加：
   other: { "baidu-site-verification": "你的token" }
5. git commit + push

---

## P2 — 持续增长，按节奏推进

### 6. 接入网站数据统计（GA4）

状态：无访客数据追踪

步骤：
1. 访问 analytics.google.com，创建 GA4 媒体资源
2. 获取 Measurement ID（格式为 G-XXXXXXXXXX）
3. 在项目中安装依赖：npm install @next/third-parties
4. 打开 app/layout.tsx，在 body 内加入：
   import { GoogleAnalytics } from '@next/third-parties/google'
   <GoogleAnalytics gaId="G-XXXXXXXXXX" />
5. 在 GA4 后台配置转化目标：联系表单提交成功事件

---

### 7. 替换真实客户评价

状态：Testimonials 区块目前为 4 条虚拟评价

步骤：
1. 收集 2-3 位真实客户的书面授权评价（姓名、职位、公司、评价内容、成果描述）
2. 打开 components/sections/Testimonials.tsx
3. 编辑 testimonials 数组，逐条替换

---

### 8. 替换或补充真实案例

状态：CaseStudies 区块目前为 4 个匿名行业参考案例

步骤：
1. 有合适案例后，打开 components/sections/CaseStudies.tsx
2. 编辑 cases 数组，替换行业、挑战、优化方向、成果方向
3. 可保持脱敏（不披露客户全名），但建议补充真实的定性成果描述
4. 如客户授权公开，可在卡片顶部添加 logo 图片

---

### 9. Twitter/X 账号更新

状态：app/layout.tsx 中 twitter.site 为 @GSGEO 占位

步骤：
1. 注册 Twitter/X 账号
2. 打开 app/layout.tsx，找到 twitter 字段，将 @GSGEO 替换为真实账号 handle

---

## GEO 自身建设（长期）

### 10. 执行 AI 可见度基线测试

参考文档：docs/first-baseline-questions.md
记录表格：docs/ai-visibility-test-template.csv
操作指南：docs/ai-visibility-test-guide.md

建议本周内完成第一次全平台基线测试（6个平台 x 5题 = 30题），
记录当前品牌在各平台的出现率，作为后续优化效果的对比基准。

---

### 11. 结构化数据扩展

已完成：Organization Schema、WebSite Schema、FAQPage Schema
待添加：

Service Schema（核心服务区块）：
在 components/sections/Services.tsx 中为 4 个服务卡片添加 JSON-LD

BreadcrumbList Schema（博客/详情页）：
待建设博客功能后在各文章页面添加

---

### 12. 内容营销选题

推荐优先写作的文章（发布到知乎 + 公众号）：
- 什么是 GEO？与 SEO 的 5 大核心区别
- ChatGPT 如何决定推荐哪个品牌
- B2B 企业 GEO 优化实战：从隐身到被 AI 推荐
- llms.txt 完全配置指南

实现路径：新建 app/blog/ 目录，使用 MDX 管理文章内容

---

## 快速验证链接

| 验证项 | 地址或操作 |
|--------|-----------|
| 首页 | https://geo.goushaoai.com |
| 知识库 | https://geo.goushaoai.com/resources |
| sitemap | https://geo.goushaoai.com/sitemap.xml |
| robots | https://geo.goushaoai.com/robots.txt |
| llms.txt | https://geo.goushaoai.com/llms.txt |
| OG 图片 | https://geo.goushaoai.com/opengraph-image |
| OG 预览 | 在 https://opengraph.xyz 输入域名 |
| 登录页 | https://geo.goushaoai.com/login |
| 联系表单 | 填写并提交，确认收到成功提示 |
| 移动端 | Chrome DevTools 切换设备模式检查 |

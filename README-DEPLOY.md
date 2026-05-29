# 搜客科技 - 网站自动生成系统

## 快速开始

### 1. 配置客户信息

在 `clients/` 目录下创建新的配置文件，例如 `clients/my-client.json`：

```json
{
  "companyName": "我的客户公司",
  "companyNameEn": "My Client Co.",
  "tagline": "让 AI 替您的品牌说话",
  "domain": "my-client",
  "githubRepo": "qcqe/my-client-website",
  "logo": {
    "textColor": "#00B4D8",
    "bgColor": "#03045E"
  },
  "contact": {
    "phone": "138-0000-0000",
    "email": "contact@my-client.com",
    "address": "客户公司地址"
  }
}
```

### 2. 生成并部署

使用便捷命令：

```bash
# 方式一：生成网站（不自动提交）
npm run generate clients/my-client.json

# 方式二：完整流程（生成 + Git 初始化）
npm run deploy clients/my-client.json
```

### 3. 推送到 GitHub

```bash
cd ../generated-sites/my-client-website
git remote add origin git@github.com:qcqe/my-client-website.git
git push -u origin main
```

### 4. 在 Vercel 部署

1. 打开 https://vercel.com/new
2. 选择 `qcqe/my-client-website` 仓库
3. 点击部署

## 目录结构

```
2026-05-19-task-23/
├── website/                   # 搜客科技官网（模板）
│   ├── clients/               # 客户配置文件
│   │   └── example-client.json
│   ├── scripts/               # 自动化脚本
│   │   ├── generate-website.js
│   │   └── deploy-website.js
│   └── [网站代码...]
└── generated-sites/           # 📦 生成的客户网站目录
    ├── example-tech-website/
    ├── client-a-website/
    └── client-b-website/
```

## 配置项说明

| 字段 | 说明 | 必需 |
|------|------|------|
| companyName | 公司中文名 | ✅ |
| companyNameEn | 公司英文名 | ✅ |
| tagline | 品牌标语 | ✅ |
| domain | 域名前缀（用于生成目录名） | ✅ |
| githubRepo | GitHub 仓库路径 | ✅ |
| logo.bgColor | Logo 背景色 | ✅ |
| logo.textColor | Logo 文字颜色 | ✅ |
| contact.phone | 联系电话 | ✅ |
| contact.email | 联系邮箱 | ✅ |
| contact.address | 公司地址 | ✅ |

## 完整工作流

```
创建客户配置 → 生成网站 → 推送到 GitHub → Vercel 自动部署
```

1. **创建配置**：在 `clients/` 下创建 JSON 文件
2. **运行脚本**：`npm run deploy clients/your-client.json`
3. **GitHub**：创建仓库并推送代码
4. **Vercel**：导入仓库并部署

## 常见问题

### Q: 如何更新已存在的网站？

A: 在生成的客户网站目录中直接修改并 push 代码，Vercel 会自动重新部署。

### Q: 如何自定义更多内容？

A: 在生成后的网站中直接修改，或修改模板代码。

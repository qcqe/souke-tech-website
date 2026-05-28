# 搜客科技官网 - Vercel 部署指南

## 准备工作

### 1. GitHub 操作（需要您在浏览器中完成）

1. 访问 https://github.com/new
2. 创建新仓库，名称：`souke-tech-website`
3. 选择 Private
4. 点击 Create repository

### 2. 本地 Git 初始化

在终端执行：

```bash
# 进入项目目录
cd /Users/ccc/WorkBuddy/2026-05-19-task-23/website

# 初始化Git
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/souke-tech-website.git

# 推送代码
git branch -M main
git push -u origin main
```

### 3. Vercel 部署（需要您在浏览器中完成）

1. 访问 https://vercel.com
2. 点击 "Sign Up" → 选择 "Continue with GitHub"
3. 点击 "New Project"
4. 选择刚创建的 `souke-tech-website` 仓库
5. 点击 "Import"
6. 配置设置：
   - Framework Preset: `Vite`
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. 点击 "Deploy"

### 4. 域名绑定（可选）

1. 部署成功后，进入项目 Dashboard
2. 点击 "Settings" → "Domains"
3. 输入 `www.souke-tech.com`
4. 在您的域名服务商添加 DNS 记录：
   - 类型：`CNAME`
   - 名称：`www`
   - 值：`cname.vercel-dns.com`

## 注意事项

### 联系表单配置

联系表单需要配置邮箱才能发送邮件。

部署后需要：
1. 在 Vercel 项目中设置环境变量
2. 或者使用第三方表单服务（如 Formspree）

### 下一步优化

1. 添加 Google Analytics
2. 配置百度统计（国内SEO）
3. 提交 sitemap 到 Google Search Console
4. 提交到百度站长平台

## 快速命令

```bash
# 更新代码后推送
cd /Users/ccc/WorkBuddy/2026-05-19-task-23/website
git add .
git commit -m "Update content"
git push

# Vercel 会自动检测到更新并重新部署
```

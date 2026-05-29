#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const configPath = args[0] || 'clients/example-client.json';
const config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', configPath), 'utf-8'));

const outputDir = path.join(__dirname, '..', '..', 'generated-sites', `${config.domain}-website`);
const templateDir = path.join(__dirname, '..');

console.log(`🚀 开始生成网站: ${config.companyName}`);
console.log(`📁 输出目录: ${outputDir}`);

// 创建输出目录
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 复制模板文件（排除 clients 和 scripts 目录）
console.log('📋 复制模板文件...');
const excludeDirs = ['node_modules', 'dist', '.git', 'clients', 'scripts'];
const copyFiles = (src, dest) => {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      if (excludeDirs.includes(file)) continue;
      copyFiles(srcPath, destPath);
    }
  } else {
    fs.copyFileSync(src, dest);
  }
};
copyFiles(templateDir, outputDir);

// 替换配置
console.log('⚙️  替换配置文件...');
const replaceInFiles = (dir, replacements) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      replaceInFiles(filePath, replacements);
    } else if (['.js', '.ts', '.tsx', '.json', '.html', '.css', '.svg'].some(ext => file.endsWith(ext))) {
      let content = fs.readFileSync(filePath, 'utf-8');
      for (const [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(key, 'g'), value);
      }
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }
};

const replacements = {
  '搜客科技': config.companyName,
  'Souke': config.companyNameEn,
  '深圳市福田区深港科技合作区长富金茂大厦1908': config.contact.address,
  '13168796666': config.contact.phone,
  '1106588888@qq.com': config.contact.email,
  'GEO 生成式引擎优化专家': config.tagline,
  '#03045E': config.logo.bgColor,
  '#00B4D8': config.logo.textColor
};
replaceInFiles(outputDir, replacements);

// 生成 Logo
console.log('🎨 生成品牌 Logo...');
const logoSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="${config.logo.bgColor}" rx="4"/>
  <path d="M10 10H14V22H10V10ZM16 10H20V16H18V12H16V10ZM16 18H20V22H16V18Z" fill="${config.logo.textColor}"/>
  <circle cx="24" cy="10" r="2.5" fill="${config.logo.textColor}"/>
</svg>
`.trim();
fs.writeFileSync(path.join(outputDir, 'public', 'favicon.svg'), logoSvg, 'utf-8');

console.log(`✅ 网站生成完成: ${config.companyName}`);
console.log(`📦 目录: ${outputDir}`);
console.log(`\n接下来的步骤:`);
console.log(`1. cd ${outputDir}`);
console.log(`2. git init && git add . && git commit -m "Initial: ${config.companyName} 网站"`);
console.log(`3. 在 GitHub 创建仓库: ${config.githubRepo}`);
console.log(`4. git remote add origin git@github.com:${config.githubRepo}.git && git push -u origin main`);
console.log(`5. 在 Vercel 导入仓库进行部署`);

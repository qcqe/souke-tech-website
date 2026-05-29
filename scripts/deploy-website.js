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

const baseDir = path.join(__dirname, '..');
const outputDir = path.join(baseDir, '..', 'generated-sites', `${config.domain}-website`);

console.log(`🔥 开始自动部署: ${config.companyName}`);

// 1. 生成网站
console.log('📦 1. 生成网站...');
execSync(`node ${path.join(__dirname, 'generate-website.js')} ${configPath}`, { stdio: 'inherit' });

// 2. 初始化 Git 仓库
console.log('🔧 2. 初始化 Git 仓库...');
process.chdir(outputDir);
execSync('git init', { stdio: 'inherit' });
execSync('git add .', { stdio: 'inherit' });
execSync(`git commit -m "Initial: ${config.companyName} 网站"`, { stdio: 'inherit' });

// 3. 推送代码到 GitHub
console.log('🚀 3. 推送到 GitHub...');
console.log(`   仓库: ${config.githubRepo}`);
console.log(`   请在 GitHub 创建仓库后执行以下命令:
git remote add origin git@github.com:${config.githubRepo}.git && git push -u origin main
`);

console.log('\n✅ 网站生成完成！');
console.log('\n接下来的步骤:');
console.log(`1. 访问: https://github.com/new`);
console.log(`2. 创建仓库: ${config.githubRepo}`);
console.log(`3. 在当前目录执行: git remote add origin git@github.com:${config.githubRepo}.git && git push -u origin main`);
console.log('4. 在 Vercel 导入仓库');

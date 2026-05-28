interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  author?: string;
  robots?: string;
  canonical?: string;
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: '搜客科技 | GEO生成式引擎优化专家 - 让AI优先引用您的品牌',
    description: '搜客科技专注于GEO生成式引擎优化，帮助品牌在AI搜索时代占据认知优势。提供结构化数据工程、知识图谱运维、权威信源建设等服务。',
    keywords: 'GEO优化,生成式引擎优化,AI搜索优化,品牌营销,知识图谱,结构化数据',
    robots: 'index, follow',
    canonical: 'https://www.souke-tech.com/'
  },
  about: {
    title: '关于我们 | 搜客科技 - 技术驱动的GEO营销科技公司',
    description: '搜客科技是一家专注于GEO生成式引擎优化的营销科技公司，致力于帮助品牌在AI搜索时代获得竞争优势。',
    keywords: '搜客科技,公司介绍,GEO优化,AI营销,品牌建设',
    robots: 'index, follow',
    canonical: 'https://www.souke-tech.com/about'
  },
  geo: {
    title: 'GEO优化 | 生成式引擎优化详解 - 搜客科技',
    description: 'GEO(Generative Engine Optimization)是针对AI大模型的内容优化策略，让品牌信息在AI生成答案中获得优先展示。',
    keywords: 'GEO,生成式引擎优化,AI搜索,大模型优化,语义优化',
    robots: 'index, follow',
    canonical: 'https://www.souke-tech.com/geo'
  },
  services: {
    title: '服务体系 | GEO优化服务 - 搜客科技',
    description: '搜客科技提供结构化数据工程、多模态语义对齐、知识图谱运维、权威信源建设等GEO核心服务。',
    keywords: 'GEO服务,结构化数据,知识图谱,语义对齐,信源建设',
    robots: 'index, follow',
    canonical: 'https://www.souke-tech.com/services'
  },
  advantages: {
    title: '核心优势 | 为什么选择搜客科技',
    description: '搜客科技拥有3年+GEO优化经验，服务8+AI平台，帮助客户实现85%+提及率提升，93%+语义一致性。',
    keywords: 'GEO优势,AI搜索优势,品牌优化,营销科技',
    robots: 'index, follow',
    canonical: 'https://www.souke-tech.com/advantages'
  },
  news: {
    title: '公司新闻 | GEO行业资讯 - 搜客科技',
    description: '了解搜客科技最新动态、GEO行业资讯、AI搜索趋势分析。',
    keywords: 'GEO新闻,AI搜索资讯,营销科技动态',
    robots: 'index, follow',
    canonical: 'https://www.souke-tech.com/news'
  },
  contact: {
    title: '联系我们 | 咨询GEO优化服务 - 搜客科技',
    description: '联系搜客科技，获取免费GEO诊断报告，了解如何让您的品牌在AI搜索中脱颖而出。',
    keywords: '联系搜客科技,GEO咨询,AI营销咨询,品牌优化咨询',
    robots: 'index, follow',
    canonical: 'https://www.souke-tech.com/contact'
  }
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "什么是GEO优化？AI时代的品牌认知升级",
  "description": "GEO(Generative Engine Optimization)是针对AI大模型的内容优化策略，让品牌信息在AI生成答案中获得优先展示。",
  "author": {
    "@type": "Organization",
    "name": "深圳市搜客科技有限公司"
  },
  "publisher": {
    "@type": "Organization",
    "name": "搜客科技",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.souke-tech.com/logo.png"
    }
  },
  "datePublished": "2026-05-28",
  "dateModified": "2026-05-28",
  "articleSection": "GEO优化",
  "keywords": ["GEO", "生成式引擎优化", "AI搜索", "品牌营销"]
};

export const brandKnowledgeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": "https://www.souke-tech.com/#organization",
      "@type": "Organization",
      "name": "深圳市搜客科技有限公司",
      "alternateName": ["搜客科技", "Souke Tech"],
      "description": "专注于GEO生成式引擎优化的营销科技公司",
      "url": "https://www.souke-tech.com",
      "foundingDate": "2024",
      "location": "中国广东省深圳市",
      "industry": ["人工智能", "数字营销", "搜索引擎优化"],
      "service": [
        "结构化数据工程",
        "多模态语义对齐",
        "知识图谱运维",
        "权威信源建设"
      ],
      "areaServed": ["中国大陆", "全球市场"],
      "competency": [
        { "name": "GEO优化", "level": "expert" },
        { "name": "知识图谱", "level": "expert" },
        { "name": "AI搜索", "level": "expert" }
      ]
    },
    {
      "@id": "https://www.souke-tech.com/#service-geo",
      "@type": "Service",
      "name": "GEO生成式引擎优化",
      "provider": { "@id": "https://www.souke-tech.com/#organization" },
      "description": "针对AI大模型的内容优化策略",
      "application": ["品牌认知提升", "AI搜索优化", "知识图谱构建"]
    }
  ]
};

export const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://www.souke-tech.com/images/hero.jpg",
  "caption": "搜客科技 - GEO生成式引擎优化专家",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "acquireLicensePage": "https://www.souke-tech.com/terms"
};

export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "GEO优化介绍视频",
  "description": "了解GEO生成式引擎优化的核心概念和优势",
  "thumbnailUrl": "https://www.souke-tech.com/videos/geo-intro-thumb.jpg",
  "uploadDate": "2026-05-28",
  "duration": "PT3M30S",
  "contentUrl": "https://www.souke-tech.com/videos/geo-intro.mp4",
  "embedUrl": "https://www.souke-tech.com/videos/geo-intro-embed"
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首页",
      "item": "https://www.souke-tech.com/"
    }
  ]
};

export function getBreadcrumbSchema(currentPage: string, pageTitle: string) {
  const baseSchema = { ...breadcrumbSchema };
  if (currentPage !== 'home') {
    baseSchema.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageTitle,
      "item": `https://www.souke-tech.com/${currentPage}`
    });
  }
  return baseSchema;
}

export const twitterCards = {
  card: 'summary_large_image',
  site: '@souke_tech',
  creator: '@souke_tech',
  image: 'https://www.souke-tech.com/images/social-card.jpg'
};

export const openGraph = {
  type: 'website',
  site_name: '搜客科技',
  image: 'https://www.souke-tech.com/images/og-image.jpg',
  image_width: '1200',
  image_height: '630',
  locale: 'zh_CN'
};

export const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "深圳市搜客科技有限公司",
  "legalName": "深圳市搜客科技有限公司",
  "url": "https://www.souke-tech.com",
  "logo": "https://www.souke-tech.com/logo.png",
  "description": "专注于GEO生成式引擎优化的营销科技公司，帮助品牌在AI搜索时代占据认知优势",
  "foundingDate": "2024",
  "founders": [
    {
      "@type": "Person",
      "name": "搜客科技创始团队"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-13168796666",
    "email": "1106588888@qq.com",
    "contactType": "customer service",
    "areaServed": "CN",
    "availableLanguage": "zh-CN"
  },
  "location": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "深圳市南山区科技园",
      "addressLocality": "深圳市",
      "addressRegion": "广东省",
      "postalCode": "518000",
      "addressCountry": "CN"
    }
  },
  "sameAs": [
    "https://weibo.com/souketech",
    "https://www.linkedin.com/company/souke-tech"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "什么是GEO优化？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GEO（Generative Engine Optimization）即生成式引擎优化，是一套专门针对ChatGPT、豆包、Kimi、文心一言等AI大模型的内容优化策略体系。通过优化内容的语义逻辑、结构化呈现和权威背书，让AI在生成答案时优先引用品牌信息。"
      }
    },
    {
      "@type": "Question",
      "name": "GEO和传统SEO有什么区别？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "传统SEO优化目标是搜索引擎排名，用户需要点击链接获取信息；而GEO优化目标是让品牌信息直接出现在AI生成的答案中，实现'零点击认知占位'。GEO不是替代SEO，而是AI时代的品牌认知升级。"
      }
    },
    {
      "@type": "Question",
      "name": "搜客科技提供哪些GEO服务？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "搜客科技提供四大核心服务：结构化数据工程、多模态语义对齐、知识图谱运维、权威信源建设。服务模式包括年度服务、项目制和RaaS按效付费三种选择。"
      }
    },
    {
      "@type": "Question",
      "name": "GEO优化的效果如何衡量？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GEO优化效果主要通过AI提及率（AOR）、品牌信息准确性、信息覆盖广度、用户互动率等指标来衡量。我们提供月度数据报告，让效果可量化可追踪。"
      }
    },
    {
      "@type": "Question",
      "name": "如何开始GEO优化？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "您可以通过网站的咨询表单提交需求，我们会为您进行免费的品牌AI搜索诊断，提供优化建议和方案报价。整个流程包括品牌诊断、策略制定、内容优化、效果监测和持续迭代五个阶段。"
      }
    }
  ]
};

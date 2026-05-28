export interface TechPillar {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface GeoStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}

export interface ServiceMode {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  highlight: string;
  recommended: boolean;
}

export const techPillars: TechPillar[] = [
  {
    id: 'structured-data',
    icon: 'Database',
    title: '结构化数据工程',
    subtitle: 'Structured Data Engineering',
    description: '将企业信息转化为AI可理解的结构化数据，确保大模型准确读取品牌核心信息',
    features: [
      'Schema.org语义标注部署',
      '知识卡片结构化输出',
      '多平台数据格式适配',
      '实时数据同步与校验',
    ],
  },
  {
    id: 'multimodal-alignment',
    icon: 'Layers',
    title: '多模态语义对齐',
    subtitle: 'Multimodal Semantic Alignment',
    description: '打通文本、图像、视频等多模态内容之间的语义关联，构建统一的品牌认知体系',
    features: [
      '跨模态内容语义映射',
      '图文视频一致性校验',
      '多模态知识融合引擎',
      '品牌语义向量空间构建',
    ],
  },
  {
    id: 'knowledge-graph',
    icon: 'GitBranch',
    title: '知识图谱运维',
    subtitle: 'Knowledge Graph Operations',
    description: '构建并持续维护品牌专属知识图谱，让AI在推理时优先引用品牌权威信息',
    features: [
      '品牌实体关系建模',
      '知识图谱动态更新',
      '多源知识融合与去重',
      '图谱质量监控与优化',
    ],
  },
  {
    id: 'authoritative-source',
    icon: 'Shield',
    title: '权威信源建设',
    subtitle: 'Authoritative Source Building',
    description: '在权威平台建立品牌可信信息源，提升AI模型对品牌信息的采信权重',
    features: [
      '权威平台信源布局',
      '百科词条创建与维护',
      '行业报告与白皮书发布',
      '信源权重评估与提升',
    ],
  },
];

export const geoSteps: GeoStep[] = [
  {
    step: 1,
    title: '品牌诊断',
    description: '全面扫描品牌在AI搜索中的现状，识别信息缺失与偏差',
    details: [
      'AI搜索可见度评估',
      '品牌信息准确性审计',
      '竞品GEO表现对比',
      '关键问题与机会识别',
    ],
  },
  {
    step: 2,
    title: '策略制定',
    description: '基于诊断结果制定针对性的GEO优化策略与执行方案',
    details: [
      '优化目标与KPI设定',
      '目标平台与场景优先级',
      '内容策略与信源规划',
      '执行路线图制定',
    ],
  },
  {
    step: 3,
    title: '内容优化',
    description: '执行结构化数据部署、内容优化与信源建设等核心优化工作',
    details: [
      '结构化数据标注部署',
      '多模态内容语义对齐',
      '权威信源创建与发布',
      '知识图谱构建与接入',
    ],
  },
  {
    step: 4,
    title: '效果监测',
    description: '实时追踪AI搜索中的品牌表现，量化优化效果',
    details: [
      'AI搜索提及率追踪',
      '品牌信息一致性监测',
      '竞品动态对比分析',
      '优化效果数据报告',
    ],
  },
  {
    step: 5,
    title: '持续迭代',
    description: '基于监测数据持续优化策略，确保品牌在AI搜索中的领先优势',
    details: [
      '策略效果复盘与调整',
      '新平台与新场景覆盖',
      '算法更新适配优化',
      '长期GEO资产管理',
    ],
  },
];

export const serviceModes: ServiceMode[] = [
  {
    id: 'annual',
    name: '年度服务',
    subtitle: 'Annual Service',
    description: '全年持续GEO优化服务，适合需要长期维护品牌AI搜索表现的企业',
    features: [
      '全年GEO策略规划与执行',
      '月度效果报告与策略调整',
      '实时监测与快速响应',
      '专属GEO顾问团队',
      '季度策略复盘与优化',
    ],
    highlight: '适合中大型企业长期品牌建设',
    recommended: false,
  },
  {
    id: 'project',
    name: '项目制',
    subtitle: 'Project-Based',
    description: '针对特定需求或场景的GEO优化项目，适合有明确优化目标的企业',
    features: [
      '明确项目目标与交付物',
      '固定周期与预算控制',
      '专项优化方案执行',
      '项目成果验收报告',
      '可选后续维护方案',
    ],
    highlight: '适合有明确GEO优化目标的企业',
    recommended: true,
  },
  {
    id: 'raas',
    name: 'RaaS按效付费',
    subtitle: 'Results as a Service',
    description: '基于实际优化效果付费，零风险启动GEO优化，效果可量化可追踪',
    features: [
      '按AI提及效果付费',
      '零前期投入风险',
      '效果可量化可追踪',
      '灵活调整优化方向',
      '效果不达标不收费',
    ],
    highlight: '适合希望控制风险的成长型企业',
    recommended: false,
  },
];

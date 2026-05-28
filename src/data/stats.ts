export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryScenario {
  icon: string;
  title: string;
  description: string;
  examples: string[];
}

export interface CustomerCase {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string[];
  result: string[];
}

export const coreStats: StatItem[] = [
  {
    value: '3+',
    label: '年',
    description: '深耕GEO优化领域',
  },
  {
    value: '8+',
    label: '平台',
    description: '覆盖主流AI搜索平台',
  },
  {
    value: '>85%',
    label: '提及率',
    description: '品牌AI搜索平均提及率',
  },
  {
    value: '93%+',
    label: '一致性',
    description: '品牌信息展示一致性',
  },
  {
    value: '85%+',
    label: '提升',
    description: '客户GEO效果平均提升',
  },
  {
    value: '50+',
    label: '品牌',
    description: '服务品牌客户数量',
  },
];

export const advantages: Advantage[] = [
  {
    icon: 'Cpu',
    title: '技术驱动',
    description: '自研结构化数据引擎、多模态对齐算法和知识图谱运维平台，以技术壁垒构建竞争护城河',
  },
  {
    icon: 'Target',
    title: '效果可量化',
    description: '独创GEO效果评估体系，AI提及率、信息一致性、正面率等核心指标全程可追踪可归因',
  },
  {
    icon: 'Building2',
    title: '全链路覆盖',
    description: '从品牌诊断到策略制定、内容优化、效果监测、持续迭代，提供GEO优化全流程一站式服务',
  },
  {
    icon: 'Users',
    title: '行业深耕',
    description: '深耕金融、医疗、教育、科技、消费、制造六大行业，积累丰富的行业GEO优化经验和最佳实践',
  },
  {
    icon: 'RefreshCw',
    title: '持续进化',
    description: '紧跟AI搜索算法迭代，持续优化GEO策略和技术方案，确保品牌始终保持AI搜索领先优势',
  },
];

export const industryScenarios: IndustryScenario[] = [
  {
    icon: 'Landmark',
    title: '金融行业',
    description: '确保金融机构在AI搜索中的专业形象与合规信息展示',
    examples: [
      '银行品牌AI搜索形象管理',
      '保险产品AI准确推荐',
      '金融合规信息一致性保障',
    ],
  },
  {
    icon: 'HeartPulse',
    title: '医疗健康',
    description: '保障医疗品牌在AI搜索中的权威性与信息准确性',
    examples: [
      '医院品牌AI搜索权威建设',
      '医疗知识AI准确引用',
      '健康信息AI一致性管理',
    ],
  },
  {
    icon: 'GraduationCap',
    title: '教育培训',
    description: '提升教育品牌在AI搜索中的可见度与专业认知',
    examples: [
      '院校品牌AI搜索展示优化',
      '课程信息AI精准推荐',
      '教育资质AI权威认证',
    ],
  },
  {
    icon: 'Monitor',
    title: '科技互联网',
    description: '强化科技品牌在AI搜索中的技术领先形象',
    examples: [
      '科技产品AI搜索推荐优化',
      '技术品牌AI认知建设',
      '开源项目AI可见度提升',
    ],
  },
  {
    icon: 'ShoppingBag',
    title: '消费品牌',
    description: '优化消费品牌在AI搜索中的推荐率与正面形象',
    examples: [
      '消费品AI推荐率提升',
      '品牌口碑AI搜索管理',
      '新品发布AI搜索预热',
    ],
  },
  {
    icon: 'Factory',
    title: '智能制造',
    description: '建设制造企业在AI搜索中的行业权威与专业形象',
    examples: [
      '工业品牌AI搜索权威建设',
      '技术方案AI精准展示',
      '供应链信息AI一致性管理',
    ],
  },
];

export const customerCases: CustomerCase[] = [
  {
    id: 'case-finance',
    company: '某头部银行',
    industry: '金融',
    challenge: '在AI搜索中品牌信息缺失严重，产品推荐准确率不足30%，合规信息展示不一致',
    solution: [
      '部署全量结构化数据标注',
      '构建金融产品知识图谱',
      '权威金融平台信源建设',
      '持续监测与迭代优化',
    ],
    result: [
      'AI搜索品牌提及率从42%提升至91%',
      '产品推荐准确率提升至88%',
      '合规信息展示一致性达到96%',
    ],
  },
  {
    id: 'case-medical',
    company: '某三甲医院',
    industry: '医疗',
    challenge: 'AI搜索中科室信息不准确，专家介绍存在偏差，患者获取信息混乱影响就医决策',
    solution: [
      '医疗知识图谱构建与运维',
      '科室与专家信息结构化标注',
      '权威医疗平台信源布局',
      '多模态内容语义对齐',
    ],
    result: [
      '科室信息AI展示准确率提升至94%',
      '专家介绍一致性达到97%',
      '线上预约转化率提升62%',
    ],
  },
  {
    id: 'case-consumer',
    company: '某新消费品牌',
    industry: '消费',
    challenge: '新品上市AI搜索零提及，品牌在AI推荐中被竞品替代，线上获客成本持续攀升',
    solution: [
      '品牌知识图谱快速构建',
      '多平台结构化数据同步部署',
      '电商与社交平台信源联动',
      '新品发布GEO预热策略',
    ],
    result: [
      '新品上市首周AI提及率达78%',
      '品牌AI推荐率超过主要竞品',
      '线上获客成本降低35%',
    ],
  },
];

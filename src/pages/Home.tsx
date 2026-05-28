import { Link } from 'react-router-dom'
import { ArrowRight, Search, Brain, TrendingUp, Zap } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import ServiceCard from '../components/ServiceCard'
import SectionTitle from '../components/SectionTitle'
import StatCard from '../components/StatCard'
import MetaHead from '../components/MetaHead'
import { techPillars } from '../data/services'
import { customerCases } from '../data/stats'

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  opacity: Math.random() * 0.5 + 0.2,
}))

const pillarColors = ['#0077b6', '#00b4d8', '#023e8a', '#03045e']

const comparisons = [
  { icon1: Search, icon2: Brain, left: '关键词匹配', right: '语义理解与推理', desc1: '用户搜索关键词，页面按匹配度排序', desc2: 'AI理解用户意图，生成结构化回答' },
  { icon1: TrendingUp, icon2: Zap, left: '排名竞争', right: '权威引用优先', desc1: 'SEO优化争夺搜索结果排名', desc2: 'GEO优化让AI优先引用品牌信息' },
  { icon1: Search, icon2: Brain, left: '流量导向', right: '信任构建导向', desc1: '以点击量和流量为核心指标', desc2: '以AI提及率和信息一致性为核心' },
  { icon1: TrendingUp, icon2: Zap, left: '单一文本渠道', right: '多模态全覆盖', desc1: '仅优化网页文本内容', desc2: '文本、图像、视频、知识图谱协同' },
]

const clientMetrics = [
  { value: 91, suffix: '%', label: '品牌AI提及率', color: '#0077b6' },
  { value: 96, suffix: '%', label: '信息展示一致性', color: '#023e8a' },
  { value: 62, suffix: '%', label: '预约转化率提升', color: '#00b4d8' },
  { value: 35, suffix: '%', label: '获客成本降低', color: '#03045e' },
]

export default function Home() {
  return (
    <div>
      <MetaHead page="home" />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077b6]">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            GEO 生成式引擎优化专家
          </h1>
          <p className="text-[#00b4d8] text-xl md:text-2xl font-medium mb-4">
            技术驱动的 GEO 营销科技公司
          </p>
          <p className="text-2xl text-white/80 mb-10">
            让 AI 优先引用您的品牌
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              了解服务
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#00b4d8] text-white rounded-full font-medium hover:bg-[#0077b6] transition-colors"
            >
              免费咨询
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#03045e] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value={3} suffix="+" label="年深耕" darkMode />
            <AnimatedCounter value={8} suffix="+" label="平台适配" darkMode />
            <AnimatedCounter value={85} prefix=">" suffix="%" label="提及率提升" darkMode />
            <AnimatedCounter value={93} suffix="%+" label="语义一致性" darkMode />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="核心技术服务体系" subtitle="CORE TECH SERVICES" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techPillars.map((pillar, index) => (
              <ServiceCard
                key={pillar.id}
                icon={pillar.icon.slice(0, 2)}
                title={pillar.title}
                description={pillar.description}
                items={pillar.features}
                color={pillarColors[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="AI 时代的搜索变革" subtitle="THE AI SEARCH REVOLUTION" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-gray-400" />
                <h3 className="text-xl font-bold text-gray-500">传统搜索时代</h3>
              </div>
              <div className="space-y-6">
                {comparisons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon1 size={20} className="text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-600">{item.left}</p>
                      <p className="text-sm text-gray-400 mt-1">{item.desc1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#023e8a]/10 to-[#00b4d8]/10 rounded-2xl p-8 border border-[#00b4d8]/20">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#00b4d8]" />
                <h3 className="text-xl font-bold text-[#0077b6]">AI 生成式引擎时代</h3>
              </div>
              <div className="space-y-6">
                {comparisons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon2 size={20} className="text-[#00b4d8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#03045e]">{item.right}</p>
                      <p className="text-sm text-[#0077b6]/70 mt-1">{item.desc2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#03045e] rounded-2xl p-6 text-center">
            <p className="text-white text-lg font-medium">
              AI 搜索正在重塑用户获取信息的方式，GEO 优化是品牌在 AI 时代的必修课
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="客户成果与案例" subtitle="CLIENT RESULTS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {clientMetrics.map((metric) => (
              <StatCard
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                color={metric.color}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerCases.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#0077b6] bg-[#caf0f8] rounded-full mb-4">
                  {c.industry}
                </span>
                <h3 className="text-lg font-bold text-[#03045e] mb-3">{c.company}</h3>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500 mb-1">挑战</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.challenge}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500 mb-1">成果</p>
                  <ul className="space-y-1">
                    {c.result.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight size={14} className="text-[#00b4d8] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.result.map((r) => {
                    const match = r.match(/[\d.]+%/)
                    return match ? (
                      <span key={r} className="inline-block px-2 py-0.5 text-xs font-medium text-[#0077b6] bg-[#0077b6]/10 rounded">
                        {match[0]}
                      </span>
                    ) : null
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077b6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            开始您的 GEO 之旅
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            让您的品牌在 AI 搜索时代被看见、被信任、被选择。立即联系我们，获取免费 GEO 诊断报告
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#00b4d8] text-white rounded-full font-medium hover:bg-[#90e0ef] hover:text-[#03045e] transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}

import {
  Cpu,
  Target,
  Building2,
  Users,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react'
import { coreStats, advantages, industryScenarios, customerCases } from '../data/stats'
import SectionTitle from '../components/SectionTitle'
import IndustryCard from '../components/IndustryCard'
import MetaHead from '../components/MetaHead'

const iconMap: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  Cpu,
  Target,
  Building2,
  Users,
  RefreshCw,
}

const industryColors = ['#03045e', '#0077b6', '#00b4d8', '#90e0ef', '#03045e', '#0077b6']

const keyMetrics = [
  { value: '91%', label: '品牌提及率', bg: 'bg-[#03045e]' },
  { value: '94%', label: '信息准确率', bg: 'bg-[#0077b6]' },
  { value: '62%', label: '转化率提升', bg: 'bg-[#00b4d8]' },
  { value: '35%', label: '获客成本降低', bg: 'bg-[#90e0ef]' },
]

const highlightStats = [
  { value: '8+', label: '平台', desc: '覆盖主流AI搜索平台' },
  { value: '93%+', label: '一致性', desc: '品牌信息展示一致性' },
  { value: '85%+', label: '提升', desc: '客户GEO效果平均提升' },
]

export default function Advantages() {
  return (
    <div>
      <MetaHead page="advantages" />
      <section className="bg-gradient-to-br from-[#03045e] to-[#0077b6] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">核心优势</h1>
          <p className="text-lg text-[#90e0ef] tracking-widest uppercase">Why Souke</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="为什么选择搜客科技" subtitle="WHY CHOOSE SOUKE" />
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5 flex flex-col justify-center gap-8">
              {highlightStats.map((stat) => (
                <div key={stat.label} className="flex items-end gap-4">
                  <span className="text-5xl font-bold text-[#00b4d8] leading-none">
                    {stat.value}
                  </span>
                  <div className="pb-1">
                    <span className="text-lg font-bold text-[#03045e]">{stat.label}</span>
                    <p className="text-sm text-gray-500">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-3/5 space-y-5">
              {advantages.map((adv) => {
                const Icon = iconMap[adv.icon]
                return (
                  <div key={adv.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00b4d8]/10 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={20} className="text-[#00b4d8]" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#03045e] mb-1">{adv.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="行业应用场景" subtitle="INDUSTRY SOLUTIONS" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryScenarios.map((industry, idx) => (
              <IndustryCard
                key={industry.title}
                name={industry.title}
                description={industry.description}
                detail={industry.examples.join('、')}
                color={industryColors[idx % industryColors.length]}
              />
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-[#03045e] to-[#0077b6] rounded-xl py-4 px-6 text-center">
            <p className="text-white text-base font-medium">
              覆盖六大核心行业，提供行业定制化GEO优化方案
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="客户成果与案例" subtitle="CLIENT RESULTS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {keyMetrics.map((metric) => (
              <div
                key={metric.label}
                className={`${metric.bg} rounded-xl py-6 px-4 text-center`}
              >
                <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-sm text-white/80">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerCases.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="inline-block bg-[#00b4d8]/10 text-[#0077b6] text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {c.industry}
                </span>
                <h3 className="text-lg font-bold text-[#03045e] mb-3">{c.company}</h3>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">挑战</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.challenge}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">成果</p>
                  <ul className="space-y-1">
                    {c.result.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#00b4d8]" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                  {c.result.map((r) => {
                    const match = r.match(/(\d+%)/)
                    return match ? (
                      <span
                        key={r}
                        className="bg-[#caf0f8] text-[#03045e] text-xs font-medium px-2 py-0.5 rounded"
                      >
                        {match[1]}
                      </span>
                    ) : null
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

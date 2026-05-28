import { ArrowRight, CheckCircle, TrendingUp, Target, Zap, Shield } from 'lucide-react'
import { techPillars, geoSteps } from '../data/services'
import MetaHead from '../components/MetaHead'

const pillarColors = ['#03045e', '#0077b6', '#00b4d8', '#90e0ef']

const comparisonData = [
  { aspect: '优化目标', seo: '搜索引擎排名', geo: 'AI答案中的品牌占位' },
  { aspect: '用户获取方式', seo: '需点击链接', geo: 'AI直接生成答案（零点击认知）' },
  { aspect: '核心手段', seo: '关键词 + 外链', geo: '结构化数据 + 知识图谱' },
  { aspect: '衡量指标', seo: '关键词排名、网站流量', geo: 'AI提及率与引用率（AOR）' },
  { aspect: '技术基础', seo: 'HTML/CSS/关键词优化', geo: 'Schema/JSON-LD/知识图谱' },
  { aspect: '内容形态', seo: '网页文章', geo: '多模态语义内容' },
]

const geoValues = [
  { icon: TrendingUp, title: '提升品牌可见度', desc: '让品牌在AI生成答案中占据核心位置' },
  { icon: Target, title: '精准触达用户', desc: 'AI背书带来更高的用户信任度' },
  { icon: Zap, title: '零点击认知占位', desc: '用户无需点击即可获取品牌信息' },
  { icon: Shield, title: '抗AI幻觉', desc: '建立权威信源，降低AI幻觉影响' },
]

export default function Geo() {
  return (
    <div>
      <MetaHead page="geo" />
      <section className="bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077b6] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GEO 生成式引擎优化</h1>
          <p className="text-lg text-[#00b4d8] tracking-widest uppercase mb-6">Generative Engine Optimization</p>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            一套专门针对 ChatGPT、豆包、Kimi、文心一言等 AI 大模型的内容优化策略体系
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-4">什么是 GEO？</h2>
            <p className="text-sm text-[#0077b6]/70 tracking-widest uppercase">WHAT IS GEO</p>
          </div>

          <div className="bg-gradient-to-br from-[#caf0f8] to-white rounded-2xl p-8 md:p-12 border border-[#00b4d8]/20">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="text-[#0077b6] font-bold">生成式引擎优化（Generative Engine Optimization）</span>
              是一套专门针对 ChatGPT、豆包、Kimi、文心一言、DeepSeek 等 AI 大模型的内容优化策略体系。
              通过优化内容的语义逻辑、结构化呈现和权威背书，让 AI 在生成答案时优先引用品牌信息。
            </p>
            <p className="text-gray-600 leading-relaxed">
              当 AI 替代搜索引擎成为用户获取信息的首选，品牌必须从「被搜索到」转向「被 AI 引用」。
              GEO 不是替代 SEO，而是 AI 时代的品牌认知升级 — 从流量竞争到认知占位。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-4">GEO vs 传统 SEO</h2>
            <p className="text-sm text-[#0077b6]/70 tracking-widest uppercase">GEO VS TRADITIONAL SEO</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">SEO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-700">传统搜索优化</h3>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item) => (
                  <div key={item.aspect} className="flex items-start gap-3">
                    <span className="text-xs text-gray-400 shrink-0 w-24">{item.aspect}</span>
                    <span className="text-sm text-gray-600">{item.seo}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#03045e] to-[#0077b6] rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#00b4d8] flex items-center justify-center">
                  <span className="text-white font-bold">GEO</span>
                </div>
                <h3 className="text-xl font-bold text-white">生成式引擎优化</h3>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item) => (
                  <div key={item.aspect} className="flex items-start gap-3">
                    <span className="text-xs text-[#90e0ef] shrink-0 w-24">{item.aspect}</span>
                    <span className="text-sm text-white/90">{item.geo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-4">GEO 优化全流程</h2>
            <p className="text-sm text-[#0077b6]/70 tracking-widest uppercase">OPTIMIZATION PROCESS</p>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            {geoSteps.map((step, idx) => (
              <div key={step.step} className="flex-1 flex flex-col lg:flex-row items-center">
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-14 h-14 rounded-full bg-[#00b4d8] flex items-center justify-center text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#03045e] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-[200px]">
                    {step.description}
                  </p>
                  <div className="space-y-2 w-full max-w-[200px]">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="bg-[#caf0f8] rounded-lg px-3 py-2 text-xs text-[#03045e] font-medium"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                {idx < geoSteps.length - 1 && (
                  <div className="hidden lg:flex items-center mx-2 mt-8">
                    <ArrowRight size={24} className="text-[#00b4d8]" />
                  </div>
                )}
                {idx < geoSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-3">
                    <ArrowRight size={24} className="text-[#00b4d8] rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-4">GEO 核心能力</h2>
            <p className="text-sm text-[#0077b6]/70 tracking-widest uppercase">CORE CAPABILITIES</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techPillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full bg-[#00b4d8] rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-[#00b4d8] flex items-center justify-center text-white text-sm font-bold">
                        {pillar.icon}
                      </span>
                      <h3 className="text-lg font-bold text-[#03045e]">{pillar.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle size={14} className="text-[#00b4d8]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#03045e] to-[#0077b6] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">GEO 核心价值</h2>
            <p className="text-sm text-[#90e0ef] tracking-widest uppercase">CORE VALUES</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {geoValues.map((value, idx) => (
              <div
                key={value.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#00b4d8]/30 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-[#00b4d8]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#03045e] mb-4">准备好开启您的 GEO 之旅？</h2>
          <p className="text-gray-600 mb-8">
            让 AI 优先引用您的品牌，实现零点击认知占位
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#00b4d8] text-white font-medium rounded-full hover:bg-[#0077b6] transition-colors duration-300"
          >
            免费咨询
          </a>
        </div>
      </section>
    </div>
  )
}

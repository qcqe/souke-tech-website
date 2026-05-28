import { Target, Eye, Calendar } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import MetaHead from '../components/MetaHead'

const milestones = [
  { year: '2022', title: '公司成立', description: '专注GEO技术研发' },
  { year: '2023', title: '推出首个GEO优化平台', description: '服务首批客户' },
  { year: '2024', title: '适配8+主流AI引擎', description: '客户突破50家' },
  { year: '2025', title: '发布AOR监测系统3.0', description: '行业领先' },
]

export default function About() {
  return (
    <div>
      <MetaHead page="about" />
      <section className="bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077b6] py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            关于搜客科技
          </h1>
          <p className="text-[#90e0ef] tracking-widest uppercase text-sm">
            ABOUT SOUKE TECHNOLOGY
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#0077b6] bg-[#caf0f8] rounded-full mb-6">
                技术驱动的 GEO 营销科技公司
              </span>
              <p className="text-gray-600 leading-relaxed mb-6">
                搜客科技是一家专注于 GEO（Generative Engine Optimization）生成式引擎优化的科技公司。我们致力于帮助企业在 AI 搜索时代建立品牌权威，让大语言模型在生成回答时优先引用并准确呈现品牌信息。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                我们自主研发了结构化数据引擎、多模态语义对齐算法和知识图谱运维平台，通过技术手段将企业信息转化为 AI 可理解、可引用的结构化知识，确保品牌在 ChatGPT、文心一言、通义千问等主流 AI 搜索引擎中获得优先展示。
              </p>
              <p className="text-gray-600 leading-relaxed">
                从品牌诊断、策略制定到内容优化、效果监测，搜客科技提供全链路 GEO 优化服务，以可量化的效果帮助客户在 AI 时代赢得品牌竞争优势。
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              <div className="bg-gradient-to-br from-[#0077b6] to-[#023e8a] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-6 translate-x-6" />
                <div className="relative">
                  <div className="text-3xl font-bold">3+<span className="text-base font-normal ml-1">年</span></div>
                  <div className="text-white/80 text-sm mt-1">深耕GEO优化领域</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-6 translate-x-6" />
                <div className="relative">
                  <div className="text-3xl font-bold">8+<span className="text-base font-normal ml-1">平台</span></div>
                  <div className="text-white/80 text-sm mt-1">覆盖主流AI搜索平台</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#03045e] to-[#023e8a] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-6 translate-x-6" />
                <div className="relative">
                  <div className="text-3xl font-bold">&gt;85%<span className="text-base font-normal ml-1">提升</span></div>
                  <div className="text-white/80 text-sm mt-1">品牌AI搜索提及率提升</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#caf0f8]/30">
        <div className="container mx-auto px-4">
          <SectionTitle title="使命与愿景" subtitle="MISSION & VISION" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#caf0f8]">
              <div className="w-12 h-12 rounded-xl bg-[#0077b6]/10 flex items-center justify-center mb-4">
                <Target size={24} className="text-[#0077b6]" />
              </div>
              <h3 className="text-xl font-bold text-[#03045e] mb-3">使命</h3>
              <p className="text-gray-600 leading-relaxed">
                让每个品牌在AI时代都被看见、被信任、被选择
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#caf0f8]">
              <div className="w-12 h-12 rounded-xl bg-[#00b4d8]/10 flex items-center justify-center mb-4">
                <Eye size={24} className="text-[#00b4d8]" />
              </div>
              <h3 className="text-xl font-bold text-[#03045e] mb-3">愿景</h3>
              <p className="text-gray-600 leading-relaxed">
                成为中国领先的GEO生成式引擎优化服务商
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="发展历程" subtitle="MILESTONES" />
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0077b6] to-[#00b4d8]" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0077b6] border-4 border-white shadow z-10" />
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}">
                    <Calendar size={16} className="text-[#00b4d8]" />
                    <span className="text-sm font-bold text-[#0077b6]">{m.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#03045e] mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-500">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { ArrowRight, CheckCircle } from 'lucide-react'
import { techPillars, geoSteps, serviceModes } from '../data/services'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import MetaHead from '../components/MetaHead'

const pillarColors = ['#03045e', '#0077b6', '#00b4d8', '#90e0ef']

export default function Services() {
  return (
    <div>
      <MetaHead page="services" />
      <section className="bg-gradient-to-br from-[#03045e] to-[#0077b6] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">服务体系</h1>
          <p className="text-lg text-[#90e0ef] tracking-widest uppercase">Core Services</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="核心技术服务体系" subtitle="CORE TECH SERVICES" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techPillars.map((pillar, idx) => (
              <ServiceCard
                key={pillar.id}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                items={pillar.features}
                color={pillarColors[idx % pillarColors.length]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="GEO 优化全流程" subtitle="OPTIMIZATION PROCESS" />
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
                        className="bg-white rounded-lg px-3 py-2 text-xs text-gray-600 shadow-sm"
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
          <div className="mt-12 bg-gradient-to-r from-[#03045e] to-[#0077b6] rounded-xl py-4 px-6 text-center">
            <p className="text-white text-base font-medium">
              从诊断到迭代，全链路闭环服务
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="灵活的服务模式" subtitle="FLEXIBLE SERVICE MODELS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceModes.map((mode) => (
              <div
                key={mode.id}
                className={`relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                  mode.recommended
                    ? 'border-2 border-[#00b4d8]'
                    : 'border border-gray-200'
                }`}
              >
                {mode.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00b4d8] text-white text-xs font-bold px-4 py-1 rounded-full">
                    推荐
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#03045e] mb-1">{mode.name}</h3>
                <p className="text-xs text-[#0077b6]/70 tracking-wider uppercase mb-3">
                  {mode.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {mode.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="shrink-0 mt-0.5 text-[#00b4d8]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#0077b6] font-medium pt-3 border-t border-gray-100">
                  {mode.highlight}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#caf0f8] rounded-xl py-4 px-6 text-center">
            <p className="text-sm text-[#03045e] font-medium">
              所有服务模式均包含：品牌诊断 + 月度数据报告 + 专属策略顾问
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

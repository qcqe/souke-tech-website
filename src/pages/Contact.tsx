import { useState } from 'react'
import { Building2, Globe, Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react'

const contactItems = [
  { icon: Building2, label: '公司名称', value: '深圳市搜客科技有限公司' },
  { icon: Globe, label: '核心业务', value: 'GEO 生成式引擎优化' },
  { icon: Globe, label: '服务模式', value: '年度服务 | 项目制 | RaaS' },
  { icon: Globe, label: '官方网站', value: 'www.souke-tech.com' },
  { icon: Mail, label: '联系邮箱', value: '1106588888@qq.com' },
  { icon: Phone, label: '联系电话', value: '13168796666' },
  { icon: MapPin, label: '公司地址', value: '深圳市福田区深港科技合作区长富金茂大厦1908' },
]

const industries = [
  '科技与SaaS',
  '制造业',
  '金融',
  '医疗',
  '电商',
  '出海企业',
  '其他',
]

interface FormData {
  name: string
  company: string
  email: string
  industry: string
  description: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    industry: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(data.message || '提交失败，请稍后重试')
      }
    } catch (err) {
      setError('网络错误，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-[#03045e] to-[#0077b6] py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            联系我们
          </h1>
          <p className="text-[#90e0ef] text-lg tracking-widest">CONTACT US</p>
        </div>
      </section>

      <section className="bg-[#caf0f8]/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#03045e] mb-8">
                联系信息
              </h2>
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00b4d8]/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-[#00b4d8]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      <p className="text-[#03045e] font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#03045e] mb-8">
                咨询表单
              </h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00b4d8]/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#00b4d8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#03045e] mb-2">
                    提交成功！
                  </h3>
                  <p className="text-gray-500 text-sm text-center">
                    感谢您的咨询，我们将在1-2个工作日内与您联系。
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', company: '', email: '', industry: '', description: '' })
                    }}
                    className="mt-6 px-6 py-2 text-[#0077b6] font-medium hover:text-[#03045e] transition-colors"
                  >
                    返回表单
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#03045e] mb-1.5">
                      姓名 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的姓名"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#03045e] mb-1.5">
                      公司名称 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="请输入公司名称"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#03045e] mb-1.5">
                      联系邮箱 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="请输入联系邮箱"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#03045e] mb-1.5">
                      所属行业 <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] outline-none transition-colors text-sm bg-white"
                    >
                      <option value="">请选择行业</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#03045e] mb-1.5">
                      需求描述
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="请简要描述您的需求或问题..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] outline-none transition-colors text-sm resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-[#00b4d8] text-white font-medium rounded-lg hover:bg-[#0077b6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        提交中...
                      </>
                    ) : (
                      '提交咨询'
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    提交后系统将自动发送邮件通知我们，我们会尽快回复您
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#03045e] to-[#0077b6] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            让 AI 替您的品牌说话
          </h2>
          <p className="text-[#90e0ef] text-lg">
            技术驱动的 GEO 营销科技公司
          </p>
        </div>
      </section>
    </div>
  )
}

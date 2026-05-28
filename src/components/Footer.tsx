import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: '首页', href: '/' },
  { label: '公司介绍', href: '#about' },
  { label: '服务介绍', href: '#services' },
  { label: '公司优势', href: '#advantages' },
  { label: '公司新闻', href: '#news' },
  { label: '联系我们', href: '#contact' },
]

const contactInfo = [
  { icon: MapPin, text: '深圳市福田区深港科技合作区长富金茂大厦1908' },
  { icon: Phone, text: '13168796666' },
  { icon: Mail, text: '1106588888@qq.com' },
]

export default function Footer() {
  return (
    <footer className="bg-[#03045e] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0077b6] flex items-center justify-center">
                <span className="text-white font-bold text-sm">搜</span>
              </div>
              <span className="text-xl font-bold">搜客科技</span>
            </div>
            <p className="text-[#90e0ef]/70 text-sm leading-relaxed">
              专注于企业数字化营销解决方案，以技术创新驱动业务增长，助力企业实现数字化转型与商业成功。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00b4d8]">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#90e0ef]/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00b4d8]">联系方式</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <item.icon size={16} className="text-[#00b4d8] shrink-0" />
                  <span className="text-sm text-[#90e0ef]/70">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-[#90e0ef]/50">
            © {new Date().getFullYear()} 搜客科技 版权所有
          </p>
        </div>
      </div>
    </footer>
  )
}

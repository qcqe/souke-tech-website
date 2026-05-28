import { useParams, Link } from 'react-router-dom'
import { newsList } from '@/data/news'
import { ArrowLeft } from 'lucide-react'

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>()
  const article = newsList.find((item) => item.id === id)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#03045e] mb-4">文章未找到</h2>
          <Link to="/news" className="text-[#0077b6] hover:underline">
            返回新闻列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-[#03045e] to-[#0077b6] py-24">
        <div className="container mx-auto px-4">
          <nav className="text-[#90e0ef]/70 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              首页
            </Link>
            <span className="mx-2">&gt;</span>
            <Link to="/news" className="hover:text-white transition-colors">
              公司新闻
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{article.title}</span>
          </nav>
        </div>
      </section>

      <section className="bg-[#caf0f8]/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#00b4d8]/10 text-[#00b4d8] mb-4">
              {article.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-[#03045e] mb-4">
              {article.title}
            </h1>
            <p className="text-gray-400 text-sm mb-8">{article.date}</p>

            <div className="prose prose-gray max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00b4d8] text-white font-medium rounded-full hover:bg-[#0077b6] transition-colors"
              >
                <ArrowLeft size={18} />
                返回列表
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

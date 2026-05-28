import { useState } from 'react'
import { Link } from 'react-router-dom'
import { newsList, newsCategories } from '@/data/news'
import { cn } from '@/lib/utils'
import MetaHead from '../components/MetaHead'

export default function News() {
  const [activeCategory, setActiveCategory] = useState<string>('全部')

  const filteredNews =
    activeCategory === '全部'
      ? newsList
      : newsList.filter((item) => item.category === activeCategory)

  return (
    <div>
      <MetaHead page="news" />
      <section className="bg-gradient-to-br from-[#03045e] to-[#0077b6] py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            公司新闻
          </h1>
          <p className="text-[#90e0ef] text-lg tracking-widest">NEWS &amp; INSIGHTS</p>
        </div>
      </section>

      <section className="bg-white py-6 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === cat
                    ? 'bg-[#00b4d8] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#caf0f8]/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-[#03045e] to-[#0077b6] h-48" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#00b4d8]/10 text-[#00b4d8] mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-lg text-[#03045e] mb-2 group-hover:text-[#0077b6] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{item.date}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

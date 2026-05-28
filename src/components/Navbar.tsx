import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/store/useAppStore'

const navLinks = [
  { label: '首页', href: '/' },
  { label: '公司介绍', href: '/about' },
  { label: 'GEO介绍', href: '/geo' },
  { label: '服务介绍', href: '/services' },
  { label: '公司优势', href: '/advantages' },
  { label: '公司新闻', href: '/news' },
  { label: '联系我们', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppStore()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <div className="w-8 h-8 rounded-lg bg-[#00b4d8] flex items-center justify-center">
            <span className="text-white font-bold text-sm">搜</span>
          </div>
          <span className={cn(
            'text-xl font-bold transition-colors',
            scrolled ? 'text-[#03045e]' : 'text-white'
          )}>
            搜客科技
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#00b4d8]',
                scrolled ? 'text-[#03045e]' : 'text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              'px-5 py-2 text-sm font-medium rounded-full transition-all',
              scrolled
                ? 'bg-[#0077b6] text-white hover:bg-[#03045e]'
                : 'bg-white text-[#03045e] hover:bg-[#00b4d8] hover:text-white'
            )}
          >
            免费咨询
          </Link>
        </div>

        <button
          className={cn(
            'lg:hidden p-2 transition-colors',
            scrolled ? 'text-[#03045e]' : 'text-white'
          )}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md',
          mobileMenuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[#03045e] text-sm font-medium py-2 hover:text-[#0077b6] transition-colors"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 px-5 py-2.5 bg-[#0077b6] text-white text-sm font-medium rounded-full hover:bg-[#03045e] transition-colors text-center"
            onClick={closeMobileMenu}
          >
            免费咨询
          </Link>
        </div>
      </div>
    </nav>
  )
}

import React, { useState, useEffect } from 'react'
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react'
import { Link, useRouter } from '../../router/RouterContext'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { navigate } = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group select-none">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="h-5 w-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Teal Dental Studio
              </span>
              <span className="text-[10px] font-bold text-teal-600 tracking-wider uppercase flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AI Voice Receptionist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="#features" 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link 
              to="#product-tour" 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Product Tour
            </Link>
            <Link 
              to="#how-it-works" 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </Link>
            <Link 
              to="#benefits" 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Benefits
            </Link>
            <Link 
              to="#faq" 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 transition-all duration-150 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25 cursor-pointer"
            >
              <span>Open Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Dashboard
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-100 space-y-2 animate-fadeIn">
            <Link
              to="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              to="#product-tour"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
            >
              Product Tour
            </Link>
            <Link
              to="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
            >
              How It Works
            </Link>
            <Link
              to="#benefits"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
            >
              Benefits
            </Link>
            <Link
              to="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
            >
              FAQ
            </Link>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  navigate('/dashboard')
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>Launch Reception Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
export default Navbar

import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Link, useRouter } from '../../router/RouterContext'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const { navigate } = useRouter()

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Description */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Sparkles className="h-4.5 w-4.5 fill-current" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                Teal Dental Studio
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              An intelligent voice receptionist platform designed to help dental clinics manage incoming patient calls, organize appointment scheduling, and coordinate reception activity through one connected hub.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#product-tour" className="hover:text-white transition-colors">
                  Product Tour
                </Link>
              </li>
              <li>
                <Link to="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="#benefits" className="hover:text-white transition-colors">
                  Practice Benefits
                </Link>
              </li>
              <li>
                <Link to="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Dashboard Access Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Staff Access
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open the clinic control center to monitor live calls, review transcripts, and configure practice settings.
            </p>
            <div className="pt-1">
              <button
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
              >
                <span>Launch Dashboard</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Teal Dental Studio. All rights reserved.
          </p>
          <p className="text-slate-500 font-medium">
            AI Voice Receptionist & Clinic Management Hub
          </p>
        </div>

      </div>
    </footer>
  )
}
export default Footer

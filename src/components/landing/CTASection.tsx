import React from 'react'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { useRouter } from '../../router/RouterContext'

export const CTASection: React.FC = () => {
  const { navigate } = useRouter()

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl border border-slate-800">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-teal-400" />
              <span>Ready to Get Started?</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Make Your Dental Reception Smarter.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Explore the platform and discover a more organised way to manage dental reception conversations.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-white hover:bg-slate-100 active:scale-98 transition-all duration-150 shadow-xl shadow-black/20 hover:shadow-2xl cursor-pointer"
              >
                <span>Explore Dashboard</span>
                <ArrowRight className="h-5 w-5 text-blue-600" />
              </button>
            </div>

            {/* Highlights row */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                Live Conversational Voice Agent
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                Instant Calendar Booking Coordination
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                Searchable Turn-by-Turn Transcripts
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
export default CTASection

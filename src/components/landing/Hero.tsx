import React, { useState } from 'react'
import { 
  ArrowRight, 
  Play, 
  Pause, 
  Sparkles, 
  CheckCircle2, 
  Volume2
} from 'lucide-react'
import { useRouter } from '../../router/RouterContext'

export const Hero: React.FC = () => {
  const { navigate } = useRouter()
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  // Demo audio dialogue snippet preview
  const sampleDialogue = [
    {
      sender: 'patient',
      text: "Hi, I'd like to book a routine cleaning with Dr. Smith sometime this Friday morning."
    },
    {
      sender: 'ai',
      text: "Certainly! Dr. Sarah Smith has an open slot at 10:00 AM this Friday. May I confirm your full name and phone number to reserve this for you?"
    }
  ]

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/60 border-b border-slate-200/60">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-200/30 via-teal-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold text-blue-800 tracking-wide">
                Specialized for Dental Practices
              </span>
              <span className="text-[11px] font-semibold text-blue-600 bg-white px-2 py-0.5 rounded-full border border-blue-200/60">
                Sarah v2.4
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Your Dental Reception,{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                Powered by AI.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              An intelligent voice receptionist designed to help dental clinics manage patient calls, appointment conversations and reception activities through one connected platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 transition-all duration-150 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 cursor-pointer"
              >
                <span>Explore Dashboard</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-150 shadow-xs cursor-pointer"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Live Call Transcripts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Google Calendar Sync</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Instant Patient Intake</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium AI Voice Receptionist Interactive Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 -z-10" />

              {/* Main Reception Card Preview */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-7 space-y-6">
                
                {/* Receptionist Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-bold text-lg">
                        S
                      </div>
                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center" title="Online" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-sm font-extrabold text-slate-900">Sarah</h2>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/50 uppercase">
                          AI Voice Agent
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">Teal Dental Studio Reception</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Ready for Calls</span>
                  </div>
                </div>

                {/* Animated Voice Acoustic Waveform Card */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-inner flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
                  <div className="w-full flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-teal-400">
                      <Volume2 className="h-3.5 w-3.5" />
                      Conversational Audio
                    </span>
                    <span className="text-[10px] text-slate-500">Real-Time Voice Stream</span>
                  </div>

                  {/* Waveform bars */}
                  <div className="h-12 flex items-center justify-center gap-1.5 w-full py-2">
                    {[40, 65, 85, 45, 95, 70, 50, 80, 100, 75, 45, 60, 90, 55, 35].map((height, idx) => (
                      <span
                        key={idx}
                        className={`w-1 rounded-full bg-gradient-to-t from-teal-400 to-blue-400 transition-all duration-300 ${
                          isPlayingAudio ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          height: isPlayingAudio ? `${height}%` : `${Math.max(20, height * 0.45)}%`,
                          animationDelay: `${idx * 0.08}s`
                        }}
                      />
                    ))}
                  </div>

                  {/* Play Simulation Button */}
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 transition-colors text-slate-200 cursor-pointer"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Pause className="h-3.5 w-3.5 text-teal-400 fill-teal-400" />
                        <span>Pause Audio Simulation</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-3.5 w-3.5 text-teal-400 fill-teal-400" />
                        <span>Simulate Call Audio</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Live Conversation Snippet */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="h-6 w-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      P
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Incoming Caller</span>
                      <p className="text-slate-800 font-medium mt-0.5">{sampleDialogue[0].text}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                      AI
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-blue-700 uppercase">Sarah (Receptionist)</span>
                      <p className="text-slate-900 font-medium mt-0.5">{sampleDialogue[1].text}</p>
                    </div>
                  </div>
                </div>

                {/* Real-time Extracted Booking Summary */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-teal-50/30 border border-teal-200/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                      Structured Intake Extraction
                    </span>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded-md">
                      Verified Slot
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="bg-white p-2 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 font-semibold block">Doctor</span>
                      <span className="font-bold text-slate-800">Dr. Sarah Smith</span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 font-semibold block">Service</span>
                      <span className="font-bold text-slate-800">Teeth Cleaning</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Hero

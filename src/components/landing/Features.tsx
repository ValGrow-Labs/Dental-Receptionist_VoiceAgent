import React from 'react'
import { 
  Mic, 
  PhoneCall, 
  CalendarCheck, 
  FileText, 
  History, 
  BarChart2, 
  Activity, 
  LayoutDashboard,
  CheckCircle2,
  Sparkles
} from 'lucide-react'

interface FeatureItem {
  icon: React.ElementType
  title: string
  description: string
  tag: string
  accentColor: string
  badgeColor: string
}

export const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: Mic,
      title: 'AI Voice Receptionist',
      description: 'Powered by Sarah, an intelligent conversational voice receptionist that speaks with patients naturally, answers questions, and coordinates bookings.',
      tag: 'Real-Time Voice',
      accentColor: 'from-blue-600 to-teal-400',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: PhoneCall,
      title: 'Patient Call Handling',
      description: 'Conversationally gathers patient full names, callback numbers, visit reasons, and doctor preferences without rigid telephone keypad menus.',
      tag: 'Natural Flow',
      accentColor: 'from-teal-500 to-emerald-400',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      icon: CalendarCheck,
      title: 'Appointment Intake & Booking',
      description: 'Identifies desired appointment dates and time slots, checks clinic calendar availability, and commits reservations with clear summaries.',
      tag: 'Google Calendar Sync',
      accentColor: 'from-sky-500 to-blue-600',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      icon: FileText,
      title: 'Real-Time Call Transcripts',
      description: 'Records live, turn-by-turn dialogue messages with precise timestamps so dental staff can review exact patient statements anytime.',
      tag: 'Instant Logs',
      accentColor: 'from-indigo-500 to-blue-500',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      icon: History,
      title: 'Searchable Call Archives',
      description: 'Maintain a comprehensive archive of incoming calls with filterable outcomes (Booked, Inquiry, Rescheduled), duration, and audio review.',
      tag: 'Audit Trail',
      accentColor: 'from-violet-500 to-purple-500',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200'
    },
    {
      icon: BarChart2,
      title: 'Reception Analytics',
      description: 'Track daily call volumes, booking conversion rates, missed calls, and average call duration through clean data visualizations.',
      tag: 'Performance Metrics',
      accentColor: 'from-blue-500 to-cyan-500',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: Activity,
      title: 'Voice Agent Monitoring',
      description: 'Oversee live agent connectivity, speech state (listening, speaking, processing), soundwave activity, and audio volume controls.',
      tag: 'Live Status',
      accentColor: 'from-emerald-500 to-teal-500',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      icon: LayoutDashboard,
      title: 'Centralised Clinic Hub',
      description: 'A unified workspace for clinic teams to configure practice hours, dentist rosters, notification preferences, and patient records.',
      tag: 'Management Hub',
      accentColor: 'from-slate-700 to-slate-900',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200'
    }
  ]

  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Built Specifically For Dentistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Supported Product Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every feature is verified and connected to our live reception platform, providing your dental practice with dependable voice and booking management.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`h-11 w-11 rounded-xl bg-gradient-to-tr ${feature.accentColor} flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${feature.badgeColor} uppercase tracking-wider`}>
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>

                </div>

                {/* Card Bottom Capability indicator */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                  <span>Implemented & Ready</span>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
export default Features

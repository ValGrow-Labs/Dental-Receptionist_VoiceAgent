import React from 'react'
import { PhoneIncoming, Bot, LayoutDashboard, Sparkles } from 'lucide-react'

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Patient Calls the Dental Clinic',
      description: 'Patients dial your clinic number when seeking appointments, inquiring about dental treatments, or reporting tooth pain. Calls connect immediately with zero hold times.',
      icon: PhoneIncoming,
      accent: 'from-blue-600 to-sky-500',
      badge: 'Immediate Response',
      detailSnippet: (
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 space-y-1.5 text-xs text-left">
          <div className="flex items-center justify-between text-slate-500 font-mono text-[10px]">
            <span>INCOMING CALL</span>
            <span className="text-emerald-600 font-bold">CONNECTED</span>
          </div>
          <p className="font-semibold text-slate-800">"Hi, I'd like to book an appointment with Dr. Davies."</p>
        </div>
      )
    },
    {
      step: '02',
      title: 'AI Receptionist Communicates & Collects Info',
      description: 'Sarah greets the patient conversationally, listens to their reason for visit, gathers contact details, checks Google Calendar availability, and reserves the requested slot.',
      icon: Bot,
      accent: 'from-teal-500 to-emerald-400',
      badge: 'Natural Dialogue & Verification',
      detailSnippet: (
        <div className="bg-teal-50/60 rounded-xl p-3 border border-teal-200/80 space-y-1.5 text-xs text-left">
          <div className="flex items-center justify-between text-teal-800 font-mono text-[10px]">
            <span>AI CONVERSATIONAL INTAKE</span>
            <span className="text-teal-600 font-bold">CHECKING CALENDAR</span>
          </div>
          <p className="text-slate-800 font-medium">Verified slot: <strong className="text-teal-900">Thursday at 2:30 PM</strong> with Dr. Marcus Davies.</p>
        </div>
      )
    },
    {
      step: '03',
      title: 'Clinic Team Reviews via Central Dashboard',
      description: 'Your dental team inspects confirmed appointment details, complete call transcripts, audio recordings, and calendar operations all within the centralized dashboard.',
      icon: LayoutDashboard,
      accent: 'from-blue-600 to-indigo-600',
      badge: 'Centralized Oversight',
      detailSnippet: (
        <div className="bg-blue-50/60 rounded-xl p-3 border border-blue-200/80 space-y-1.5 text-xs text-left">
          <div className="flex items-center justify-between text-blue-800 font-mono text-[10px]">
            <span>DASHBOARD RECORD</span>
            <span className="text-blue-600 font-bold">SYNCED</span>
          </div>
          <p className="text-slate-800 font-medium">Record created with transcript, patient info & doctor assignment.</p>
        </div>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Simple 3-Step Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From the initial phone ring to calendar confirmation, see how our voice receptionist coordinates patient appointments smoothly.
          </p>
        </div>

        {/* 3 Step Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-6 relative group"
              >
                {/* Step Pill & Header */}
                <div className="flex items-center justify-between">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-tr ${item.accent} flex items-center justify-center text-white shadow-md shadow-blue-500/10 font-black text-base`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors font-mono">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Live Preview Snippet Box */}
                <div>
                  {item.detailSnippet}
                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
export default HowItWorks

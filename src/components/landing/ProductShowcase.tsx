import React, { useState } from 'react'
import { 
  BarChart3, 
  Mic, 
  Calendar, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Search, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react'
import { useRouter } from '../../router/RouterContext'

export const ProductShowcase: React.FC = () => {
  const { navigate } = useRouter()
  const [activeTab, setActiveTab] = useState<'analytics' | 'voice' | 'appointments' | 'archives'>('analytics')

  return (
    <section id="product-tour" className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Product Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            See the Reception Platform in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore the central hub where patient calls, AI receptionist conversations, and dental appointment records synchronize in real time.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Reception Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('voice')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'voice'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Mic className="h-4 w-4" />
            <span>AI Voice & Transcripts</span>
          </button>

          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'appointments'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Appointment Intake</span>
          </button>

          <button
            onClick={() => setActiveTab('archives')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'archives'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Call Archives</span>
          </button>
        </div>

        {/* Mac OS Window / Browser Mockup Chrome */}
        <div className="rounded-3xl border border-slate-200 shadow-2xl overflow-hidden bg-slate-900 max-w-5xl mx-auto">
          
          {/* Window Top Bar */}
          <div className="bg-slate-800 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
            </div>

            <div className="px-4 py-1 rounded-lg bg-slate-900 text-slate-400 font-mono text-xs flex items-center gap-2 border border-slate-700/60 max-w-xs w-full justify-center">
              <span className="text-emerald-400">🔒</span>
              <span className="truncate">reception.tealdental.com/dashboard</span>
            </div>

            <button
              onClick={() => navigate('/dashboard')}
              className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span className="hidden sm:inline">Open Live</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Window Content Container */}
          <div className="p-6 sm:p-8 bg-slate-950 text-slate-100 min-h-[440px]">
            
            {/* VIEW 1: Analytics & Metrics */}
            {activeTab === 'analytics' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Daily Reception Metrics & Call Throughput</span>
                    </h3>
                    <p className="text-xs text-slate-400">Live summary of incoming patient conversations for Teal Dental Studio</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Status: Sarah Online
                  </span>
                </div>

                {/* Metric Cards Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 font-medium">Total Calls Today</span>
                    <div className="text-2xl font-black text-white font-mono">24</div>
                    <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" /> +12% vs yesterday
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 font-medium">Appointments Booked</span>
                    <div className="text-2xl font-black text-emerald-400 font-mono">18</div>
                    <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" /> +8% vs yesterday
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 font-medium">Average Duration</span>
                    <div className="text-2xl font-black text-white font-mono">2m 14s</div>
                    <span className="text-[11px] text-slate-400 font-medium">Optimal intake speed</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 font-medium">Booking Success Rate</span>
                    <div className="text-2xl font-black text-teal-400 font-mono">94.2%</div>
                    <span className="text-[11px] text-teal-400 font-medium">Based on 24 inquiries</span>
                  </div>
                </div>

                {/* Simulated Chart Bars Visual */}
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-slate-300">Weekly Call Distribution</span>
                    <span>Mon - Sun Call Volume</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 pt-2 h-28 items-end">
                    {[
                      { day: 'Mon', calls: 28, pct: '58%' },
                      { day: 'Tue', calls: 35, pct: '72%' },
                      { day: 'Wed', calls: 42, pct: '88%' },
                      { day: 'Thu', calls: 30, pct: '62%' },
                      { day: 'Fri', calls: 48, pct: '100%' },
                      { day: 'Sat', calls: 20, pct: '42%' },
                      { day: 'Sun', calls: 5, pct: '12%' },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                        <div 
                          className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-teal-400 hover:brightness-125 transition-all"
                          style={{ height: item.pct }}
                          title={`${item.day}: ${item.calls} calls`}
                        />
                        <span className="text-[10px] text-slate-400 font-mono">{item.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: Voice & Transcripts */}
            {activeTab === 'voice' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center font-bold text-white shadow-md">
                      S
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Sarah — AI Receptionist Voice Session</h3>
                      <span className="text-xs text-emerald-400 font-mono">Agent Status: Active • Connected</span>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                    Call ID: #CAL-7892
                  </span>
                </div>

                {/* Transcript Dialog Stream */}
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                      <span className="text-teal-400 font-bold">PATIENT (Emily Watson)</span>
                      <span>00:04</span>
                    </div>
                    <p className="text-slate-200">
                      "Hi Sarah, I need to schedule an appointment for tooth pain on my lower left molar. Do you have anything available with Dr. Marcus Davies this Thursday?"
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/40 space-y-1">
                    <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                      <span className="text-blue-400 font-bold">SARAH (AI Dental Receptionist)</span>
                      <span>00:11</span>
                    </div>
                    <p className="text-slate-100">
                      "I'm sorry to hear you're experiencing tooth pain, Emily. Let me check Dr. Davies' calendar right away for Thursday. He has an opening at 2:30 PM. Would that time work for your visit?"
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                      <span className="text-teal-400 font-bold">PATIENT (Emily Watson)</span>
                      <span>00:19</span>
                    </div>
                    <p className="text-slate-200">
                      "Yes, 2:30 PM on Thursday is perfect. Thank you so much."
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-900/50 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Appointment successfully synced to Google Calendar (Slot Locked)
                  </span>
                  <span className="font-mono text-slate-400">Response: 1.1s</span>
                </div>
              </div>
            )}

            {/* VIEW 3: Appointment Intake */}
            {activeTab === 'appointments' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="pb-4 border-b border-slate-800">
                  <h3 className="text-base font-bold text-white">Structured Patient Appointment Details</h3>
                  <p className="text-xs text-slate-400">Captured in real time during the phone call without manual staff data entry</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Patient Information</span>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Patient Name</span>
                        <span className="font-bold text-white">Emily Watson</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Contact Number</span>
                        <span className="font-mono text-white">(555) 234-5678</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Patient Type</span>
                        <span className="text-emerald-400 font-medium">Existing Patient</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Clinical Booking</span>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Assigned Doctor</span>
                        <span className="font-bold text-blue-400">Dr. Marcus Davies</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Reason for Visit</span>
                        <span className="text-white">Toothache / Molar Evaluation</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Scheduled Date & Time</span>
                        <span className="font-bold text-white">Thursday, Jul 24 • 2:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Google Calendar Integration</span>
                      <span className="text-[11px] text-slate-400">Real-time bi-directional slot check & confirmation</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    Synced Successfully
                  </span>
                </div>
              </div>
            )}

            {/* VIEW 4: Call Archives */}
            {activeTab === 'archives' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white">Call Archives & Patient Records</h3>
                    <p className="text-xs text-slate-400">Historical records of reception conversations and outcome classifications</p>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                    <input
                      type="text"
                      readOnly
                      value="Filter by patient..."
                      className="pl-8 pr-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-400 w-44"
                    />
                  </div>
                </div>

                {/* Table representation */}
                <div className="overflow-x-auto text-xs">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                        <th className="py-2.5 px-3">Patient</th>
                        <th className="py-2.5 px-3">Doctor</th>
                        <th className="py-2.5 px-3">Duration</th>
                        <th className="py-2.5 px-3">Outcome</th>
                        <th className="py-2.5 px-3">Calendar</th>
                        <th className="py-2.5 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-sans">
                      <tr className="hover:bg-slate-900/50">
                        <td className="py-2.5 px-3 font-bold text-white">Emily Watson</td>
                        <td className="py-2.5 px-3 text-slate-300">Dr. Marcus Davies</td>
                        <td className="py-2.5 px-3 font-mono text-slate-400">2m 45s</td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Booked
                          </span>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="text-emerald-400 font-medium">Synced</span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <span className="text-blue-400 hover:underline cursor-pointer">View Transcript</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-900/50">
                        <td className="py-2.5 px-3 font-bold text-white">Michael Chen</td>
                        <td className="py-2.5 px-3 text-slate-300">Dr. Sarah Smith</td>
                        <td className="py-2.5 px-3 font-mono text-slate-400">1m 50s</td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Booked
                          </span>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="text-emerald-400 font-medium">Synced</span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <span className="text-blue-400 hover:underline cursor-pointer">View Transcript</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-900/50">
                        <td className="py-2.5 px-3 font-bold text-white">Sarah Jenkins</td>
                        <td className="py-2.5 px-3 text-slate-400">General Inquiry</td>
                        <td className="py-2.5 px-3 font-mono text-slate-400">1m 12s</td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                            Inquiry Only
                          </span>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="text-slate-500 font-medium">—</span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <span className="text-blue-400 hover:underline cursor-pointer">View Transcript</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>Inspect complete call logs in dashboard</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Window Footer Bar */}
          <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="h-4 w-4 text-teal-400" />
              Preserving patient confidentiality with structured clinic recording
            </span>
            <button
              onClick={() => navigate('/dashboard')}
              className="text-white bg-blue-600 hover:bg-blue-700 font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <span>Explore Full Live Dashboard</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
export default ProductShowcase

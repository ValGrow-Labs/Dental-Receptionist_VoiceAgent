import React from 'react'
import { 
  Users, 
  Sparkles, 
  FolderSync, 
  CalendarSearch, 
  Eye, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Building2
} from 'lucide-react'

export const Benefits: React.FC = () => {
  const benefitPoints = [
    {
      icon: Users,
      title: 'Helps Manage Incoming Patient Conversations',
      description: 'Provides a reliable first point of contact during busy morning rushes and staff handover periods, ensuring every caller is greeted courteously and attended to.',
      tag: 'Caller Flow'
    },
    {
      icon: Clock,
      title: 'Reduces Repetitive Reception Intake Work',
      description: 'Handles routine questions regarding hours, dentist availability, and appointment scheduling so front desk staff can focus on welcoming in-clinic patients.',
      tag: 'Staff Relief'
    },
    {
      icon: FolderSync,
      title: 'Keeps Call Information Organised',
      description: 'Automatically pairs patient names, phone numbers, visit reasons, and preferred doctors into structured digital logs rather than scattered handwritten notes.',
      tag: 'Data Accuracy'
    },
    {
      icon: CalendarSearch,
      title: 'Makes Appointment Information Easier to Review',
      description: 'Staff can quickly verify patient preferences, review exact conversation transcripts, and confirm clinic schedule alignments prior to patient arrival.',
      tag: 'Clinical Preparation'
    },
    {
      icon: Eye,
      title: 'Central Place to Monitor Reception Activity',
      description: 'Gives clinic managers and dentists clear visibility into daily call throughput, booking outcomes, and voice receptionist logs through one connected dashboard.',
      tag: 'Unified Oversight'
    }
  ]

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Practical Clinic Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Designed for Everyday Dental Practice Needs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A practical voice assistant built to complement your reception team, keep patient records tidy, and streamline scheduling.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitPoints.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600" />
                  <span>Practical operational improvement</span>
                </div>
              </div>
            )
          })}

          {/* Practice Summary Card */}
          <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-7 text-white shadow-lg flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">
                Tailored for Teal Dental Studio
              </h3>
              <p className="text-xs sm:text-sm text-blue-50 leading-relaxed">
                Connects directly to your doctor schedules, respects clinic working hours, and coordinates patient appointments with accuracy.
              </p>
            </div>

            <div className="pt-3 border-t border-white/20 text-xs font-semibold flex items-center gap-1.5 text-white">
              <ShieldCheck className="h-4 w-4" />
              <span>Covers Dr. Sarah Smith & Dr. Marcus Davies</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Benefits

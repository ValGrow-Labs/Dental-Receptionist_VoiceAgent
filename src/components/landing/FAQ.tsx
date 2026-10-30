import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'What is an AI dental receptionist?',
      answer: 'An AI dental receptionist is an intelligent voice assistant specifically configured for dental practices. In our platform, Sarah answers patient phone calls, speaks with callers conversationally in real time, answers common practice questions, and helps schedule dental visits directly with clinic doctors.'
    },
    {
      question: 'How does the voice assistant work?',
      answer: 'The voice assistant uses conversational speech technology to understand natural spoken language over the phone. When a patient calls, Sarah listens, responds with spoken audio, asks relevant questions to understand the patient’s dental needs, and coordinates with the clinic’s appointment schedule.'
    },
    {
      question: 'Can it collect appointment information?',
      answer: 'Yes. Sarah systematically collects patient details conversationally: full patient name, contact phone number, doctor preference (such as Dr. Sarah Smith or Dr. Marcus Davies), reason for visit (cleaning, routine checkup, filling, toothache), and preferred date and time. Before confirming, the system verifies availability in the clinic calendar.'
    },
    {
      question: 'Can clinic staff review call history?',
      answer: 'Yes. All completed and incoming calls are logged in the Call Archives section. Clinic staff can review the exact date, call duration, caller phone number, call outcome (Booked, Inquiry Only, Rescheduled, Missed), audio playback, and the complete word-for-word turn-by-turn transcript.'
    },
    {
      question: 'What information is available in the dashboard?',
      answer: 'The dashboard provides a centralized hub with total call statistics, appointment booking numbers, call duration averages, weekly call throughput charts, live audio waveform monitoring, structured booking summaries, clinic calendar integration status, and practice configuration settings.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Clear answers about Sarah, voice call intake, appointment synchronization, and dashboard management.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
export default FAQ

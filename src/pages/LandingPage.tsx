import React, { useEffect } from 'react'
import { Navbar } from '../components/landing/Navbar'
import { Hero } from '../components/landing/Hero'
import { ProductShowcase } from '../components/landing/ProductShowcase'
import { Features } from '../components/landing/Features'
import { HowItWorks } from '../components/landing/HowItWorks'
import { Benefits } from '../components/landing/Benefits'
import { FAQ } from '../components/landing/FAQ'
import { CTASection } from '../components/landing/CTASection'
import { Footer } from '../components/landing/Footer'

export const LandingPage: React.FC = () => {
  // Ensure landing page maintains crisp healthcare SaaS theme
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Features Section */}
        <Features />

        {/* How It Works Workflow */}
        <HowItWorks />

        {/* Clinic Benefits */}
        <Benefits />

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Closing Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage

import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { TemplatesSection } from '@/components/sections/TemplatesSection'
import { TargetAudienceSection } from '@/components/sections/TargetAudienceSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Templates Gallery */}
      <TemplatesSection />
      
      {/* Target Audience */}
      <TargetAudienceSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
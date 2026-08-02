import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { IndustryTicker } from '@/components/industry-ticker'
import { ProductCategories } from '@/components/product-categories'
import { PackagingFinder } from '@/components/packaging-finder'
import { ProductShowcase } from '@/components/product-showcase'
import { AboutSection } from '@/components/about-section'
import { Capabilities } from '@/components/capabilities'
import { ProcessSteps } from '@/components/process-steps'
import { IndustriesServed } from '@/components/industries-served'
import { TrustGrid } from '@/components/trust-grid'
import { Testimonials } from '@/components/testimonials'
import { FaqSection } from '@/components/faq-section'
import { CtaBanner } from '@/components/cta-banner'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileThumbBar } from '@/components/mobile-thumb-bar'

export default function Page() {
  return (
    <div id="top" className="min-h-dvh bg-background">
      <SiteHeader />
      <main className="pb-24 md:pb-0">
        <Hero />
        <StatsBar />
        <IndustryTicker />
        <ProductCategories />
        <PackagingFinder />
        <ProductShowcase />
        <AboutSection />
        <Capabilities />
        <ProcessSteps />
        <IndustriesServed />
        <TrustGrid />
        <Testimonials />
        <FaqSection />
        <CtaBanner />
        <ContactSection />
      </main>

      <SiteFooter />
      <MobileThumbBar />
    </div>
  )
}

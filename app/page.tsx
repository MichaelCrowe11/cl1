import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import ProblemSolution from "@/components/sections/problem-solution"
import Features from "@/components/sections/features"
import ScreenshotCarousel from "@/components/sections/screenshot-carousel"
import Testimonials from "@/components/sections/testimonials"
import Pricing from "@/components/sections/pricing"
import CtaBanner from "@/components/sections/cta-banner"
import Footer from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <ScreenshotCarousel />
        <Testimonials />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

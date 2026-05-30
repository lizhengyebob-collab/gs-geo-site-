import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import KnowledgeBase from "@/components/sections/KnowledgeBase";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyNow />
        <Stats />
        <Services />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <KnowledgeBase />
        <Pricing />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

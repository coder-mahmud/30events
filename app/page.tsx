import HeroSection from '@/components/home/Hero'
import JoinSection from '@/components/home/Join'
import VibeSection from '@/components/home/VibeSection'
import TicketsSection from '@/components/home/TicketsSection'
import FAQSection from '@/components/home/FAQSection'
import JoinListSection from '@/components/home/JoinListSection'
import ContactSection from '@/components/home/ContactSection'

const LandingPage = () => {
  return (
    <>
      <section>
        <HeroSection />
        <JoinSection />
        
        <VibeSection />
        {/* <TicketsSection /> */}
        <FAQSection />
        <JoinListSection />
        <ContactSection />
      </section>
    </>
  )
}

export default LandingPage
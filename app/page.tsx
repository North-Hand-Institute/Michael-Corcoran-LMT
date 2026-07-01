import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Modalities from '@/components/Modalities'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Location from '@/components/Location'
import FAQ from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Modalities />
      <Services />
      <Testimonials />
      <Location />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

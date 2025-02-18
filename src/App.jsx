
import './App.css'
import About from './components/about'
import ContactUs from './components/ContactUs'
import Footer from './components/footer'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import OurLatestProject from './components/Projects'
import Services from './components/Services'
import TestimonialsSection from './components/Testimonial'
import WhyPixelCraft from './components/Why'

function App() {
  

  return (
    <>
     <Navbar />
     <HeroSection />
     <About/>
     <Services/>
     <OurLatestProject/>
     <TestimonialsSection/>
     <WhyPixelCraft/>
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default App


import './App.css'
import About from './components/about'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import OurLatestProject from './components/Projects'
import Services from './components/Services'
import TestimonialsSection from './components/Testimonial'

function App() {
  

  return (
    <>
     {/* <Navbar /> */}
     <HeroSection />
     <About/>
     <Services/>
     <OurLatestProject/>
     <TestimonialsSection/>
    </>
  )
}

export default App

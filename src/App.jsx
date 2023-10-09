import './App.css'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Home from './components/Home'
import Partner from './components/Partner'
import PricingCards from './components/Pricing'
import Testimonial from './components/Testimonials'


function App() {


  return (
      <div className='app-container'>
      <Home />
      <Features />
      <Partner/>
      <Testimonial/>
      <PricingCards/>
      <Contact/>
      <Footer/>

      </div>

  )
}

export default App

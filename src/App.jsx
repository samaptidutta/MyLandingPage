
import './App.css'
import { motion } from "motion/react"
import Features from './components/Features'
import Herosection from './components/Herosection'
import Myfooter from './components/Myfooter'
import Navbar from './components/Navbar'
import PricingSystem from './components/PricingSystem'
import Testimonials from './components/Testimonials'
import Workflow from './components/Workflow'


function App() {


  return (
    <motion.div  initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.3}}>
      
      <Navbar/>

    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Herosection/>
      <Features/>
      <Workflow/>
      <PricingSystem/>
      <Testimonials/>
      <Myfooter/>
    </div>

      
    </motion.div>
  )
}

export default App

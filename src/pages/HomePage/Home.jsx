import React from 'react'
import Landing from './components/Landing'
import About from './components/About'
import Footer from './components/Footer'
import BrandsMarqueePage from './components/Brands'
import OurClients from './components/OurClients'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'
import Equipments from './components/Equipments'
import GolfAcessories from './components/GolfAcessories'

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
      <Landing /> 
      <About />
      <BrandsMarqueePage />
      <Equipments />
      <GolfAcessories />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home

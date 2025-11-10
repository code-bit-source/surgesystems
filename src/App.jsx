import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Aboutus from './pages/aboutus/Aboutus'
import Contact from './pages/contact/Contact'
import Carrer from './pages/carrer/Carrer'
import Irrigation from './pages/Irigation/Irrigation'
import GolfCourse from './pages/Equipments/GolfCourse'
import CricketGround from './pages/Equipments/CricketGround'
import Football from './pages/Equipments/Football'
import LawnMowers from './pages/Equipments/LawnMowers'
import GolfCarts from './pages/Equipments/GolfCarts'
import Ventrac from './pages/Equipments/Ventrac'
import Maredo from './pages/Equipments/Maredo'
import Speciality from './pages/Equipments/Speciality'
import MaterialHandler from './pages/Equipments/MaterialHandler'
import Grinding from './pages/Equipments/Grinding'
import TurfSprayers from './pages/Equipments/TurfSprayers'
import TurfRenovation from './pages/Equipments/TurfRenovation'
import ManualFertilizer from './pages/Equipments/ManualFertilizer'
import WaterCleaning from './pages/Equipments/WaterCleaning'
import Training from './pages/Equipments/Training'
import WaterRemoval from './pages/Equipments/WaterRemoval'
import Tools from './pages/Equipments/Tools'
import DigitalSolutions from './pages/Equipments/DigitalSolutions'
import Paraid from './pages/HomePage/components/Paraid'
import StandardGolf from './pages/HomePage/components/StandardGolf'
import Equipments from './pages/HomePage/components/Equipments'
import ServiceSupport from './pages/service/ServiceSupport'
import ToroParts from './pages/service/ToroParts'
import ToroTines from './pages/service/ToroTines'
import Blog from './pages/blogs/Blog'
import One from "./pages/blogs/pages/One";
import Two from "./pages/blogs/pages/Two";
import Three from "./pages/blogs/pages/Three";
import Four from "./pages/blogs/pages/Four";
import Five from "./pages/blogs/pages/Five";
import Six from "./pages/blogs/pages/six";
import Seven from "./pages/blogs/pages/Seven";
import Eight from "./pages/blogs/pages/Eight";
import Nine from "./pages/blogs/pages/Nine";
import Ten from "./pages/blogs/pages/Ten"; 



const App = () => {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Carrer />} />

          <Route path="/irrigation" element={<Irrigation />} />
          <Route path="/equipments/1" element={<GolfCourse />} />
          <Route path="/equipments/2" element={<CricketGround />} />
          <Route path="/equipments/3" element={<Football />} />
          <Route path="/equipments/4" element={<LawnMowers />} />
          <Route path="/equipments/5" element={<GolfCarts />} />
          <Route path="/equipments/6" element={<Ventrac />} />
          <Route path="/equipments/7" element={<Maredo />} />
          <Route path="/equipments/8" element={<Speciality />} />
          {/* material handler m b nhi hai links  */}
          <Route path="/equipments/9" element={<MaterialHandler />} />
          <Route path="/equipments/10" element={<Grinding />} />
          <Route path="/equipments/11" element={<TurfSprayers />} />
          <Route path="/equipments/12" element={<TurfRenovation />} />
          <Route path="/equipments/13" element={<ManualFertilizer />} />
          {/* ye nhi hua watercleaning */}
          <Route path="/equipments/14" element={<WaterCleaning />} />    
          <Route path="/equipments/15" element={<Training />} />
          <Route path="/equipments/16" element={<WaterRemoval />} />
          <Route path="/equipments/17" element={<Tools />} />
          <Route path="/equipments/18" element={<DigitalSolutions />} />
          <Route path="/GolfAccesories/1" element={<Paraid />} />
          <Route path="/GolfAccesories/2" element={<StandardGolf />} />
          <Route path="/Equipments" element={<Equipments />} />
          <Route path="/service-support" element={<ServiceSupport />} />
          <Route path="/toro-parts" element={<ToroParts />} />
          <Route path="/toro-tines" element={<ToroTines />} />
          <Route path="/blogs" element={<Blog />} />


          {/* blogs k andar k pages?  */}
          <Route path="/blog/history-of-golf-in-india" element={<One />} />
          <Route path="/blog/best-lawnmower-for-fairways" element={<Two />} />
          <Route path="/blog/electric-lawnmowers-india" element={<Three />} />
          <Route path="/blog/aeration-for-greens" element={<Four />} />
          <Route path="/blog/must-have-golf-accessories" element={<Five />} />
          <Route path="/blog/what-is-thatch" element={<Six />} />
          <Route path="/blog/earth-day-2022" element={<Seven />} />
          <Route path="/blog/lawn-equipment-checklist" element={<Eight />} />
          <Route path="/blog/lawnmower-fundamentals" element={<Nine />} />
          <Route path="/blog/sprinkler-system-fundamentals" element={<Ten />} />
         
        </Routes>
        
      </div>
    
  )
}

export default App

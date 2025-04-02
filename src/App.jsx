import { useState } from 'react'
import Navbar from './components/Navbar'

import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import MobileMenu from './components/MobileMenu'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
      <div className={`min-h-screen ${menuOpen ? 'h-screen opacity-50 pointer-events-auto' : ''}`}>    
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <div>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </>   
  )
}

export default App

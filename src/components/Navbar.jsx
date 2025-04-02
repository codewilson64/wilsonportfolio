import React from 'react'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { navLinks } from '../constants'

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <a href="" className='font-mono font-bold text-xl text-white'>
            wilson
          </a>

          <div className='w-7 h-5 relative cursor:pointer z-40 flex md:hidden'>
            <img 
              src={menuOpen ? close : menu} alt="menu" 
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setMenuOpen(prev => !prev)}
              />
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className='text-gray-300 hover:text-white transition-colors'>{link.title}</a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
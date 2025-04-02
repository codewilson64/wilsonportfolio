import React from 'react'
import { navLinks } from '../constants'

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
      <div className={`${menuOpen ? 'flex' : 'hidden'} absolute top-20 right-0 text-white text-3xl focus:outline-none z-[5]`}>
          <div className={`fixed top-0 flex flex-col items-center justify-center w-full left-0 z-40 bg-[rgba(10, 10, 10, 0.8)] transition-all duration-300 ease-in-out ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
            {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className={`${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} text-2xl font-semibold text-white my-4 transform transition-transform duration-300 z-40`} 
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </a>
            ))}
        </div>
      </div>
  )
}

export default MobileMenu
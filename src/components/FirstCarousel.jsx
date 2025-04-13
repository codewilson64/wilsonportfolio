import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const FirstCarousel = ({children: firstSlides}) => {
  const [curr, setCurr] = useState(0)
  
  const prev = () => setCurr(curr => curr === 0 ? firstSlides.length - 1 : curr - 1)
  const next = () => setCurr(curr => curr === firstSlides.length - 1 ? 0 : curr + 1)

  return (
    <div className='overflow-hidden relative rounded-xl'>
        <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr*100}%)`}}>{firstSlides}</div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-blue-500 hover:bg-blue-500/20 cursor-pointer">
              <FaArrowLeft size={20} />
            </button>
            <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-blue-500 hover:bg-blue-500/20 cursor-pointer">
              <FaArrowRight size={20} />
            </button>
        </div>
    </div>
  )
}

export default FirstCarousel
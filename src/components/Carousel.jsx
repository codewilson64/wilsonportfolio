import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Carousel = ({children: secondSlides}) => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr(curr => curr === 0 ? secondSlides.length - 1 : curr - 1)
  const next = () => setCurr(curr => curr === secondSlides.length - 1 ? 0 : curr + 1)

  return (
    <div className='overflow-hidden relative rounded-xl'>
      <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr*100}%)`}}>{secondSlides}</div>
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

export default Carousel
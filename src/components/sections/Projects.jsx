import { useRef } from 'react'
import { 
  stellary_logo, 
  stellary_img_1, 
  stellary_img_2, 
  stellary_img_3, 
  stellary_img_4, 
  stellary_img_5, 
  stellary_img_6, 
  confidencv_img_0, 
  confidencv_img_1, 
  confidencv_img_2, 
  confidencv_img_3,
  confidencv_logo,
} from '../../assets'
import Carousel from '../Carousel'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  const mobileSlides = [
    stellary_img_1,
    stellary_img_2,
    stellary_img_3,
    stellary_img_4,
    stellary_img_5,
    stellary_img_6
  ]

  const firstSlides = [
    confidencv_img_0,
    confidencv_img_1,
    confidencv_img_2,
    confidencv_img_3,
  ]

  const scrollRef = useRef(null)
    
  const scrollLeft = () => scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' })

  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent'>
          My Apps/Projects
        </h2>

        <div className='grid grid-cols-1 gap-6'>
            {/* Project 1 */}
            <div className='p-9 rounded-xl border border-white/20 bg-white/5 hover:border-blue-500/40'>
              <div className='flex items-center gap-3 mb-4'>
                <img src={stellary_logo} alt="stellary logo" className='w-10 h-10 rounded-full'/>
                <h3 className='text-xl font-bold'>Stellary</h3>
              </div>
              <p className='text-gray-400 mb-4'>
                A book summary app that provides easy-to-understand summaries of popular books, helping people learn key ideas quickly. Built with a clean design and smooth performance to make reading simple and enjoyable.
              </p>
                <div className='relative bg-black rounded-xl'>
                  <div 
                    className='w-full flex items-center overflow-x-auto scroll-smooth scrollbar-hide'
                    ref={scrollRef}
                  >
                    {mobileSlides.map((img, index) => (
                      <div key={index} className='flex-shrink-0'>
                        <img src={img} alt="image" className='w-56 h-auto mb-4 rounded-xl object-contain'/>
                      </div>                      
                    ))}
                  </div>
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <button onClick={scrollLeft} className="p-1 rounded-full shadow bg-white/80 text-blue-500 hover:bg-blue-500/20 cursor-pointer">
                        <FaArrowLeft size={20} />
                      </button>
                      <button onClick={scrollRight} className="p-1 rounded-full shadow bg-white/80 text-blue-500 hover:bg-blue-500/20 cursor-pointer">
                        <FaArrowRight size={20} />
                      </button>
                    </div>
                  </div>

              {/* <div className='flex flex-wrap items-center gap-2 mb-4'>
                <p className='text-blue-400 text-sm'>Build with: </p>
                {["React native"].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {tech}
                  </span>
                ))
                }
              </div> */}
              
              <div className='flex items-center gap-6'>             
                <div className='flex items-center justify-between'>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.codewilson64.stellarapp" 
                    target="_blank"
                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                  >
                  <div className='flex items-center gap-1'>
                    <p>Download App</p>
                    <IoIosArrowRoundForward className='text-blue-400'/> 
                  </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className='p-9 rounded-xl border border-white/20 bg-white/5 hover:border-blue-500/40'>
              <div className='flex items-center gap-3 mb-4'>
                <img src={confidencv_logo} alt="confidencv logo" className='w-10 h-10'/>
                <h3 className='text-xl font-bold'>Confidencv</h3>
              </div>
              <p className='text-gray-400 mb-4'>
                A modern web-based resume builder that helps users create professional, ATS-friendly resumes in minutes. 
                Users can easily add, edit, and organize resume sections through an intuitive interface, with real-time preview and clean formatting. 
              </p>
                <Carousel>
                  {firstSlides.map((img) => (
                    <img src={img} alt="image" className='mb-4 rounded-xl object-contain'/>
                  ))}
                </Carousel>
              {/* <div className='flex flex-wrap items-center gap-2 mb-4'>
                <p className='text-blue-400 text-sm'>Build with: </p>
                {["Next.js", "Typescript", "Postgresql"].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {tech}
                  </span>
                ))
                }
              </div> */}
              
              <div className='flex items-center gap-6'>             
                <div className='flex items-center justify-between'>
                  <a 
                    href="https://confidencv.com" 
                    target="_blank"
                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                  >
                  <div className='flex items-center gap-1'>
                    <p>View Project</p>
                    <IoIosArrowRoundForward className='text-blue-400'/> 
                  </div>
                  </a>
                </div>

                <div className='flex items-center justify-between'>
                  <a 
                    href="https://github.com/codewilson64/resume-builder" 
                    target="_blank"
                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                  >
                  <div className='flex items-center gap-1'>
                    <p>View Code</p>
                    <IoIosArrowRoundForward className='text-blue-400'/> 
                  </div>
                  </a>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
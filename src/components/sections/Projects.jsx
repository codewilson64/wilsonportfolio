import { useRef } from 'react'
import {
  resumelab_logo,
  resumelab_img1,
  resumelab_img2,
  resumelab_img3,
  resumelab_img4,
  resumelab_img5,
  resumelab_img6,

  confidencv_logo,
  inventory_img1,
  inventory_img2,
  inventory_img3,
  inventory_img4,
  inventory_img5
} from '../../assets'
import Carousel from '../Carousel'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import playstore_button from '../../assets/app.png'
import appstore_button from '../../assets/game.png'

const Projects = () => {
  const mobileSlides = [
    resumelab_img1,
    resumelab_img2,
    resumelab_img3,
    resumelab_img4,
    resumelab_img5,
    resumelab_img6,
  ]

  const firstSlides = [
    inventory_img1,
    inventory_img2,
    inventory_img3,
    inventory_img5,
    inventory_img4,
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

        <div className='grid grid-cols-1 gap-20'>
          {/* Project 2 */}
          <div className='p-9 rounded-xl border border-white/20 bg-white/5 hover:border-blue-500/40'>
            <div className='flex items-center gap-3 mb-4'>
              {/* <img src={confidencv_logo} alt="confidencv logo" className='w-10 h-10' /> */}
              <h3 className='text-xl font-bold'>Inventory Management App</h3>
            </div>
            <p className='text-gray-400 mb-4'>
              A simple and efficient inventory management app for managing products, categories, and transactions.
            </p>
            <Carousel>
              {firstSlides.map((img) => (
                <img src={img} alt="image" className='mb-4 rounded-xl object-contain' />
              ))}
            </Carousel>

            <div className='flex items-center gap-6'>
              <div className='flex items-center justify-between'>
                <a
                  href="https://inventory-app-tan-delta.vercel.app/"
                  target="_blank"
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                >
                  <div className='flex items-center gap-1'>
                    <p>View Project</p>
                    <IoIosArrowRoundForward className='text-blue-400' />
                  </div>
                </a>
              </div>

              <div className='flex items-center justify-between'>
                <a
                  href="https://github.com/codewilson64/inventory-management"
                  target="_blank"
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                >
                  <div className='flex items-center gap-1'>
                    <p>View Code</p>
                    <IoIosArrowRoundForward className='text-blue-400' />
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-8 space-y-5">

              <h4 className="text-lg font-semibold text-blue-400 tracking-wide">
                Tech Stack
              </h4>

              <div className="space-y-4 text-sm text-gray-400">

                <div>
                  <p className="text-blue-300 font-medium">Frontend</p>
                  <p>
                    Built with React.js. Styled with Tailwind CSS.
                  </p>
                </div>

                <div>
                  <p className="text-blue-300 font-medium">Backend</p>
                  <p>
                    Developed with Node.js and Express.js.
                  </p>
                </div>

                <div>
                  <p className="text-blue-300 font-medium">Database</p>
                  <p>
                    Uses MySQL hosted on Aiven.
                  </p>
                </div>

                <div>
                  <p className="text-blue-300 font-medium">Deployment</p>
                  <p>
                    Deployed on Vercel, with the frontend and backend hosted
                    as separate applications.
                  </p>
                </div>

              </div>
            </div>
          </div>


          {/* Project 1 */}
          <div className='p-9 rounded-xl border border-white/20 bg-white/5 hover:border-blue-500/40'>
            <div className='flex items-center gap-3 mb-4'>
              <img src={resumelab_logo} alt="stellary logo" className='w-10 h-10 rounded-full' />
              <h3 className='text-xl font-bold'>ResumeLab - CV Maker</h3>
            </div>
            <p className='text-gray-400 mb-4'>
              ResumeLab is a mobile resume builder that helps users create professional resumes and cover letters quickly.
            </p>
            <div className='relative bg-black rounded-xl'>
              <div
                className='w-full flex items-center overflow-x-auto scroll-smooth scrollbar-hide'
                ref={scrollRef}
              >
                {mobileSlides.map((img, index) => (
                  <div key={index} className='flex-shrink-0'>
                    <img src={img} alt="image" className='w-56 h-auto mb-4 rounded-xl object-contain' />
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

            <div className='flex items-center gap-16 my-4'>
              {/* Download App */}
              <div className='flex items-center gap-3'>
                <p className='text-blue-400'>Download App:</p>

                <a
                  href="https://play.google.com/store/apps/details?id=com.codewilson64.resumelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='transition-transform hover:scale-105'
                >
                  <img
                    src={playstore_button}
                    alt="Get it on Google Play"
                    className='h-10 w-auto'
                  />
                </a>

                <a
                  href="https://apps.apple.com/us/app/resumelab/id6801380846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='transition-transform hover:scale-105'
                >
                  <img
                    src={appstore_button}
                    alt="Download on the App Store"
                    className='h-10 w-auto'
                  />
                </a>
              </div>

              {/* View Code */}
              <div className='flex items-center'>
                <a
                  href="https://github.com/codewilson64/resume-builder-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-blue-400 hover:text-blue-300 transition-colors'
                >
                  <div className='flex items-center gap-1'>
                    <p>View Code</p>
                    <IoIosArrowRoundForward className='text-blue-400' />
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-8 space-y-5">

              <h4 className="text-lg font-semibold text-blue-400 tracking-wide">
                Tech Stack
              </h4>

              <div className="space-y-4 text-sm text-gray-400">

                <div>
                  <p className="text-blue-300 font-medium">Frontend</p>
                  <p>
                    Built with React Native.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
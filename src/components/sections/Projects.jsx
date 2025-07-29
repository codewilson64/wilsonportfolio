import { chatfriend_img_1, chatfriend_img_2, chatgram_img_1, chatgram_img_2, chatgram_img_3, luxora_img_1, luxora_img_2, luxora_img_3, luxora_img_4} from '../../assets'
import Carousel from '../Carousel'
import FirstCarousel from '../FirstCarousel'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Projects = () => {
  const firstSlides = [
    chatgram_img_1,
    chatgram_img_2,
    chatgram_img_3
  ]

  const secondSlides = [
    chatfriend_img_1,
    chatfriend_img_2,
  ]

  const thirdSlides = [
    luxora_img_1,
    luxora_img_2,
    luxora_img_3,
    luxora_img_4
  ]


  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent'>
          My Apps/Projects
        </h2>

        <div className='grid grid-cols-1 gap-6'>
            {/* Project 1 */}
            <div className='p-9 rounded-xl border border-white/20 hover:border-blue-500/40'>
              <h3 className='text-xl font-bold mb-2'>Chatgram</h3>
              <p className='text-gray-400 mb-4'>Chatgram is a social media platform where users can create, like, delete, comment to a post and even follow other users just like an actual social media app. Users also can update their profile image and their username.</p>
                <FirstCarousel>
                  {firstSlides.map((img) => (
                    <img src={img} alt="image" className='mb-4 rounded-xl object-contain'/>
                  ))}
                </FirstCarousel>
              <div className='flex flex-wrap items-center gap-2 mb-4'>
                <p className='text-blue-400 text-sm'>Build with: </p>
                {["Next.js", "Typescript", "Postgresql"].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {tech}
                  </span>
                ))
                }
              </div>
              
              <div className='flex items-center gap-6'>             
                <div className='flex items-center justify-between'>
                  <a 
                    href="https://mychatgram.vercel.app/" 
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
                    href="https://github.com/codewilson64/chatgram" 
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

            {/* Project 2 */}
            <div className='p-9 rounded-xl border border-white/20 hover:border-blue-500/40'>
              <h3 className='text-xl font-bold mb-2'>Luxora</h3>
              <p className='text-gray-400 mb-4'>
                Luxora is a modern e-commerce website designed to showcase and sell premium fashion accessories. Built with React, Tailwind CSS, and Redux Toolkit. Luxora features a clean, minimalist interface, an intuitive shopping cart system and a payment gateway with Stripe.
              </p>
                <Carousel>
                  {thirdSlides.map((img) => (
                    <img src={img} alt="image" className='mb-4 rounded-xl object-contain'/>
                  ))}
                </Carousel>
              <div className='flex flex-wrap items-center gap-2 mb-4'>
              <p className='text-blue-400 text-sm'>Build with: </p>
                {["React", "Tailwind", "Redux Toolkit", "Stripe"].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {tech}
                  </span>
                ))
                }
              </div>
              
              <div className='flex items-center gap-6'>             
                <div className='flex items-center justify-between'>
                  <a 
                    href="https://luxorastore.vercel.app/" 
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
                    href="https://github.com/codewilson64/luxora-app" 
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
            
            {/* Project 3 */}
            <div className='p-9 rounded-xl border border-white/20 hover:border-blue-500/40'>
              <h3 className='text-xl font-bold mb-2'>Chatfriends</h3>
              <p className='text-gray-400 mb-4'>Chatfriends is a chat app that could allow users to chat with anyone in real-time just like modern chat application.
                Users could see who is currently online from the sidebar as well.
              </p>
                <Carousel>
                  {secondSlides.map((img) => (
                    <img src={img} alt="image" className='mb-4 rounded-xl object-contain'/>
                  ))}
                </Carousel>
              <div className='flex flex-wrap items-center gap-2 mb-4'>
              <p className='text-blue-400 text-sm'>Build with: </p>
                {["React", "Tailwind", "Zustand", "Socket.io"].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {tech}
                  </span>
                ))
                }
              </div>
              
              <div className='flex items-center gap-6'>
                <div className='flex items-center justify-between'>
                  <a 
                    href="https://chatfriends-2a53.onrender.com" 
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
                    href="https://github.com/codewilson64/chatfriends" 
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
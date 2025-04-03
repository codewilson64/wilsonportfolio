import React from 'react'
import { projectsList } from '../../constants'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent'>Featured Projects</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Project 1 */}
            <div className='p-6 rounded-xl border border-white/10 hover:border-blue-500/30'>
              <h3 className='text-xl font-bold mb-2'>Social Media Platform</h3>
              <p className='text-gray-300 mb-4'>A social platform that enable users to create and share content</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["React", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {tech}
                  </span>
                ))
                }
              </div>

              <div className='flex items-center justify-between'>
                <a 
                  href="https://chatgram-jrfg.onrender.com/" 
                  target="_blank"
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                >
                  View Project
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className='p-6 rounded-xl border border-white/10 hover:border-blue-500/30'>
              <h3 className='text-xl font-bold mb-2'>Ecommerce App</h3>
              <p className='text-gray-300 mb-4'>An ecommerce app allows users to shop, add items to cart, and complete purchases</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["React", "Tailwind", "Redux Toolkit"].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {tech}
                  </span>
                ))
                }
              </div>

              <div className='flex items-center justify-between'>
                <a 
                  href="https://codewilson64.github.io/techhaven/" 
                  target="_blank"
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className='p-6 rounded-xl border border-white/10 hover:border-blue-500/30'>
              <h3 className='text-xl font-bold mb-2'>Video Streaming App</h3>
              <p className='text-gray-300 mb-4'>A Video streaming website where users can watch all kinds of content.</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["React", "Tailwind"].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {tech}
                  </span>
                ))
                }
              </div>

              <div className='flex items-center justify-between'>
                <a 
                  href="https://codewilson64.github.io/youtube-clone/" 
                  target="_blank"
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                >
                  View Project
                </a>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
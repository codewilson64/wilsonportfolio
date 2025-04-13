import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent'>Contact Me</h2>

      <div className='rounded-xl p-8 border border-white/20 hover:border-blue-500/30'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-xl p-6'>
            <h3 className='text-xl font-bold mb-4'>Email</h3>
            <div className="flex items-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer">
              <IoMailOutline size={24}/>
              <a href="mailto:wilsonnn948@gmail.com">wilsonnn948@gmail.com</a>
            </div>
          </div>

          <div className='rounded-xl p-6'>
            <h3 className='text-xl font-bold mb-4'>Whatsapp</h3>
            <div className="flex items-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer">
              <FaWhatsapp size={24}/>
              <a href="https://wa.me/6287885343817">+62 878-8534-3817</a>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Contact
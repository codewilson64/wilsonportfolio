import { FaWhatsapp } from "react-icons/fa"
import { IoMailOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <a
              href="mailto:wilsonnn948@gmail.com"
              className="group rounded-xl border border-white/10 p-6 transition-all
                         hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">
                Email
              </h3>

              <div className="flex items-center gap-3 text-gray-300 group-hover:text-blue-400 transition">
                <IoMailOutline size={22} />
                <span className="text-sm md:text-base">
                  wilsonnn948@gmail.com
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6287885343817"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 p-6 transition-all
                         hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/5"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">
                WhatsApp
              </h3>

              <div className="flex items-center gap-3 text-gray-300 group-hover:text-cyan-400 transition">
                <FaWhatsapp size={22} />
                <span className="text-sm md:text-base">
                  +62 878-8534-3817
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

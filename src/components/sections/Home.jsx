import backgroundImg from '../../assets/react-icon_svg_.webp'

const Home = () => {
  return (
    <section 
      id='home' 
      className='relative min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{backgroundImage: `url(${backgroundImg})`}}
    >
      <div className="absolute inset-0 bg-black/85 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent z-10" />
      <div className='text-center px-4 relative z-10'>
        <h1 className='text-5xl md:text-7xl font-bold mb-5 pb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
          Software Engineer
        </h1>

        <div className='flex justify-center space-x-4'>
          <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1'>View Projects</a>
          <a href="#contact" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-1 hover:bg-blue-500/10'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default Home
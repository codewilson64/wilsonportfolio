const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Redux",
    "Zustand",
  ]

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "JWT",
    "Prisma ORM",
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl">
            I build websites and mobile apps that are clean, fast, and easy to
            use. I focus on practical features, smooth performance, and simple
            design so the products feel good to use and actually solve real
            problems.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full text-sm font-medium
                               bg-blue-500/10 text-blue-400
                               hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full text-sm font-medium
                               bg-cyan-500/10 text-cyan-400
                               hover:bg-cyan-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

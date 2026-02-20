const About = () => {
  const frontendSkills = [
  {
    title: "Core Web",
    items: "HTML, CSS, JavaScript",
    description:
      "Strong foundation in building responsive and accessible interfaces."
  },
  {
    title: "Frameworks",
    items: "React, Next.js",
    description:
      "Component-driven architecture with server-side rendering and optimized routing."
  },
  {
    title: "Type Safety & State",
    items: "TypeScript, Redux, Zustand, Context API",
    description:
      "Type-safe development and predictable state management for scalable apps."
  },
  {
    title: "Styling",
    items: "Tailwind CSS",
    description:
      "Utility-first styling for rapid UI development and consistent design systems."
  }
]

const backendSkills = [
  {
    title: "Runtime & Framework",
    items: "Node.js, Express.js",
    description:
      "RESTful API development and middleware-based architecture."
  },
  {
    title: "Databases",
    items: "MongoDB, PostgreSQL",
    description:
      "Designed relational and document-based schemas for scalable data handling."
  },
  {
    title: "Authentication",
    items: "JWT, Session-based Auth",
    description:
      "Secure authentication flows with protected routes and token validation."
  },
  {
    title: "ORM",
    items: "Prisma ORM",
    description:
      "Type-safe database queries and structured schema management."
  }
]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

  {/* Frontend */}
  <div>
    <h3 className="text-xl font-semibold mb-6 text-white">
      Frontend Engineering
    </h3>

    <div className="space-y-6">
      {frontendSkills.map((skill) => (
        <div
          key={skill.title}
          className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition"
        >
          <p className="text-blue-400 font-medium mb-2">
            {skill.title}
          </p>
          <p className="text-sm text-white mb-2">
            {skill.items}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Backend */}
  <div>
    <h3 className="text-xl font-semibold mb-6 text-white">
      Backend Engineering
    </h3>

    <div className="space-y-6">
      {backendSkills.map((skill) => (
        <div
          key={skill.title}
          className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition"
        >
          <p className="text-cyan-400 font-medium mb-2">
            {skill.title}
          </p>
          <p className="text-sm text-white mb-2">
            {skill.items}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            {skill.description}
          </p>
        </div>
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

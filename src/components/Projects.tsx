import { motion } from 'framer-motion'

export const Projects = () => {
  const projects = [
    {
      title: 'EasyLearn',
      description: 'A modern learning management system built with React and Node.js',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
    },
    {
      title: 'Portfolio Site',
      description: 'Modern portfolio showcase with Framer Motion animations',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
    {
      title: 'Web App',
      description: 'Full-stack application with real-time features',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-text-primary">Featured Projects</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group glass overflow-hidden hover:border-accent transition-all cursor-pointer border border-bg-card"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-96 overflow-hidden bg-bg-lighter">
                <img
                  alt={project.title}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-bg-base text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-bg-card text-sm rounded text-text-secondary border border-bg-lighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

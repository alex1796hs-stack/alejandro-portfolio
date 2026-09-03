import { motion } from 'framer-motion'

export const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'API Design'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'Vite'],
    },
  ]

  return (
    <section id="studies" className="min-h-screen flex items-center justify-center px-6 py-32 bg-bg-lighter">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-text-primary">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="glass p-10"
            >
              <h3 className="text-2xl font-bold mb-8 text-text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-text-secondary">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'

const stack = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'Vite'],
  },
]

export const Skills = () => {
  return (
    <section id="studies" className="px-6 md:px-12 py-32 max-w-8xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.06] pb-10">
          <h2
            className="font-black uppercase tracking-tighter leading-none text-text-primary"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            Stack
          </h2>
          <span className="section-label">Technologies I work with</span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="py-10 md:px-12 first:md:pl-0 last:md:pr-0"
            >
              {/* Category + count */}
              <div className="flex items-end justify-between mb-8">
                <h3 className="section-label">{group.category}</h3>
                <span className="text-[10px] text-white/15 font-mono">{String(group.skills.length).padStart(2,'0')}</span>
              </div>

              <ul className="space-y-4">
                {group.skills.map((skill, j) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 group/skill"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover/skill:bg-white/60 transition-colors duration-200 shrink-0" />
                    <span className="text-sm text-white/50 group-hover/skill:text-white/80 transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32 bg-bg-lighter">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-text-primary">About Me</h2>
        
        <div className="space-y-8 text-lg text-text-secondary leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            I'm a passionate developer with expertise in building scalable web applications. 
            With a strong foundation in frontend and backend technologies, I create seamless 
            user experiences combined with robust server-side solutions.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I'm constantly learning and exploring new technologies to stay at the forefront 
            of web development. Currently focused on React, TypeScript, and modern DevOps practices.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 pt-12 border-t border-bg-card"
        >
          <h3 className="text-xl font-bold mb-6 text-text-primary">Key Highlights</h3>
          <ul className="space-y-3 text-text-tertiary">
            <li>✨ 5+ years of web development experience</li>
            <li>🚀 Expertise in React, TypeScript, Node.js, and modern web frameworks</li>
            <li>🎨 Passionate about UI/UX design and animations</li>
            <li>📚 Continuous learner and open-source contributor</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

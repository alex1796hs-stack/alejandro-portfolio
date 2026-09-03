import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-text-primary">Let's Work Together</h2>
        
        <motion.p
          className="text-2xl text-text-secondary mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Have a project in mind? I'd love to discuss it with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <a
            href="mailto:hello@example.com"
            className="px-8 py-4 bg-accent text-bg-base font-bold rounded-lg hover:opacity-80 transition-opacity"
          >
            Send Email
          </a>
          <a
            href="#"
            className="px-8 py-4 border border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-colors"
          >
            View Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="pt-12 border-t border-bg-lighter"
        >
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-text-tertiary text-sm">© 2024 Alejandro Calvo. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

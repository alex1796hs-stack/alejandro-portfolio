import { motion } from 'framer-motion'

export const Navbar = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Studies', href: '#studies' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-bg-base/80 backdrop-blur-md border-b border-bg-card/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Profile */}
        <div className="flex items-center gap-4">
          {/* Profile Picture Placeholder */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-bg-base font-bold text-sm overflow-hidden"
          >
            {/* Placeholder: Replace with <img> when profile picture is available */}
            <div className="w-full h-full bg-gradient-to-br from-accent via-accent/70 to-accent/50 flex items-center justify-center">
              AC
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h1 className="text-lg md:text-xl font-bold text-text-primary tracking-tight">
              Alejandro Calvo
            </h1>
            <p className="text-xs text-text-tertiary hidden md:block">
              Fullstack Developer
            </p>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-8"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.6 }}
              whileHover={{ color: '#00d4ff' }}
              className="text-sm md:text-base text-text-secondary hover:text-accent transition-colors font-medium"
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}

export const Navbar = () => {
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <nav id="home" className="site-nav">
      <button
        onClick={() => handleNavClick('#home')}
        className="site-logo"
      >
        AC
      </button>

      <div className="site-navigation">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            className="nav-link"
          >
            {item.label}
          </button>
        ))}

        <span className="nav-arrow">↗</span>
      </div>
    </nav>
  )
}
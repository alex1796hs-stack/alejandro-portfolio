export const Hero = () => {
  return (
    <section id="hero" className="hero-section">

      {/* Introduction */}
      <div className="hero-meta">
        <span>01 — Introduction</span>

        <span className="hero-location">
          Madrid, Spain
        </span>

        <span>2026</span>
      </div>

      {/* Main content */}
      <div className="hero-content">

        <h1 className="hero-title">
          ALEJANDRO
        </h1>

        <h2 className="hero-subtitle">
          SOFTWARE DEVELOPER
        </h2>

        <p className="hero-stack">
          FRONTEND · FULL STACK · CLOUD
        </p>

      </div>

      {/* Bottom */}
      <div className="hero-bottom">
        <span>Selected work ↓</span>
        <span>Scroll to explore</span>
      </div>

    </section>
  )
}
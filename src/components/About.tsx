export const About = () => {
  return (
    <section id="about" className="about-section">

      {/* Header */}

      <div className="about-header">
        <span>03 — About</span>
        <span>Software Developer</span>
      </div>


      {/* Main statement */}

      <div className="about-main">

        <h2>
          SOFTWARE DEVELOPER
          <br />
          WITH A BACKGROUND
          <br />
          IN HEALTHCARE.
        </h2>

      </div>


      {/* Content */}

      <div className="about-content">

        <div className="about-intro">

          <span className="info-label">
            Background
          </span>

          <p>
            I'm a software developer with a background
            in healthcare and more than 10 years of
            experience working in hospital environments.
          </p>

          <p>
            That experience taught me how to work under
            pressure, adapt quickly, communicate effectively
            and pay attention to detail.
          </p>

        </div>


        <div className="about-skills">

          <span className="info-label">
            Transferable skills
          </span>

          <div className="about-skills-list">

            <span>Problem Solving</span>
            <span>Attention to Detail</span>
            <span>Adaptability</span>
            <span>Teamwork</span>
            <span>Communication</span>
            <span>Responsibility</span>
            <span>Critical Thinking</span>
            <span>Continuous Learning</span>

          </div>

        </div>

      </div>

    </section>
  )
}
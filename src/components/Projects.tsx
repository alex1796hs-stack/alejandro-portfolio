import easylearnVideo from '../assets/easylearn-featured-loop.mp4'

import placementTest from '../assets/01-placement-test.png'
import placementResult from '../assets/02-placement-result.png'
import lessons from '../assets/03-lessons.png'
import profileProgress from '../assets/ChatGPT Image 6 sept 2026, 20_20_15.png'
import sharenergyVideo from '../assets/Sharenergy-portfolio-final.mp4'

import sharenergyLanding from '../assets/01-landing-qr.png'
import sharenergySelection from '../assets/02-powerbank-selection.png'
import sharenergyRental from '../assets/03-rental-timer.png'
import sharenergyPayment from '../assets/04-payment-summary.png'

export const Projects = () => {
  return (
    <section id="projects">

      {/* ─────────────────────────────────────────
          Selected Work — Introduction
      ───────────────────────────────────────── */}

      <div className="work-intro">

        <div className="work-intro-header">
          <span>02 — Selected Work</span>
          <span>02 Projects</span>
        </div>

        <div className="work-intro-content">

          <h2>
            BUILDING DIGITAL
            <br />
            PRODUCTS WITH
            <br />
            CODE &amp; PURPOSE.
          </h2>

          <span className="work-intro-scroll">
            ↓ Explore
          </span>

        </div>

      </div>


      {/* ─────────────────────────────────────────
          EasyLearn — Featured Project
      ───────────────────────────────────────── */}

      <div className="featured-project">

        {/* Section heading */}

        <div className="featured-header">
          <span>01 — Featured Project</span>
          <span>01 / 02</span>
        </div>


        {/* Project title */}

        <div className="featured-title-wrapper">

          <h2 className="featured-title">
            EasyLearn
          </h2>

          <span className="featured-year">
            2026
          </span>

        </div>


        {/* Main video */}

        <div className="featured-video-wrapper">

          <video
            className="featured-video"
            src={easylearnVideo}
            autoPlay
            muted
            loop
            playsInline
          />

        </div>


        {/* Project information */}

        <div className="featured-info">

          <div className="featured-description">

            <span className="info-label">
              About the project
            </span>

            <p>
              An AI-powered English learning platform
              designed around structured progression,
              assessment and daily learning.
            </p>

          </div>


          <div className="featured-technologies">

            <span className="info-label">
              Technologies
            </span>

            <div className="technology-list">

              <span>React</span>
              <span>TypeScript</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>SQLAlchemy</span>
              <span>Docker</span>
              <span>JWT</span>

            </div>

          </div>


          <div className="featured-links">

            <span className="info-label">
              Explore
            </span>

            <a
              href="https://github.com/alex1796hs-stack/EasyLearnApp-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </div>


        {/* Supporting screenshots */}

        <div className="featured-gallery">

          <div className="gallery-item">

            <img
              src={placementTest}
              alt="EasyLearn placement test"
            />

          </div>


          <div className="gallery-item">

            <img
              src={placementResult}
              alt="EasyLearn placement result"
            />

          </div>


          <div className="gallery-item">

            <img
              src={lessons}
              alt="EasyLearn lesson interface"
            />

          </div>


          <div className="gallery-item">

            <img
              src={profileProgress}
              alt="EasyLearn profile and learning progress"
            />

          </div>

        </div>


        {/* Bottom project label */}

        <div className="featured-footer">

          <span>
            AI ENGLISH LEARNING PLATFORM
          </span>

          <span>
            REACT / PYTHON / FASTAPI
          </span>

        </div>

      </div>
      {/* Sharenergy */}

      <div className="secondary-project">

        {/* Project header */}
        <div className="secondary-project-header">
          <span>02 / 02 — Selected Project</span>
          <span>2026</span>
        </div>

        {/* Project title */}
        <div className="secondary-project-title-wrapper">
          <h2 className="secondary-project-title">
            Sharenergy
          </h2>
        </div>

        {/* Main video */}
        <div className="secondary-project-video-wrapper">
          <video
            className="secondary-project-video"
            src={sharenergyVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Project information */}
        <div className="secondary-project-info">

          <div className="secondary-project-description">
            <span className="info-label">
              About the project
            </span>

            <p>
              A full-stack web prototype for renting portable
              powerbanks through QR-based stations, with
              availability management, rental tracking and
              automated billing logic.
            </p>
          </div>

          <div className="secondary-project-technologies">
            <span className="info-label">
              Technologies
            </span>

            <div className="technology-list">
              <span>Java</span>
              <span>Javalin</span>
              <span>JDBI</span>
              <span>SQLite</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="secondary-project-links">
            <span className="info-label">
              Explore
            </span>

            <a
              href="https://github.com/alex1796hs-stack/Powerbank-Renting-Web-concept"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>

        </div>

        {/* Screenshots */}
        <div className="secondary-project-gallery">

          <div className="secondary-gallery-item">
            <img
              src={sharenergyLanding}
              alt="Sharenergy landing and QR access"
            />
          </div>

          <div className="secondary-gallery-item">
            <img
              src={sharenergySelection}
              alt="Sharenergy powerbank selection"
            />
          </div>

          <div className="secondary-gallery-item">
            <img
              src={sharenergyRental}
              alt="Sharenergy rental timer"
            />
          </div>

          <div className="secondary-gallery-item">
            <img
              src={sharenergyPayment}
              alt="Sharenergy payment summary"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="secondary-project-footer">
          <span>POWERBANK RENTAL WEB CONCEPT</span>
          <span>JAVA / JAVALIN / SQLITE</span>
        </div>

      </div>
    </section>
  )
}
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

import { useLanguage } from '../context/LanguageContext'

export const Projects = () => {
  const { t } = useLanguage()

  return (
    <section id="projects">

      {/* ─────────────────────────────────────────
          Selected Work — Introduction
      ───────────────────────────────────────── */}

      <div className="work-intro">

        <div className="work-intro-header">
          <span>{t.projects.selectedWork}</span>
          <span>{t.projects.projectCount}</span>
        </div>

        <div className="work-intro-content">

          <h2>
            {t.projects.title}
            <br />
            {t.projects.titleLine2}
            <br />
            {t.projects.titleLine3}
          </h2>

          <span className="work-intro-scroll">
            ↓ {t.projects.explore}
          </span>

        </div>

      </div>


      {/* ─────────────────────────────────────────
          EasyLearn — Featured Project
      ───────────────────────────────────────── */}

      <div className="featured-project">

        <div className="featured-header">
          <span>{t.projects.featuredProject}</span>
          <span>{t.projects.featuredProjectCount}</span>
        </div>


        <div className="featured-title-wrapper">

          <h2 className="featured-title">
            EasyLearn
          </h2>

          <span className="featured-year">
            2026
          </span>

        </div>


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


        <div className="featured-info">

          <div className="featured-description">

            <span className="info-label">
              {t.projects.aboutProject}
            </span>

            <p>
              {t.projects.easylearnDescription}
            </p>

          </div>


          <div className="featured-technologies">

            <span className="info-label">
              {t.projects.technologies}
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
              {t.projects.explore}
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


        <div className="featured-gallery">

          <div className="gallery-item">
            <img
              src={placementTest}
              alt={t.projects.placementTest}
            />
          </div>

          <div className="gallery-item">
            <img
              src={placementResult}
              alt={t.projects.placementResult}
            />
          </div>

          <div className="gallery-item">
            <img
              src={lessons}
              alt={t.projects.lessonInterface}
            />
          </div>

          <div className="gallery-item">
            <img
              src={profileProgress}
              alt={t.projects.profileProgress}
            />
          </div>

        </div>


        <div className="featured-footer">

          <span>
            {t.projects.aiEnglishLearningPlatform}
          </span>

          <span>
            REACT / PYTHON / FASTAPI
          </span>

        </div>

      </div>


      {/* ─────────────────────────────────────────
          Sharenergy
      ───────────────────────────────────────── */}

      <div className="secondary-project">

        <div className="secondary-project-header">
          <span>{t.projects.selectedProject}</span>
          <span>2026</span>
        </div>


        <div className="secondary-project-title-wrapper">

          <h2 className="secondary-project-title">
            Sharenergy
          </h2>

        </div>


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


        <div className="secondary-project-info">

          <div className="secondary-project-description">

            <span className="info-label">
              {t.projects.aboutProject}
            </span>

            <p>
              {t.projects.sharenergyDescription}
            </p>

          </div>


          <div className="secondary-project-technologies">

            <span className="info-label">
              {t.projects.technologies}
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
              {t.projects.explore}
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


        <div className="secondary-project-gallery">

          <div className="secondary-gallery-item">
            <img
              src={sharenergyLanding}
              alt={t.projects.landingQr}
            />
          </div>

          <div className="secondary-gallery-item">
            <img
              src={sharenergySelection}
              alt={t.projects.powerbankSelection}
            />
          </div>

          <div className="secondary-gallery-item">
            <img
              src={sharenergyRental}
              alt={t.projects.rentalTimer}
            />
          </div>

          <div className="secondary-gallery-item">
            <img
              src={sharenergyPayment}
              alt={t.projects.paymentSummary}
            />
          </div>

        </div>


        <div className="secondary-project-footer">

          <span>
            {t.projects.powerbankRentalWebConcept}
          </span>

          <span>
            JAVA / JAVALIN / SQLITE
          </span>

        </div>

      </div>

    </section>
  )
}
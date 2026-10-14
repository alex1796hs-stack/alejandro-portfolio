import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Stack } from './components/Stack'
import { Contact } from './components/Contact'
import { LanguageProvider } from './context/LanguageContext'

import './index.css'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#080808] text-white">
        <Navbar />

        <main>
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Education />
          <Stack />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
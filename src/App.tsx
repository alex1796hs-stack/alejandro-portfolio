import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Stack } from './components/Stack'
import './index.css'

function App() {
  return (
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
  )
}

export default App
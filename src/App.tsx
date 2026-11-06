import { About } from './components/About'
import { AiDevOps } from './components/AiDevOps'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { SecretsManagement } from './components/SecretsManagement'
import { Skills } from './components/Skills'
import { SplashScreen } from './components/SplashScreen'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-night">
      <SplashScreen />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#041016]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <AiDevOps />
        <Projects />
        <SecretsManagement />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

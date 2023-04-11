import React, { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import './App.css'
function App() {
  const [showHero, setShowHero] = useState(false)
  const [showProjects, setShowProjects] = useState(true)
  const [showContact, setShowContact] = useState(false)

  const handleHeroClick = () => {
    setShowHero(true)
    setShowProjects(false)
    setShowContact(false)
  }

  const handleProjectsClick = () => {
    setShowHero(false)
    setShowProjects(true)
    setShowContact(false)
  }

  const handleContactClick = () => {
    setShowHero(false)
    setShowProjects(false)
    setShowContact(true)
  }

  return (
    <div className='app-container'>
      <Header />
      {showHero && <Hero />}
      {showProjects && <Projects />}
      {showContact && <Contact />}
      <Footer
        hero={handleHeroClick}
        project={handleProjectsClick}
        contact={handleContactClick}
      />
    </div>
  )
}

export default App

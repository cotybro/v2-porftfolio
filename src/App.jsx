import React, { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Login from './Components/Login'
import './App.css'

function App() {
  const [showHero, setShowHero] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showFooter, setShowFooter] = useState(false)

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

  const handleLoginClick = () => {
    setShowLogin(false)
    setShowHero(true)
    setShowFooter(true)
  }

  return (
    <div className='app-container'>
      <Header />
      {showLogin && <Login login={handleLoginClick} />}
      {showHero && <Hero />}
      {showProjects && <Projects />}
      {showContact && <Contact />}
      {showFooter && (
        <Footer
          hero={handleHeroClick}
          project={handleProjectsClick}
          contact={handleContactClick}
        />
      )}
    </div>
  )
}

export default App

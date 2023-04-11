import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SubjectIcon from '@mui/icons-material/Subject'
import HttpsIcon from '@mui/icons-material/Https'
import RefreshIcon from '@mui/icons-material/Refresh'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser'
import TabIcon from '@mui/icons-material/Tab'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import memoji from '../assets/Images/memoji.png'
import './Hero.css'

function Hero() {
  return (
    <div className='hero-wrapper'>
      <div className='top-bar'>
        <div className='button-container'>
          <div className='circle-btn red'></div>
          <div className='circle-btn yellow'></div>
          <div className='circle-btn green'></div>
          <div className='arrow-container'>
            <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
          </div>
          <div className='arrow-container arrow-flip'>
            <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
          </div>
        </div>
        <div className='middle-container'>
          <SubjectIcon sx={{ fontSize: 18 }} />
          <div className='url'>
            <HttpsIcon sx={{ fontSize: 16 }} className='lock-img' />
            <p className='middle-text'>CotyBreault.com</p>
          </div>
          <RefreshIcon sx={{ fontSize: 18 }} />
        </div>
        <div className=''></div>
        <div className='right-wrapper'>
          <div className='right-container mr-5'>
            <OpenInBrowserIcon sx={{ fontSize: 18 }} />
          </div>
          <div className='right-container mr-10'>
            <TabIcon sx={{ fontSize: 18 }} />
          </div>
        </div>
      </div>
      <div className='hero'>
        <div className='hero-img-container'>
          <img src={memoji} alt='' className='hero-img' />
        </div>
        <div className='hero-container'>
          <h1 className='hero-title'>
            Hey, My Name Is <span>Coty Breault</span>
          </h1>
          <p className='hero-text'>
            As a frontend web developer, I thrive on the challenges of coding
            and turning ideas into reality. My favorite tool for this is React
            JS, which allows me to create beautiful and functional web
            applications.
          </p>
        </div>
        <div className='about-me'>
          <h2 className='about-me-title'>About Me</h2>
          <p className='about-me-text'>
            Based in Minnesota, USA, I am a passionate frontend developer who
            loves to turn concepts into reality through website development. My
            toolkit includes React JS, JavaScript, CSS, and Figma, which allow
            me to design and develop visually stunning and functional user
            interfaces that engage and delight visitors.
          </p>
        </div>
        <div className='skills-container'>
          <div className='skills'>
            <h2 className='skills-title'>Skills</h2>
            <div className='skills-container'>
              <p className='skill'>HTML</p>
              <p className='skill'>CSS</p>
              <p className='skill'>JavaScript</p>
              <p className='skill'>React JS</p>
              <p className='skill'>Figma</p>
            </div>
            <div className='future-skills'>
              <h2 className='future-skills-title'>Future Skills</h2>
              <div className='skills-container'>
                <p className='skill'>React Redux</p>
                <p className='skill'>React Router</p>
                <p className='skill'>MUI</p>
                <p className='skill'>MongoDB</p>
                <p className='skill'>TailWind CSS</p>
              </div>
            </div>
          </div>
        </div>
        <div className='social-links'>
          <h2 className='social-title'>Socials</h2>
          <div className='social-container'>
            <a
              href='https://github.com/cotybro'
              target='_blank'
              className='social-icon'
            >
              <GitHubIcon sx={{ fontSize: 30 }} className='mr-10' />
            </a>
            <a
              href='https://www.linkedin.com/in/coty-breault/'
              target='_blank'
              className='social-icon'
            >
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </a>
          </div>
        </div>
        <footer className='website-footer'>Copyright &copy;2023</footer>
      </div>
    </div>
  )
}

export default Hero

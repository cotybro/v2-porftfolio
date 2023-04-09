import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SubjectIcon from '@mui/icons-material/Subject'
import HttpsIcon from '@mui/icons-material/Https'
import RefreshIcon from '@mui/icons-material/Refresh'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser'
import TabIcon from '@mui/icons-material/Tab'
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
          <img src='../../src/assets/Images/memoji.png' alt='' className='hero-img' />
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
      </div>
    </div>
  )
}

export default Hero

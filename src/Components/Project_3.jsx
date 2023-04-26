import React from 'react'
import project_Three from '../assets/Images/project-three.png'

function Project_Three() {
  return (
    <div className='project'>
      <div className='project-image-container project-three-scroll'>
        <img
          src={project_Three}
          alt='Designo 7 Page Website'
          className='project-img'
        />
      </div>
      <div className='project-bottom'>
        <p className='project-desc'>
          Designo is a fully responsive 7-page website that follows a
          mobile-first approach in its CSS design. It employs React JS and React
          Router for page navigation.
        </p>
        <div className='project-button-container'>
          <a
            href='https://designo-six.vercel.app/'
            target='_blank'
            className='project-btn'
          >
            View Project
          </a>
          <a
            href='https://github.com/cotybro/designo'
            target='_blank'
            className='project-btn'
          >
            View Code
          </a>
        </div>
        <div className='skills-used'>
          <h3 className='skills-used-title'>Skills Used</h3>
          <div className='skills-container'>
            <p className='skill accent-btn'>HTML</p>
            <p className='skill accent-btn'>CSS</p>
            <p className='skill accent-btn'>React</p>
            <p className='skill accent-btn'>React Router</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_Three

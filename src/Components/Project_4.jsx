import React from 'react'

import project from '../assets/Images/project-four.png'

function Project_4() {
  return (
    <div className='project'>
      <div className='project-image-container'>
        <img src={project} alt='Planet Fact Site' className='project-img' />
      </div>
      <div className='project-bottom'>
        <p className='project-desc'>
          The Planet Fact Site is a website that has been designed to be fully
          responsive, adapting to different screen sizes and devices. The
          website utilizes React JS and React Router to facilitate page
          navigation. By selecting any of the planets, visitors can access
          detailed information regarding the planet's overview, internal
          structure, and surface geology.
        </p>
        <div className='project-button-container'>
          <a
            href='https://planets-fact-site-swart.vercel.app/'
            target='_blank'
            className='project-btn mr-10'
          >
            View Project
          </a>
          <a
            href='https://github.com/cotybro/planets-fact-site'
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

export default Project_4

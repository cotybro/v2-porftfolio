import React from 'react'

import project from '../assets/Images/project-five.png'

function Project_5() {
  return (
    <div className='project'>
      <div className='project-image-container project-three-scroll'>
        <img src={project} alt='Planet Fact Site' className='project-img' />
      </div>
      <div className='project-bottom'>
        <p className='project-desc'>
          A website created using React JS that is fully responsive and utilizes
          a link shortening API to shortening links. The shortened URLs are
          stored in the local storage.
        </p>
        <div className='project-button-container'>
          <a
            href='https://url-shorten-plum.vercel.app/'
            target='_blank'
            className='project-btn mr-10'
          >
            View Project
          </a>
          <a
            href='https://github.com/cotybro/url-shorten'
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_5

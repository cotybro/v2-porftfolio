import React from 'react'
import projectTwoImg from '../assets/Images/project-two.png'
function Project_Two() {
  return (
    <div className='project'>
      <div className='project-image-container'>
        <img src={projectTwoImg} alt='Project Two' className='project-img' />
      </div>
      <div className='project-bottom'>
        <p className='project-desc'>
          A multi-step form that allows users to select various subscription
          add-ons and choose between monthly or yearly subscriptions. It is
          built using ReactJS and utilizes React state and useEffect hooks to
          maintain its state throughout the entire process.
        </p>
        <div className='project-button-container'>
          <a
            href='https://multi-step-form-jade.vercel.app/'
            target='_blank'
            className='project-btn'
          >
            View Project
          </a>
          <a
            href='https://github.com/cotybro/Multi-Step-Form'
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
            <p className='skill accent-btn'>JSX</p>
            <p className='skill accent-btn'>JS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_Two

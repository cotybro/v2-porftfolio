import React from 'react'

function Project_4() {
  return (
    <div className='project'>
      <div className='project-image-container'>
        <img src='' alt='Project Four' className='project-img' />
      </div>
      <div className='project-bottom'>
        <p className='project-desc'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          recusandae ipsa officiis vel, molestiae asperiores quas vero neque
          officia optio deserunt porro, nesciunt soluta eos laboriosam error
          dolorum praesentium suscipit.
        </p>
        <div className='project-button-container'>
          <a href='' target='_blank' className='project-btn mr-10'>
            View Project
          </a>
          <a href='' target='_blank' className='project-btn'>
            View Code
          </a>
        </div>
        <div className='skills-used'>
          <h3 className='skills-used-title'>Skills Used</h3>
          <div className='skills-container'>
            <p className='skill accent-btn'>HTML</p>
            <p className='skill accent-btn'>CSS</p>
            <p className='skill accent-btn'>React</p>
            <p className='skill accent-btn'>ApexCharts</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_4

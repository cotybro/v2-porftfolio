import React from 'react'
import projectOneImg from '../assets/Images/project-one.png'

function Project_One() {
  return (
    <div className='project'>
      <div className='project-image-container'>
        <img src={projectOneImg} alt='Project One' className='project-img' />
      </div>
      <div className='project-bottom'>
        <p className='project-desc'>
          This project showcases my ability to build a custom chart component
          that is compatible with React.js and utilizes ApexCharts for
          rendering. The component is capable of fetching and processing data
          from a JSON file, allowing for dynamic and customizable chart
          visualizations.
        </p>
        <div className='project-button-container'>
          <a
            href='https://expense-chart-component-awnlvon4m-cotybro.vercel.app/'
            target='_blank'
            className='project-btn'
          >
            View Project
          </a>
          <a
            href='https://github.com/cotybro/Expense-Chart-Component'
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
            <p className='skill accent-btn'>ApexCharts</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_One

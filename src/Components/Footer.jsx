import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className='icon-wrapper'>
        <img
          src='https://img.icons8.com/color/48/null/paper-plane.png'
          className='icon-img'
        />
        <p className='icon-text'>Contact Me</p>
      </div>
      <div className='icon-wrapper'>
        <img
          src='https://img.icons8.com/color/48/null/github--v1.png'
          className='icon-img'
        />
        <p className='icon-text'>GitHub</p>
      </div>
      <div className='icon-wrapper'>
        <img
          src='https://img.icons8.com/color/48/null/linkedin.png'
          className='icon-img'
        />
        <p className='icon-text'>LinkedIn</p>
      </div>
    </footer>
  )
}

export default Footer

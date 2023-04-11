import React from 'react'
import './Footer.css'
function Footer(props) {
  console.log({ props })
  console.log(props)
  return (
    <footer className='footer'>
      <div className='icon-wrapper'>
        <button className='footer-btn' onClick={props.hero}>
          <img
            src='https://img.icons8.com/color/48/null/compass--v1.png'
            className='icon-img'
          />
          <p className='icon-text'>Home</p>
        </button>
      </div>
      <div className='icon-wrapper'>
        <button className='footer-btn' onClick={props.project}>
          <img
            src='https://img.icons8.com/color/48/null/mac-folder.png'
            className='icon-img'
          />
          <p className='icon-text'>Projects</p>
        </button>
      </div>
      <div className='icon-wrapper'>
        <button className='footer-btn' onClick={props.contact}>
          <img
            src='https://img.icons8.com/color/48/null/paper-plane.png'
            className='icon-img'
          />
          <p className='icon-text'>Contact Me</p>
        </button>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import './Login.css'
import CloseIcon from '@mui/icons-material/Close'
import PersonIcon from '@mui/icons-material/Person'
import memoji from '../assets/Images/memoji.png'

function Login(props) {
  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <div className='login-img-container'>
          <img
            src={memoji}
            alt='Coty Breault'
            className='login-img'
            onClick={props.login}
          />
        </div>
        <h2 className='login-title'>Coty Breault's Portfolio</h2>
      </div>
      <div className='login-bottom'>
        <div className='login-col'>
          <CloseIcon className='login-close' />
          <p className='close-text'>Cancel</p>
        </div>
        <div className='login-col'>
          <PersonIcon className='login-person' />
          <p className='person-text'>Switch User</p>
        </div>
      </div>
    </div>
  )
}

export default Login

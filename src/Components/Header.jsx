import React, { useState, useEffect } from 'react'
import WifiIcon from '@mui/icons-material/Wifi'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import './Header.css'
function Header() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    })
  )
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour12: true,
          hour: 'numeric',
          minute: 'numeric',
        })
      )
    }, 60000)

    return () => {
      clearTimeout(timer)
    }
  }, [time])

  return (
    <header>
      <div className='header-column'>
        <p>{'< />'} Coty.Codes</p>
      </div>
      <div className='header-column column-flex'>
        <p className='header-icon'>
          <WifiIcon />
        </p>
        <p className='header-icon'>
          <VolumeUpIcon />
        </p>
        <p className='rotate-90'>
          <BatteryChargingFullIcon />
        </p>
        <p className='header-battery-percentage'>100%</p>
        <p className='header-time'>{time}</p>
      </div>
    </header>
  )
}

export default Header

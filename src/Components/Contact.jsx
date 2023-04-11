import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import SendIcon from '@mui/icons-material/Send'
import DraftsIcon from '@mui/icons-material/Drafts'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SearchIcon from '@mui/icons-material/Search'
import './Contact.css'
import ContactForm from '../Components/ContactForm'
function Contact() {
  return (
    <div className='contact'>
      <div className='left-column'>
        <div className='left-column-wrapper'></div>
        <div className='contact-left-top'>
          <div className='button-container'>
            <div className='circle-btn red'></div>
            <div className='circle-btn yellow'></div>
            <div className='circle-btn green'></div>
          </div>
          <RefreshIcon className='refresh-icon' sx={{ fontSize: 18 }} />
        </div>
        <div className='contact-left-bottom'>
          <div className='email-tab'>
            <MailOutlinedIcon sx={{ fontSize: 18 }} className='email-icon' />
            <p className='email-tab-text'>Inbox</p>
          </div>
          <div className='email-tab'>
            <SendIcon sx={{ fontSize: 18 }} className='email-icon' />
            <p className='email-tab-text'>Sent</p>
          </div>
          <div className='email-tab'>
            <DraftsIcon sx={{ fontSize: 18 }} className='email-icon' />
            <p className='email-tab-text'>Drafts</p>
          </div>
          <div className='email-tab'>
            <MoreHorizIcon
              sx={{ fontSize: 18, border: 1, borderRadius: 5 }}
              className='email-icon'
            />
            <p className='email-tab-text'>More</p>
          </div>
        </div>
      </div>
      <div className='middle-column'>
        <div className='middle-column-top'>
          <div className='search-container'>
            <SearchIcon sx={{ fontSize: 18 }} className='search-icon' />
            <p className='search-text'>Search</p>
          </div>
        </div>
        <div className='middle-column-bottom'>
          <div className='email-container'>
            <div className='email-inbox-container'>
              <div className='email-top'>
                <p className='email-sender'>HitGub</p>
                <p className='email-time'>10:24 AM</p>
              </div>
              <div className='email-bottom'>
                <p className='email-text'>
                  HitGub Pilot: Ready to fly into the future?
                </p>
              </div>
            </div>
            <div className='email-inbox-container'>
              <div className='email-top'>
                <p className='email-sender'>LinkedOut</p>
                <p className='email-time'>9:15 AM</p>
              </div>
              <div className='email-bottom'>
                <p className='email-text'>You have 100 new connections.</p>
              </div>
            </div>
            <div className='email-inbox-container'>
              <div className='email-top'>
                <p className='email-sender'>Zcrimba</p>
                <p className='email-time'>Yesterday</p>
              </div>
              <div className='email-bottom'>
                <p className='email-text'>
                  Zcrimba: The best way to learn coding!
                </p>
              </div>
            </div>
            <div className='email-inbox-container'>
              <div className='email-top'>
                <p className='email-sender'>Pode Cen</p>
                <p className='email-time'>Yesterady</p>
              </div>
              <div className='email-bottom'>
                <p className='email-text'>Try our new gritbox for your code!</p>
              </div>
            </div>
            <div className='email-inbox-container'>
              <div className='email-top'>
                <p className='email-sender'>FelloHresh</p>
                <p className='email-time'>Friday</p>
              </div>
              <div className='email-bottom'>
                <p className='email-text'>
                  The best way to have have meals with no waste!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='right-column'>
        <div className='contact-form'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact

import React, { useState } from 'react'
import './Project.css'
import Project_1 from './Project_1'
import Project_2 from './Project_2'
import Project_3 from './Project_3'
import Project_4 from './Project_4'
import Project_5 from './Project_5'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SearchIcon from '@mui/icons-material/Search'
import TocIcon from '@mui/icons-material/Toc'
import WidgetsIcon from '@mui/icons-material/Widgets'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'

import './Projects.css'
function Projects() {
  const [activeProject, setActiveProject] = useState(1)

  return (
    <div className='projects-wrapper'>
      <div className='top-bar-projects'>
        <div className='button-container'>
          <div className='circle-btn red'></div>
          <div className='circle-btn yellow'></div>
          <div className='circle-btn green'></div>
        </div>
        <div className='bottom-bar-container'>
          <div className='bottom-bar-left'>
            <div className='project-icon-container'>
              <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
            </div>
            <div className='project-icon-container arrow-flip mr-10'>
              <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
            </div>
            <div className='home-btn'>
              <p className='home-text'>Home</p>
            </div>
          </div>
          <div className='bottom-bar-right'>
            <div className='project-icon-container mr-5'>
              <SearchIcon sx={{ fontSize: 16 }} />
            </div>
            <div className='project-icon-container mr-5 arrow-flip'>
              <TocIcon sx={{ fontSize: 16 }} />
            </div>
            <div className='project-icon-container mr-5'>
              <WidgetsIcon sx={{ fontSize: 16 }} />
            </div>
            <div className='project-icon-container mr-5'>
              <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
            </div>
            <div className='project-icon-container mr-5'>
              <MoreHorizIcon sx={{ fontSize: 16 }} />
            </div>
          </div>
        </div>
      </div>

      <div className='projects'>
        <div className='left-panel'>
          <div className='left-panel-container'>
            <button
              className={`panel-section ${activeProject === 1 ? 'active' : ''}`}
              onClick={() => setActiveProject(1)}
            >
              <FolderSpecialIcon
                sx={{ fontSize: 26 }}
                className='folder-icon'
              />
              Expense Chart
            </button>
            <button
              className={`panel-section ${activeProject === 2 ? 'active' : ''}`}
              onClick={() => setActiveProject(2)}
            >
              <FolderSpecialIcon
                sx={{ fontSize: 26 }}
                className='folder-icon'
              />
              Multi-Step Form
            </button>
            <button
              className={`panel-section ${activeProject === 3 ? 'active' : ''}`}
              onClick={() => setActiveProject(3)}
            >
              <FolderSpecialIcon
                sx={{ fontSize: 26 }}
                className='folder-icon'
              />
              Designo
            </button>
            <button
              className={`panel-section ${activeProject === 4 ? 'active' : ''}`}
              onClick={() => setActiveProject(4)}
            >
              <FolderSpecialIcon
                sx={{ fontSize: 26 }}
                className='folder-icon'
              />
              Planet Fact Site
            </button>
            <button
              className={`panel-section ${activeProject === 5 ? 'active' : ''}`}
              onClick={() => setActiveProject(5)}
            >
              <FolderSpecialIcon
                sx={{ fontSize: 26 }}
                className='folder-icon'
              />
              Shortly
            </button>
          </div>
        </div>
        <div className='project-container'>
          {activeProject === 1 && <Project_1 />}
          {activeProject === 2 && <Project_2 />}
          {activeProject === 3 && <Project_3 />}
          {activeProject === 4 && <Project_4 />}
          {activeProject === 5 && <Project_5 />}
        </div>
      </div>
    </div>
  )
}

export default Projects

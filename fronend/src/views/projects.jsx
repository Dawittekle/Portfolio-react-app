import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Hnav from '../components/hnav'
import Card from '../components/card'
import Hfooter from '../components/hfooter'
import projectsData from '../projects.json'
import './projects.css'

import { marked } from 'marked'

const Projects = () => {
  const allProjects = Object.values(projectsData)
  const [visibleCount, setVisibleCount] = useState(3)
  const [loading, setLoading] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleViewMore = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 3, allProjects.length))
      setLoading(false)
    }, 800)
  }

  return (
    <div className='projects-container'>
      <Helmet>
        <title>Projects - Dawit Teklebrhan</title>
        <meta property='og:title' content='Projects - Dawit Teklebrhan' />
      </Helmet>
      <Hnav />
      <div className='projects-section section-container'>
        <div className='projects-max-width max-width'>
          <div className='text-container'>
            <span className='projects-text19'>Projects</span>
          </div>
          <div className='projects-cards-container'>
            {allProjects.slice(0, visibleCount).map(project => (
              <div className='card-container'>
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  backgroundImage={project.coverImage}
                  link={project.github}
                  onClick={() => setSelectedProject(project)}
                />
                <div className='card-description'>
                  <div className='proj-date'>{project.date}</div>
                  <div className='github'>GitHub</div>
                </div>
              </div>
            ))}
          </div>
          {loading && (
            <div className='view-more-container'>
              <div className='loader' />
            </div>
          )}
          {!loading && visibleCount < allProjects.length && (
            <div className='view-more-container'>
              <button className='text-view' onClick={handleViewMore}>
                View More
              </button>
            </div>
          )}
        </div>
      </div>
      {selectedProject && (
        <div className='project-overlay'>
          <div
            className='overlay-background'
            onClick={() => setSelectedProject(null)}
          />
          <button
            className='overlay-close'
            onClick={() => setSelectedProject(null)}
          >
            ×
          </button>

          <div className='overlay-content'>
            <img
              src={selectedProject.coverImage}
              alt={selectedProject.title}
              className='overlay-image'
            />
            <div>
              <span>in design {selectedProject.date}</span>
            </div>

            <div className='proj-title-container'>
              <span className='proj-title'>{selectedProject.title}</span>
            </div>

            <p className='proj-des'>"{selectedProject.description}"</p>

            <div
              className='project-md-content'
              dangerouslySetInnerHTML={{
                __html: marked.parse(selectedProject.content || '')
              }}
            />

            <div className='proj-footer'>
              <div>
                <span className='tech-title'>Tech Stack :</span>{' '}
                {selectedProject.tech?.join(', ')}
              </div>

              <div>
                <a
                  href={selectedProject.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='github-link'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <Hfooter />
    </div>
  )
}

export default Projects

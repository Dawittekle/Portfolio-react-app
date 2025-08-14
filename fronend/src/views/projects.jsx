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

  const handleViewLess = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleCount(prev => Math.max(prev - 3, 3))
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
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                backgroundImage={project.coverImage}
                link={project.github}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
          {loading && (
            <div className='view-more-container'>
              <div className='loader' />
            </div>
          )}
          {!loading && (
            <div className='view-more-container'>
              {visibleCount < allProjects.length && (
                <button className='text-view' onClick={handleViewMore}>
                  View More
                </button>
              )}
              {visibleCount > 3 && (
                <button className='text-view' onClick={handleViewLess} style={{ marginLeft: '10px' }}>
                  View Less
                </button>
              )}
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
            <h2>{selectedProject.title}</h2>
            <img
              src={selectedProject.coverImage}
              alt={selectedProject.title}
              className='overlay-image'
            />
            <p>{selectedProject.description}</p>
            <div>
              <strong>Tech Stack:</strong> {selectedProject.tech?.join(', ')}
            </div>
            <a
              href={selectedProject.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
            <div
              className='project-md-content'
              dangerouslySetInnerHTML={{
                __html: marked.parse(selectedProject.content || '')
              }}
            />
          </div>
        </div>
      )}
      <Hfooter />
    </div>
  )
}

export default Projects;
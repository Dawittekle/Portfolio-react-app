import React from 'react'
import { Helmet } from 'react-helmet'
import Hnav from '../components/hnav'
import Card from '../components/card'
import Hfooter from '../components/hfooter'
import projectsData from '../projects.json' // <-- import generated JSON

const Projects = () => {
  return (
    <div className='projects-container'>
      <Helmet>
        <title>Projects - Dawit Teklebrhan</title>
        <meta property='og:title' content='Projects - Dawit Teklebrhan' />
      </Helmet>
      <Hnav />
      <div className='projects-section section-container'>
        <div className='projects-max-width max-width'>
          <div>
            <span className='projects-text19'>Projects</span>
          </div>
          <div className='projects-cards-container'>
            {Object.values(projectsData).map(project => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                backgroundImage={project.coverImage}
                link={project.github}
              />
            ))}
          </div>
        </div>
      </div>
      <Hfooter />
    </div>
  )
}

export default Projects

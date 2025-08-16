import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hnav from '../components/hnav'
import Card from '../components/card'
import BlogCard from '../components/BlogCard'
import Hfooter from '../components/hfooter'
import projectsData from '../projects.json'

import { getLatestPosts } from '../lib/loadPosts'

import './home.css'

const Home = props => {
  const latestPosts = getLatestPosts(3) // Always gets 3 latest posts
  const allProjects = Object.values(projectsData).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  return (
    <div className='home-container1'>
      <Helmet>
        <title>Dawit Teklebrhan</title>
        <meta property='og:title' content='Dawit Tekelebrhan' />
      </Helmet>
      <Hnav />
      <div className='home-hero hero-container section-container'>
        <div className='home-max-width1 max-width'>
          <div className='home-content1'>
            <span className='home-subtitle'>Always Curious</span>
            <h1 className='home-title1'>Ideas Before  Aesthetics</h1>
            <span className='home-description'>
              <span className='home-text19'>Dawit Teklebrhan, </span>
              <span>
                a Full-Stack Developer and CS student with a passion for clean
                design, smart code, and exploring AI. I build user-friendly web
                apps from front to back, often blending development with UI/UX
                design.
              </span>
            </span>
            <div className='home-container2'>
              <a href='/about'>
                {' '}
                <span className='home-text21'>Read More</span>
              </a>
            </div>
          </div>
          <div className='home-image1'>
            <img
              alt='image'
              src='/myphotos/green-600w.jpg'
              className='home-hero-image'
            />
          </div>
        </div>
      </div>
      <div className='section-container'>
        <div className='home-max-width2 max-width'>
          <div className='home-content2'>
            <span className='home-text22'>Services</span>
            <h1 className='home-text23'>
              What I bring to the table (besides coffee and code).
            </h1>
            <span className='home-text24'>
              I love turning ideas into smart, functional, and beautiful digital
              experiences — from full-stack apps to clean UI and a touch of AI.
              Here’s what I do:
            </span>
            <div className='home-container3'>
              <a href='/about#services'>
                <span className='home-text25'>Read More</span>
              </a>
            </div>
          </div>
          <div className='home-image2'>
            <div className='home-content3'>
              <div className='home-step1'>
                <div className='home-number1'>
                  <span className='home-text26'>1</span>
                </div>
                <div className='home-container4'>
                  <span className='home-title2'>
                    Full-Stack Web Development
                  </span>
                  <span className='home-text27'>
                    I bring ideas to life — from pixel-perfect frontends to
                    powerful backends.
                  </span>
                </div>
              </div>
              <div className='home-step2'>
                <div className='home-number1'>
                  <span className='home-text26'>2</span>
                </div>
                <div className='home-container5'>
                  <span className='home-title3'>Web UI/UX Design</span>
                  <span className='home-text29'>
                    I don’t just make things work — I make them feel right. With
                    Figma in hand and a love for clean interfaces, I design
                    experiences that are as smooth as they are beautiful.
                  </span>
                </div>
              </div>
              <div className='home-step3'>
                <div className='home-number1'>
                  <span className='home-text26'>3</span>
                </div>
                <div className='home-container6'>
                  <span className='home-title4'>AI-Integrated Solutions</span>
                  <span className='home-text31'>
                    Lately, I’ve been exploring the brains behind thehome-text33
                    apps — adding a touch of AI to make things smarter, faster,
                    and a bit more magical.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-container'>
        <div className='home-max-width3 max-width'>
          <span className='home-text22'>Projects</span>
          <h1 className='home-text23'>
            Things I’ve Built (That I’m Kinda Proud Of)
          </h1>
          <div className='home-cards-container'>
            {allProjects.slice(0, 3).map(project => (
              <a href='/projects'>
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  backgroundImage={project.coverImage}
                  link={project.github}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='section-container'>
        <div className='home-max-width3 max-width'>
          <span className='home-text22'>Blog Post</span>
          <h1 className='home-text23'>My Latest Articles</h1>
          <div className='home-cards-container'>
            {latestPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
                link={`/blog/${post.id}`}
                imageSrc={post.imageSrc || post.heroImage}
                imageAlt={post.imageAlt || `Post ${index + 1}`}
                isFeatured={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
      <Hfooter />
    </div>
  )
}

export default Home

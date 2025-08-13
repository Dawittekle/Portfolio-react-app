import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hnav from '../components/hnav'
import Servicelists from '../components/servicelists'
import Stacks from '../components/stacks'
import Contactform from '../components/contactform'
import Hfooter from '../components/hfooter'

import { useScrollToHash } from '../assets/useScrollToHash'

import './about.css'

const About = props => {
  useScrollToHash()

  return (
    <div className='about-container'>
      <Helmet>
        <title>About - Dawit Teklebrhan</title>
        <meta property='og:title' content='About - Dawit Teklebrhan' />
      </Helmet>
      <Hnav />
      <span className='about-text19'>About me</span>
      <div className='about-hero hero-container section-container'>
        <div className='about-max-width max-width'>
          <div className='about-content'>
            <h1 className='about-title'>Dawit Teklebrhan</h1>
            <span className='about-text20'>Full-stack developer</span>
            <span className='about-description'>
              I’m a passionate Full-Stack Developer with a strong focus on
              frontend development and a growing interest in AI. Currently in my
              third year of a Computer Science degree, I’ve worked on a wide
              range of projects that combine clean, responsive interfaces with
              robust backend functionality. I specialize in building modern web
              applications using technologies like React, and I enjoy turning
              complex ideas into intuitive user experiences. With a constant
              drive to learn and improve, I’m always exploring new tools and
              technologies to create efficient, scalable, and impactful digital
              solutions.
            </span>
            <a href='#download'>
              <button type='button' className='about-button button'>
                Download Resume 
              </button>
            </a>
          </div>
          <div className='about-image'>
            <img
              alt='image'
              src='/myphotos/me-600w.jpg'
              className='about-hero-image'
            />
          </div>
        </div>
      </div>
      <Servicelists
        sectionTitle={
          <Fragment>
            <span id='services' className='about-text21'>
              My-services
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className='about-text22'>Full-Stack Web Development</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className='about-text22'>Creative UI/UX Design</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className='about-text22'>AI-Integrated Solutions</span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className='about-text22'>Customized Projects</span>
          </Fragment>
        }
        feature1ImageSrc='/myphotos/icons%20beige_green-600w.jpg'
        feature2ImageSrc='/myphotos/flower-600w.jpg'
        feature3ImageSrc='/myphotos/minimal%20ai%20graphic%20in%20green-600w.jpg'
        feature4ImageSrc='/myphotos/download-600w.jpg'
        feature1Description={
          <Fragment>
            <span className='about-text26'>
              Expertise in developing both front-end and back-end components to
              create seamless web applications.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className='about-text27'>
              Creating visually appealing and user-friendly interfaces to
              enhance user experience and engagement.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className='about-text28'>
              Implementing artificial intelligence technologies to optimize
              processes and deliver intelligent solutions.
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className='about-text29'>
              Tailoring solutions to meet specific client needs and requirements
              for unique and impactful results.
            </span>
          </Fragment>
        }
      ></Servicelists>

      <Stacks
        feature1Title={
          <Fragment>
            <span className='about-text30'>HTML5</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className='about-text31'>Tailwind CSS</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className='about-text32'>
              React.js
              <span
                dangerouslySetInnerHTML={{
                  __html: ' '
                }}
              />
            </span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className='about-text33'>
              Node.js
              <span
                dangerouslySetInnerHTML={{
                  __html: ' '
                }}
              />
            </span>
          </Fragment>
        }
        feature4Title2={
          <Fragment>
            <span className='about-text34'>Redux</span>
          </Fragment>
        }
        feature4Title3={
          <Fragment>
            <span className='about-text35'>
              <span>MongoDB</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' '
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        feature4Title4={
          <Fragment>
            <span className='about-text38'>Figma</span>
          </Fragment>
        }
        feature4Title5={
          <Fragment>
            <span className='about-text39'>PHP</span>
          </Fragment>
        }
        feature4Title6={
          <Fragment>
            <span className='about-text40'>Python</span>
          </Fragment>
        }
        feature4ImageSrc6='/logos/sololearn_%20learn%20to%20code-1200w.jpg'
        feature4ImageSrc5='/logos/php%20programming%20language%20logo%20by%20code%20t-shirt%20_%20redbubble-1200w.jpg'
        feature4ImageSrc4='/logos/figma%20logo%20_%20svg%20_%20real%20company%20_%20alphabet%2C%20letter%20f%20logo-1200w.jpg'
        feature4ImageSrc3='/logos/mongodb%20logo%20png%20vector%20(svg)%20free%20download-1200w.jpg'
        feature4ImageSrc2='/logos/getting%20started%20with%20redux_%20connecting%20redux%20with%20react%20_%20envato%20tuts%2B-1200w.jpg'
        feature4ImageSrc='/logos/nodejs%2C%20une%20d%C3%A3%C2%A9finition%20-%20zdnet-1200w.jpg'
        feature3ImageSrc='/logos/react%20icon%20_%20hugeicons-1200w.jpg'
        feature2ImageSrc='/logos/tailwind%20css%20grid_%20the%20ultimate%20cheat%20sheet%20(2023)-1200w.jpg'
        feature1ImageSrc='/logos/a%20simple%20login%20page%20by%20simple%20coding%20html%20and%20css%20%C3%A2%C2%98%C2%95%C3%AF%C2%B8%C2%8F%20only%20(for%20beginners)_join%20me%20follow%20me%20for%20more%20updates%20%C3%B0%C2%9F%C2%91%C2%8D%C3%B0%C2%9F%C2%8F%C2%BB_%23webdevelopment%20%23coding%20__%23html%20%23html5%20%23css%20%23coding%20%23simplecode%20%23login%20%23loginpagedesign%20%23learcoding%20-1200w.jpg'
        rootClassName='stacksroot-class-name'
      ></Stacks>
      <Contactform
        content1={
          <Fragment>
            <span className='about-text41'>
              Have a project idea, looking to collaborate, or need a developer,
              designer, or someone to explore interesting tech with?
            </span>
          </Fragment>
        }
        email={
          <Fragment>
            <span className='about-text42'>teklebrhandawit309@gmail.com</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className='about-text43'>Send</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className='about-text44'>+251902468877</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className='about-text45'>Contact info</span>
          </Fragment>
        }
      ></Contactform>
      <Hfooter />
    </div>
  )
}

export default About

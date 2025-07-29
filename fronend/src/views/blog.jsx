import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hnav from '../components/hnav'
import Card from '../components/card'
import Hfooter from '../components/hfooter'
import './blog.css'

const Blogs = props => {
  return (
    <div className='blogs-container'>
      <Helmet>
        <title>Blogs - Dawit Teklebrhan</title>
        <meta property='og:title' content='Blogs - Dawit Teklebrhan' />
      </Helmet>
      <Hnav
        text={
          <Fragment>
            <span className='projects-text10'>Dawit.</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className='projects-text11'>_home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className='projects-text12'>_about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className='projects-text13'>_services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className='projects-text14'>_projects</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className='projects-text15'>_blog</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className='projects-text16'>Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className='projects-text17'>Log In</span>
          </Fragment>
        }
        rootClassName='hnavroot-class-name2'
        link51={
          <Fragment>
            <span className='projects-text18'>_contact</span>
          </Fragment>
        }
      ></Hnav>
      <div className='blogs-page'>
        <section className='blogsec1'>
          <div className='blogh1'>blogs</div>
          <div><span>Home</span>/<span>Blogs</span></div>
        </section>
        <section className='blog-content'>
          <div className='blog-all'>
            hey all the blogs
          </div>
          <div className='blog-filter'> here is where i filter you</div>
        </section>
      </div>
      <Hfooter
        email={
          <Fragment>
            <span className='projects-text29'>Email</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className='projects-text30'>Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className='projects-text30'>Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className='projects-text30'>Projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className='projects-text30'>Blog</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className='projects-text30'>Contact</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className='projects-text35'>+251902468877</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className='projects-text36'>Subscribe</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className='projects-text37'>
              Stay updated with our latest news and offerings.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className='projects-text38'>
              ©2023 Dawit Teklebrhan. All rights reserved.
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className='projects-text39'>Contact me</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className='projects-text40'>
              <span>Privacy &amp; Terms.</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className='projects-text44'>Pages</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className='projects-text45'>Address</span>
          </Fragment>
        }
        rootClassName='hfooterroot-class-name2'
        socialLinkTitleCategory={
          <Fragment>
            <span className='projects-text46'>Follow Me</span>
          </Fragment>
        }
      ></Hfooter>
    </div>
  )
}

export default Blogs

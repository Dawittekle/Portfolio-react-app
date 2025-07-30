import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hnav from '../components/hnav'
import Hfooter from '../components/hfooter'
import Bloglist from '../components/bloglist'
import Bloglatest from '../components/bloglatest'
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
          <div><span>home</span>/<span>blog</span></div>
        </section>
        <section className='blog-content'>
          <div className='blog-all'>
             <Bloglist
        feature1Title={
          <Fragment>
            <span className="blog-text19">
              10 Reasons why you should make a physical portfolio
            </span>
          </Fragment>
        }
        rootClassName="bloglistroot-class-name"
        feature1Slogan={
          <Fragment>
            <span className="blog-text20">in design may 30 2022</span>
          </Fragment>
        }
        feature1Slogan1={
          <Fragment>
            <span className="blog-text21">Read More</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="blog-text22">
              Use high-quality images and videos to create a visually appealing
              experience. Visuals of happy clients can significantly...
            </span>
          </Fragment>
        }
      ></Bloglist>

      <Bloglist
        feature1Title={
          <Fragment>
            <span className="blog-text19">
              10 Reasons why you should make a physical portfolio
            </span>
          </Fragment>
        }
        rootClassName="bloglistroot-class-name"
        feature1Slogan={
          <Fragment>
            <span className="blog-text20">in design may 30 2022</span>
          </Fragment>
        }
        feature1Slogan1={
          <Fragment>
            <span className="blog-text21">Read More</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="blog-text22">
              Use high-quality images and videos to create a visually appealing
              experience. Visuals of happy clients can significantly...
            </span>
          </Fragment>
        }
      ></Bloglist>

      <Bloglist
        feature1Title={
          <Fragment>
            <span className="blog-text19">
              10 Reasons why you should make a physical portfolio
            </span>
          </Fragment>
        }
        rootClassName="bloglistroot-class-name"
        feature1Slogan={
          <Fragment>
            <span className="blog-text20">in design may 30 2022</span>
          </Fragment>
        }
        feature1Slogan1={
          <Fragment>
            <span className="blog-text21">Read More</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="blog-text22">
              Use high-quality images and videos to create a visually appealing
              experience. Visuals of happy clients can significantly...
            </span>
          </Fragment>
        }
      ></Bloglist>
          </div>
          <div className='blog-filter'> 
            <section className="blog-latest">
              <div className="blog-text">Latest Posts</div>
               <Bloglatest
        feature1Title={
          <Fragment>
            <span className="blog-text23">
              10 Reasons why you should make a physical portfolio
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="blog-text24">
              10 Reasons why you should make a physical portfolio
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="blog-text25">October 25, 2023</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="blog-text26">October 25, 2023</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="blog-text27">October 25, 2023</span>
          </Fragment>
        }
        feature2Description1={
          <Fragment>
            <span className="blog-text28">
              Creating visually appealing and user-friendly interfaces
            </span>
          </Fragment>
        }
      ></Bloglatest>
              
            </section>
            <section className="blog-categories">
              <div className="blog-text">Categories</div>
              <ul className="blog-list">
                <li>
                  <span className="blog-text30">Design</span>
                </li>
                <li>
                  <span className="blog-text30">Development</span>
                </li>
                <li>
                  <span className="blog-text30">History</span>
                </li>
                <li>
                  <span className="blog-text30">Business</span>
                </li>
                <li>
                  <span className="blog-text30">Technology</span>
                </li>
              </ul>

            </section>
            <section className="blog-tags blog-tag-texts">
              <div className="blog-text">Tags</div>
              <div><span>Machine Learning</span> <span>Algorithms</span> <span>
                Data Science</span> <span>Books</span> <span>Design</span> <span>Movies</span> <span>Music</span></div>
            </section>
          </div>
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

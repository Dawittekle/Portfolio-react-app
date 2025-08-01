import React, { Fragment,useState,useEffect } from 'react'

import { Helmet } from 'react-helmet'

import { Link } from 'react-router-dom';

import { Buffer } from 'buffer';
window.Buffer = Buffer;

import { getAllPosts } from '../lib/loadPosts';

import './BlogList.css';


import Hnav from '../components/hnav'
import Hfooter from '../components/hfooter'
import Bloglist from '../components/blogcomponents/bloglist'
import Bloglatest from '../components/blogcomponents/bloglatest'
import './blog.css'

const Blogs = props => {
   const posts = getAllPosts();

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
          <div><a href="/"><span>home</span></a>/ <a href="/blog"><span>blog</span></a></div>
        </section>
        <section className='blog-content'>
          <div className='blog-all'>
            <Bloglist
  title="10 Reasons why you should make a physical portfolio"
  titleLink="/design-secrets"
  ctaLink="/design-secrets#more"
  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiqeuOap9GnWvgoS9zUNwUYfnvGcWER3EZw&s"
  description="Use high-quality images and videos to create a visually appealing
              experience. Visuals of happy clients can significantly..."
/>

          <Bloglist
  title="10 Reasons why you should make a physical portfolio"
  titleLink="/design-secrets"
  ctaLink="/design-secrets#more"
  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiqeuOap9GnWvgoS9zUNwUYfnvGcWER3EZw&s"
  description="Use high-quality images and videos to create a visually appealing
              experience. Visuals of happy clients can significantly..."
/>

          </div>
          <div className='blog-filter'> 
            <section className="blog-latest">
              <div className="blog-text">Latest Posts</div>
               <Bloglatest /> 
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
        <section className='blog-pagination'>

 <div className="blog-container">
      <h1 className="blog-header">Latest Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <Link to={`/posts/${post.id}`} className="post-link">
              {post.heroImage && (
                <img 
                  src={post.heroImage} 
                  alt={post.title}
                  className="post-image"
                />
              )}
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-category">{post.category}</span>
                </div>
                <div className="post-tags">
                  {post.tags?.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div></div>
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

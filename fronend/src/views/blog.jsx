import React, { Fragment,useState,useEffect } from 'react'

import { Helmet } from 'react-helmet'

import { Link } from 'react-router-dom';


import { getAllPosts, getPostsByCategory, getPostsByTag, getLatestPosts } from '../lib/loadPosts';

import './BlogList.css';


import Hnav from '../components/hnav'
import Hfooter from '../components/hfooter'
import BlogList from '../components/blogcomponents/BlogList'
import BlogLatest from '../components/blogcomponents/BlogLatest'
import './blog.css'

const Blogs = props => {
  const allPosts = getAllPosts();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

  // Get filtered posts
  const filteredPosts = activeCategory 
    ? getPostsByCategory(activeCategory)
    : activeTag
    ? getPostsByTag(activeTag)
    : allPosts;

  // Get unique categories and tags
  const categories = [...new Set(allPosts.map(post => post.category))];
  const tags = [...new Set(allPosts.flatMap(post => post.tags))];

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
        <div className='blogh1'>Blogs</div>
        <div>
          <Link to="/"><span>home</span></Link> / <Link to="/blog"><span>blog</span></Link>
        </div>
      </section>

      <section className='blog-content'>
        <div className='blog-all'>
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogList key={post.id} post={post}
               title ={post.title} 
               imageSrc={post.heroImage}
                description={post.description}
                date={post.date}
                titleLink={`/blog/${post.id}`}
                ctaLink={`/blog/${post.id}`}
             />
            ))
          ) : (
            <div className="no-posts">No posts found matching your criteria</div>
          )}
        </div>

        <div className='blog-filter'>
          <section className="blog-latest">
            <div className="blog-text">Latest Posts</div>
            <BlogLatest posts={getLatestPosts(3)} />
          </section>

          <section className="blog-categories">
            <div className="blog-text">Categories</div>
            <ul className="blog-list">
              <li onClick={() => setActiveCategory(null)}>
                <span className={`blog-text30 ${!activeCategory ? 'active' : ''}`}>All</span>
              </li>
              {categories.map(category => (
                <li 
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveTag(null);
                  }}
                >
                  <span className={`blog-text30 ${activeCategory === category ? 'active' : ''}`}>
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="blog-tags blog-tag-texts">
            <div className="blog-text">Tags</div>
            <div>
              <span 
                onClick={() => setActiveTag(null)}
                className={!activeTag ? 'active' : ''}
              >
                All
              </span>
              {tags.map(tag => (
                <span
                  key={tag}
                  onClick={() => {
                    setActiveTag(tag);
                    setActiveCategory(null);
                  }}
                  className={activeTag === tag ? 'active' : ''}
                >
                  {tag}
                </span>
              ))}
            </div>
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

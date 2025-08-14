// components/Hblog.jsx
import React from 'react'
import BlogCard from './BlogCard'
import './hblog.css'

import { getLatestPosts } from '../lib/loadPosts'

const Hblog = ({ posts }) => {
  const latestPosts = getLatestPosts(3) // Always gets 3 latest posts
  return (
    <div className='hblog-layout300 thq-section-padding'>
      <div className='hblog-max-width thq-section-max-width'>
        <div className='hblog-section-title'>
          <span className='hblog-text10 thq-body-small'>Blog Post</span>
          <h2 className='hblog-text11 thq-heading-2'>My Latest Articles</h2>
        </div>

        <div className='hblog-content2'>
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
  )
}

export default Hblog

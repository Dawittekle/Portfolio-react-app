import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import matter from 'gray-matter'
import { Link } from 'react-router-dom'

import Hnav from '../components/hnav'
import Hfooter from '../components/hfooter'
import './blog.css'

const importAll = (r) =>
  r.keys().map((key) => {
    const file = r(key)
    const slug = key.replace('./', '').replace('.md', '')
    const markdown = file.default
    const { data } = matter(markdown)
    return { ...data, slug }
  })

const posts = importAll(require.context('../posts', false, /\.md$/))

const Blogs = () => {
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [tagFilter, setTagFilter] = useState(null)

  const filteredPosts = posts
    .filter((post) => {
      if (categoryFilter && post.category !== categoryFilter) return false
      if (tagFilter && !post.tags?.includes(tagFilter)) return false
      return true
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const categories = [...new Set(posts.map((p) => p.category))]
  const tags = [...new Set(posts.flatMap((p) => p.tags || []))]

  return (
    <div className='blogs-container'>
      <Helmet>
        <title>Blogs - Dawit Teklebrhan</title>
        <meta property='og:title' content='Blogs - Dawit Teklebrhan' />
      </Helmet>

      <Hnav rootClassName='hnavroot-class-name2' />

      <div className='blogs-page'>
        <section className='blogsec1'>
          <div className='blogh1'>blogs</div>
          <div>
            <Link to='/'><span>home</span></Link> / <Link to='/blog'><span>blog</span></Link>
          </div>
        </section>

        <section className='blog-content'>
          <div className='blog-all'>
            {filteredPosts.map((post) => (
              <div key={post.slug} className='blog-card'>
                <Link to={`/blog/${post.slug}`}>
                  <img src={post.coverImage} alt={post.title} className='blog-cover' />
                  <h2>{post.title}</h2>
                </Link>
                <p>{new Date(post.date).toLocaleDateString()}</p>
                <p><strong>Category:</strong> {post.category}</p>
                <p><strong>Tags:</strong> {post.tags?.join(', ')}</p>
              </div>
            ))}
          </div>

          <div className='blog-filter'>
            <section className='blog-latest'>
              <div className='blog-text'>Latest Posts</div>
              <ul>
                {posts.slice(0, 3).map((post) => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`}>
                      <strong>{post.title}</strong><br />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className='blog-categories'>
              <div className='blog-text'>Categories</div>
              <ul className='blog-list'>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button onClick={() => setCategoryFilter(cat === categoryFilter ? null : cat)}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section className='blog-tags blog-tag-texts'>
              <div className='blog-text'>Tags</div>
              <div className='tags-wrapper'>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setTagFilter(tag === tagFilter ? null : tag)}
                    className='tag-button'
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>

      <Hfooter rootClassName='hfooterroot-class-name2' />
    </div>
  )
}

export default Blogs
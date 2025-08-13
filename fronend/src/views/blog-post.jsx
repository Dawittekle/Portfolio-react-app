import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostById } from '../lib/loadPosts'
import { marked } from 'marked'
import './BlogPost.css'

import Hnav from 'components/hnav'
import Hfooter from 'components/hfooter'

import Giscus from '@giscus/react'

export default function BlogPost () {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPostData = async () => {
      try {
        setLoading(true)
        const postData = getPostById(id)

        if (!postData) {
          throw new Error('Post not found')
        }

        // Convert Markdown to HTML
        const contentHtml = postData.content
          ? marked.parse(postData.content)
          : ''

        const processedPost = {
          ...postData,
          contentHtml,
          heroImage: postData.heroImage || '/default-post-image.jpg'
        }

        setPost(processedPost)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadPostData()
  }, [id])

  if (loading) return <div className='blog-page loading loader'></div>
  if (error) return <div className='blog-page error'>Error: {error}</div>
  if (!post) return <div className='blog-page not-found'>Post not found</div>

  return (
    <>
      <Hnav />

      <div className='blog-page'>
        <section className='blogsec1'>
          <div className='blogh1'>Blog Details</div>
          <div>
            <span>home</span> /{' '}
            <Link to='/blog'>
              <span>blog</span>
            </Link>
          </div>
        </section>

        <div className='post-container'>
          <div className='post-hero-image-container'>
            {post.heroImage && (
              <img
                src={post.heroImage}
                alt={post.title}
                className='post-hero-image'
              />
            )}
          </div>

          <div className='date-container'>
            <span className='post-date'>in design {post.date}</span>
          </div>

          <div className='post-title-container'>
            <span className='post-title'>{post.title}</span>
          </div>

          {/* Render the HTML content */}
          <div
            className='post-content'
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <header className='post-meta-container'>
            <div className='post-tags'>
              <span className='tag-text'>Tags : </span>
              {post.tags?.map(tag => (
                <span key={tag} className='tag'>
                  {tag}
                </span>
              ))}
            </div>

            <div className='post-meta'>
              <span className='catagory'>{post.category}</span>
            </div>
          </header>
        </div>

        <section className='comment-section'>
          <div className='post-comments'>
            <span className='comment-text'>Leave your comment here</span>
            <Giscus
              id='comments'
              repo='Dawittekle/Portfolio-react-app'
              repoId='R_kgDOOO4ShA'
              category='General'
              categoryId='DIC_kwDOOO4ShM4CtzMv'
              mapping='pathname'
              strict='0'
              reactionsEnabled='1'
              emitMetadata='0'
              inputPosition='bottom'
              theme='dark'
              lang='en'
              loading='lazy'
            />
          </div>
        </section>
      </div>

      <Hfooter />
    </>
  )
}

// components/BlogCard.jsx
import React from 'react'
import PropTypes from 'prop-types'
import './blog-card.css'
const BlogCard = ({
  title,
  description,
  date,
  link,
  imageSrc,
  imageAlt,
  isFeatured = false
}) => {
  return (
    <div className='hblog-feature'>
      <div>
        {imageSrc && (
          <img alt={imageAlt} src={imageSrc} className='thq-img-ratio-4-3' />
        )}
      </div>
      <div className='hblog-container'>
        <div>
          <span className='hblog-text30'>in design {date}</span>
        </div>

        <div className='hblog-content'>
          <a href={link}>
            <span className='blog-title-link'>{title}</span>
          </a>
          <div>
            <span className='blog-description'>{description}</span>
          </div>
        </div>
      </div>
      <div className='readmore-container'>
        <a href={link}>
          <span className='read-more'>Read More</span>
        </a>
      </div>
    </div>
  )
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  isFeatured: PropTypes.bool
}

BlogCard.defaultProps = {
  imageAlt: 'Blog post thumbnail',
  isFeatured: false
}

export default BlogCard

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
      <div className='date-container'>
        <span className='hblog-text30'>in design {date}</span>
      </div>

      <div className='hblog-content'>
        <div
          className={`hblog-feature${
            isFeatured ? '1' : ''
          }-title thq-heading-3`}
        >
          <a href={link} className='blog-title-link'>
            {title}
          </a>
        </div>
        <p
          className={`hblog-feature${
            isFeatured ? '1' : ''
          }-description thq-body-small`}
        >
          {description}
        </p>
        <div>
          <a href={link} className='hblog-text22'>
            Read More
          </a>
        </div>
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

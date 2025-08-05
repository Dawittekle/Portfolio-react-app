import React from 'react'
import PropTypes from 'prop-types'

const BlogItem = ({
  imageAlt = 'Blog post image',
  imageSrc = 'https://via.placeholder.com/150',
  title = 'Creating visually appealing interfaces',
  description,
  date = 'October 25, 2023',
  isFeatured = false,
  link = '#',
}) => {
  return (
    <div className={`thq-flex-row ${isFeatured ? 'bloglatest-list-item1' : ''}`}>
      <img
        alt={imageAlt}
        src={imageSrc}
        className="bloglatest-image1 thq-team-image-round"
      />
      <a href={link}><div className="bloglatest-content2 thq-flex-column">
        <h3 className="bloglatest-title2 thq-heading-3">
          <span className={`bloglatest-text${isFeatured ? '5' : '6'}`}>
            {title}
          </span>
        </h3>
        <span className="bloglatest-description2 thq-body-small">
          <span className={`bloglatest-text${isFeatured ? '4' : '3'}`}>
            {date}
          </span>
          {description && <p className="bloglatest-excerpt">{description}</p>}
        </span>
      </div></a>
      
    </div>
  )
}

BlogItem.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  isFeatured: PropTypes.bool
}

export default BlogItem
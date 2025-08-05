import React from 'react'
import PropTypes from 'prop-types'
import './bloglist.css'

const Bloglist = (props) => {
  const {
    title = "10 Reasons why you should make a physical portfolio",
    date = `${new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })}`,
    description = "Use high-quality images and videos to create a visually appealing experience...",
    imageSrc,
    imageAlt = "Blog post thumbnail",
    rootClassName = "",
    titleLink = "#",       // Default link for title
    ctaLink = "#",        // Default link for Read More
    onTitleClick,         // Optional click handler
    onCtaClick           // Optional click handler
  } = props

  return (
    <div className={`bloglist-layout226 thq-section-padding ${rootClassName}`}>
      <div className="bloglist-max-width thq-section-max-width">
        <div className="bloglist-column thq-flex-column">
          {/* Image remains unchanged */}
          <img alt={imageAlt} src={imageSrc} className="thq-img-ratio-4-3" />
          
          <div className="bloglist-section-title thq-flex-column">
            {/* Date - unchanged */}
            <span className="bloglist-over-title11 thq-body-small">
              <span className="blog-text20">in design {date}</span>
            </span>

            <div className="bloglist-content thq-flex-column">
              {/* Clickable Title */}
              <h3 className="bloglist-title1 thq-heading-3">
                <a 
                  href={titleLink} 
                  className="blog-text19 title-link" 
                  onClick={onTitleClick}
                >
                  {title}
                </a>
              </h3>
              
              {/* Description - unchanged */}
              <span className="bloglist-description1 thq-body-small">
                <span className="blog-text22">{description}...</span>
              </span>
            </div>

            {/* Clickable Read More */}
            <a 
              href={ctaLink} 
              className="bloglist-over-title12 thq-body-small cta-link"
              onClick={onCtaClick}
            >
              <span className="blog-text21">Read More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Bloglist.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  ctaText: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  titleLink: PropTypes.string,
  ctaLink: PropTypes.string,
  onTitleClick: PropTypes.func,
  onCtaClick: PropTypes.func
}

export default Bloglist
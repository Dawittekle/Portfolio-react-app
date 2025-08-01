import React from 'react'
import PropTypes from 'prop-types'
import './bloglist.css'

const Bloglist = (props) => {
  const {
    title = "10 Reasons why you should make a physical portfolio",
    date = `in design ${new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })}`,
    ctaText = "Read More",
    description = "Use high-quality images and videos to create a visually appealing experience...",
    imageSrc = "https://images.unsplash.com/photo-1740560516724-c74858702711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1Mzg1NTQ0MHw&ixlib=rb-4.1.0&q=80&w=1080",
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
              <span className="blog-text20">{date}</span>
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
                <span className="blog-text22">{description}</span>
              </span>
            </div>

            {/* Clickable Read More */}
            <a 
              href={ctaLink} 
              className="bloglist-over-title12 thq-body-small cta-link"
              onClick={onCtaClick}
            >
              <span className="blog-text21">{ctaText}</span>
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
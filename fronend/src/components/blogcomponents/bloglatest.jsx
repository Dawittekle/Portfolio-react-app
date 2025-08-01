import React from 'react'
import PropTypes from 'prop-types'
import BlogItem from './BlogItem' 
import './bloglatest.css'

const Bloglatest = (props) => {
  return (
    <div className="bloglatest-layout223 thq-section-padding">
      <div className="bloglatest-max-width thq-flex-row thq-section-max-width">
        <div className="bloglatest-container thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="bloglatest-list thq-flex-column">
            {/* Featured Item */}
            <BlogItem
              imageAlt={props.feature2ImageAlt}
              imageSrc={props.feature2ImageSrc}
              title={props.feature2Description1 || "Creating visually appealing interfaces"}
              date={props.feature2Date || "October 25, 2023"}
              isFeatured
            />

            {/* Regular Item 1 */}
            <BlogItem
              imageAlt={props.feature3ImageAlt}
              imageSrc={props.feature3ImageSrc}
              title={props.feature3Title || "10 Reasons for a physical portfolio"}
              date={props.feature3Date || "October 25, 2023"}
            />

            {/* Regular Item 2 */}
            <BlogItem
              imageAlt={props.feature1ImageAlt}
              imageSrc={props.feature1ImageSrc}
              title={props.feature1Title || "10 Reasons for a physical portfolio"}
              date={props.feature1Date || "October 25, 2023"}
            />
          </div>
          <div className="thq-flex-row bloglatest-actions"></div>
        </div>
      </div>
    </div>
  )
}

Bloglatest.defaultProps = {
  feature3Title: undefined,
  feature3Date: undefined,
  feature3ImageAlt: 'Blog post image',
  feature3ImageSrc: 'https://images.unsplash.com/photo-1553921895-a1b5b2500a17',
  feature1Date: undefined,
  feature2Date: undefined,
  feature2ImageAlt: 'Blog post image',
  feature2ImageSrc: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf',
  feature1ImageSrc: 'https://images.unsplash.com/photo-1617606795870-bd2aa4633ebd',
  feature1ImageAlt: 'Blog post image',
  feature2Description1: undefined,
  feature1Title: undefined,
}

Bloglatest.propTypes = {
  feature3Title: PropTypes.string,
  feature3Date: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Date: PropTypes.string,
  feature2Date: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description1: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Bloglatest
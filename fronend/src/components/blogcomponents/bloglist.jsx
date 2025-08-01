import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './bloglist.css'

const Bloglist = (props) => {
  return (
    <div
      className={`bloglist-layout226 thq-section-padding ${props.rootClassName} `}
    >
      <div className="bloglist-max-width thq-section-max-width">
        <div className="bloglist-column thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="bloglist-section-title thq-flex-column">
            <span className="bloglist-over-title11 thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="bloglist-text2">
                    in Design October 25, 2023
                  </span>
                </Fragment>
              )}
            </span>
            <div className="bloglist-content thq-flex-column">
              <h3 className="bloglist-title1 thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="bloglist-text3">
                      10 Reasons why you should make a physical portfolio
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="bloglist-description1 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="bloglist-text4">
                      Use high-quality images and videos to create a visually
                      appealing experience. Visuals of happy clients can
                      significantly...
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <span className="bloglist-over-title12 thq-body-small">
              {props.feature1Slogan1 ?? (
                <Fragment>
                  <span className="bloglist-text1">Read More</span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-row bloglist-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Bloglist.defaultProps = {
  feature1Slogan1: undefined,
  feature1Slogan: undefined,
  rootClassName: '',
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1740560516724-c74858702711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1Mzg1NTQ0MHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImageAlt: 'Full-Stack Web Development Image',
  feature1Description: undefined,
}

Bloglist.propTypes = {
  feature1Slogan1: PropTypes.element,
  feature1Slogan: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default Bloglist

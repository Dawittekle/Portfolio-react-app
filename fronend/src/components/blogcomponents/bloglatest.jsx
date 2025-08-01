import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './bloglatest.css'

const Bloglatest = (props) => {
  return (
    <div className="bloglatest-layout223 thq-section-padding">
      <div className="bloglatest-max-width thq-flex-row thq-section-max-width">
        <div className="bloglatest-container thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="bloglatest-list thq-flex-column">
            <div className="thq-flex-row bloglatest-list-item1">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="bloglatest-image1 thq-team-image-round"
              />
              <div className="bloglatest-content2 thq-flex-column">
                <h3 className="bloglatest-title2 thq-heading-3">
                  {props.feature2Description1 ?? (
                    <Fragment>
                      <span className="bloglatest-text5">
                        Creating visually appealing and user-friendly interfaces
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="bloglatest-description2 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="bloglatest-text4">October 25, 2023</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-row bloglatest-list-item2">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="bloglatest-image1 thq-team-image-round"
              />
              <div className="bloglatest-content3 thq-flex-column">
                <h3 className="bloglatest-title2 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="bloglatest-text1">
                        10 Reasons why you should make a physical portfolio
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="bloglatest-description3 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="bloglatest-text2">October 25, 2023</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-row">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="bloglatest-image1 thq-team-image-round"
              />
              <div className="bloglatest-content4 thq-flex-column">
                <h3 className="bloglatest-title2 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="bloglatest-text6">
                        10 Reasons why you should make a physical portfolio
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="bloglatest-description1 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="bloglatest-text3">October 25, 2023</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-flex-row bloglatest-actions"></div>
        </div>
      </div>
    </div>
  )
}

Bloglatest.defaultProps = {
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImageAlt: 'Image showcasing AI-Integrated Solutions',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553921895-a1b5b2500a17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1Mzg2MjAxN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Description: undefined,
  feature2Description: undefined,
  feature2ImageAlt: 'Image showcasing AI-Integrated Solutions',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1Mzg2MjAxN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1617606795870-bd2aa4633ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1Mzg2MjAxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImageAlt: 'Image showcasing Full-Stack Web Development',
  feature2Description1: undefined,
  feature1Title: undefined,
}

Bloglatest.propTypes = {
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description1: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Bloglatest

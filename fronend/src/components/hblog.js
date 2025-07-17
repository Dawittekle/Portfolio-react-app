import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hblog.css'

const Hblog = (props) => {
  return (
    <div className="hblog-layout300 thq-section-padding">
      <div className="hblog-max-width thq-section-max-width">
        <div className="hblog-section-title">
          <span className="hblog-text10 thq-body-small">
            {props.slogan1 ?? (
              <Fragment>
                <span className="hblog-text33">
                  Discover the core features of our services
                </span>
              </Fragment>
            )}
          </span>
          <div className="hblog-content1">
            <h2 className="hblog-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hblog-text23">Key Features</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="hblog-content2">
          <div className="hblog-row thq-flex-row">
            <div className="hblog-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="hblog-text30">
                      in Design October 25, 2023
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="hblog-content3">
                <h3 className="hblog-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="hblog-text32">
                        10 Reasons why you should make a physical portfolio
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="hblog-feature1-description thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="hblog-text28">
                        Use high-quality images and videos to create a visually
                        appealing experience. Visuals of happy clients can
                        significantly...
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="hblog-text22">Read More →</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="hblog-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <span>
                {props.text1 ?? (
                  <Fragment>
                    <span className="hblog-text20">
                      in Design October 25, 2023
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="hblog-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="hblog-text25">
                        10 Reasons why you should make a physical portfolio
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="hblog-text24">
                        Use high-quality images and videos to create a visually
                        appealing experience. Visuals of happy clients can
                        significantly...
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span className="hblog-text15">
                {props.text4 ?? (
                  <Fragment>
                    <span className="hblog-text27">Read More →</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="hblog-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <span>
                {props.text2 ?? (
                  <Fragment>
                    <span className="hblog-text29">
                      in Design October 25, 2023
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="hblog-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="hblog-text26">
                        10 Reasons why you should make a physical portfolio
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="hblog-text21">
                        Use high-quality images and videos to create a visually
                        appealing experience. Visuals of happy clients can
                        significantly...
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.text5 ?? (
                    <Fragment>
                      <span className="hblog-text19">Read More →</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="hblog-text18">
        {props.text6 ?? (
          <Fragment>
            <span className="hblog-text31">View More</span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Hblog.defaultProps = {
  text5: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1725800066480-7ccf189e9513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjYyOTIxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImageAlt: 'AI Solutions Image',
  text1: undefined,
  feature3Description: undefined,
  text3: undefined,
  heading1: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
  feature1ImageAlt: 'Web Development Image',
  feature3Title: undefined,
  text4: undefined,
  feature1Description: undefined,
  text2: undefined,
  text: undefined,
  text6: undefined,
  feature1Title: undefined,
  slogan1: undefined,
  feature2ImageAlt: 'UI/UX Design Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjYyOTIxN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1644148297708-575df53b1dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjYyOTIxNnw&ixlib=rb-4.1.0&q=80&w=1080',
}

Hblog.propTypes = {
  text5: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  text1: PropTypes.element,
  feature3Description: PropTypes.element,
  text3: PropTypes.element,
  heading1: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  text4: PropTypes.element,
  feature1Description: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
  text6: PropTypes.element,
  feature1Title: PropTypes.element,
  slogan1: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Hblog

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './servicelists.css'

const Servicelists = (props) => {
  return (
    <div className="servicelists-layout301 thq-section-padding">
      <div className="servicelists-max-width thq-section-max-width">
        <h2 className="servicelists-text10 thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="servicelists-text15">Key Features</span>
            </Fragment>
          )}
        </h2>
        <div className="servicelists-row thq-grid-auto-300">
          <div className="servicelists-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="servicelists-content1 thq-flex-column">
              <div className="servicelists-section-title1 thq-flex-column">
                <h3 className="servicelists-title1 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="servicelists-text18">
                        Full-Stack Web Development
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="servicelists-description1 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="servicelists-text14">
                        Expertise in developing both front-end and back-end
                        components to create seamless web applications.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="servicelists-feature1">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="servicelists-content2 thq-flex-column">
              <div className="servicelists-section-title2 thq-flex-column">
                <strong className="servicelists-title2 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="servicelists-text13">UI/UX Design</span>
                    </Fragment>
                  )}
                </strong>
                <span className="servicelists-description2 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="servicelists-text17">
                        Creating visually appealing and user-friendly interfaces
                        to enhance user experience and engagement.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="servicelists-action1 thq-flex-row"></div>
            </div>
          </div>
          <div className="servicelists-feature1">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="servicelists-content3 thq-flex-column">
              <div className="servicelists-section-title3 thq-flex-column">
                <strong className="servicelists-title3 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="servicelists-text19">
                        AI-Integrated Solutions
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="servicelists-description3 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="servicelists-text16">
                        Implementing artificial intelligence technologies to
                        optimize processes and deliver intelligent solutions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="servicelists-feature1">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="servicelists-content4 thq-flex-column">
              <div className="servicelists-section-title4 thq-flex-column">
                <strong className="servicelists-title4 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="servicelists-text11">
                        Customized Projects
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="servicelists-description4 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="servicelists-text12">
                        Tailoring solutions to meet specific client needs and
                        requirements for unique and impactful results.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="servicelists-action2 thq-flex-row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Servicelists.defaultProps = {
  feature3ImageAlt: 'AI-Integrated Solutions Image Alt Text',
  feature4Title: undefined,
  feature4Description: undefined,
  feature2Title: undefined,
  feature1Description: undefined,
  feature1ImageAlt: 'Full-Stack Web Development Image Alt Text',
  sectionTitle: undefined,
  feature3Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1562931715-536816af4a8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1MTc4OXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1456615074700-1dc12aa7364d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1MTc4OXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  feature1Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1542837336-d14bdf342f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1MTc5MHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImageAlt: 'UI/UX Design Image Alt Text',
  feature4ImageAlt: 'Customized Projects Image Alt Text',
  feature3Title: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1717406038728-53b8ba62490f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1MTc4OHw&ixlib=rb-4.1.0&q=80&w=1080',
}

Servicelists.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
  feature4Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
}

export default Servicelists

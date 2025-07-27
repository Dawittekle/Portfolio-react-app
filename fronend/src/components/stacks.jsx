import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stacks.css'

const Stacks = (props) => {
  return (
    <div
      className={`stacks-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="stacks-max-width thq-section-max-width thq-grid-auto-300">
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="stacks-text10 thq-heading-2">
            {props.feature1Title ?? (
              <Fragment>
                <span className="stacks-text29">HTML5</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature2Title ?? (
              <Fragment>
                <span className="stacks-text21">Tailwind CSS</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature3ImageAlt}
            src={props.feature3ImageSrc}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature3Title ?? (
              <Fragment>
                <span className="stacks-text22">React.js</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature4ImageAlt}
            src={props.feature4ImageSrc}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature4Title ?? (
              <Fragment>
                <span className="stacks-text19">Node.js</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature4ImageAlt2}
            src={props.feature4ImageSrc2}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature4Title2 ?? (
              <Fragment>
                <span className="stacks-text24">Redux</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature4ImageAlt3}
            src={props.feature4ImageSrc3}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature4Title3 ?? (
              <Fragment>
                <span className="stacks-text25">
                  <span className="stacks-text26">MongoDB</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature4ImageAlt4}
            src={props.feature4ImageSrc4}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature4Title4 ?? (
              <Fragment>
                <span className="stacks-text20">Figma</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature4ImageAlt5}
            src={props.feature4ImageSrc5}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature4Title5 ?? (
              <Fragment>
                <span className="stacks-text23">Webflow</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stacks-container1 thq-card thq-flex-column">
          <img
            alt={props.feature4ImageAlt6}
            src={props.feature4ImageSrc6}
            className="stacks-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature4Title6 ?? (
              <Fragment>
                <span className="stacks-text28">PHP</span>
              </Fragment>
            )}
          </h2>
        </div>
      </div>
    </div>
  )
}

Stacks.defaultProps = {
  feature4Title: undefined,
  feature4Title4: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1518553634183-40a6deeae021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature4ImageAlt2: 'image',
  feature3ImageAlt: 'Image for AI-Integrated Solutions',
  feature2Title: undefined,
  feature3Title: undefined,
  feature4ImageSrc6:
    'https://images.unsplash.com/photo-1564085740588-930dd48943fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4ImageAlt3: 'image',
  feature4Title5: undefined,
  feature4ImageAlt4: 'image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1591267990439-bc68529677c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxOHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4ImageAlt6: 'image',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1564085740588-930dd48943fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4Title2: undefined,
  feature4ImageSrc2:
    'https://images.unsplash.com/photo-1564085740588-930dd48943fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4Title3: undefined,
  feature2ImageAlt: 'Image for Web UI/UX Design',
  feature4ImageAlt5: 'image',
  feature1ImageAlt: 'Image for Full-Stack Web Development',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1685355118078-5d85132173e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxOHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4ImageSrc5:
    'https://images.unsplash.com/photo-1564085740588-930dd48943fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4Title6: undefined,
  feature1Title: undefined,
  feature4ImageSrc3:
    'https://images.unsplash.com/photo-1564085740588-930dd48943fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4ImageSrc4:
    'https://images.unsplash.com/photo-1564085740588-930dd48943fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjY1NDgxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4ImageAlt: 'image',
  rootClassName: '',
}

Stacks.propTypes = {
  feature4Title: PropTypes.element,
  feature4Title4: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature4ImageAlt2: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature4ImageSrc6: PropTypes.string,
  feature4ImageAlt3: PropTypes.string,
  feature4Title5: PropTypes.element,
  feature4ImageAlt4: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature4ImageAlt6: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature4Title2: PropTypes.element,
  feature4ImageSrc2: PropTypes.string,
  feature4Title3: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature4ImageAlt5: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4ImageSrc5: PropTypes.string,
  feature4Title6: PropTypes.element,
  feature1Title: PropTypes.element,
  feature4ImageSrc3: PropTypes.string,
  feature4ImageSrc4: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Stacks

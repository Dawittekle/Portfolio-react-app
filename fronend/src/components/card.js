import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className={`card-card ${props.rootClassName} `}>
      <div className="card-info">
        <span className="card-text1">{props.text}</span>
        <span className="card-text2">{props.text1}</span>
        <div className="card-container">
          <span className="card-text3">
            {props.text3 ?? (
              <Fragment>
                <span className="card-text4">Read More →</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  text3: undefined,
  text1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
  rootClassName: '',
  text: 'Business',
}

Card.propTypes = {
  text3: PropTypes.element,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Card

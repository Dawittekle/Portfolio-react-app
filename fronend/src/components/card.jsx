import React from 'react'
import PropTypes from 'prop-types'
import './card.css'

const Card = ({ title, description, backgroundImage, link = '#', onClick }) => {
  return (
    <div
      className='card-card'
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <div className='card-info'>
        <span className='card-text1'>{title}</span>
        <span className='card-text2'>{description}</span>
        <div className='card-container'>
          <span className='card-text4'>Read More</span>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func
}

export default Card

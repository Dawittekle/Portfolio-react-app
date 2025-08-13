import React from 'react'
import { Link } from 'react-router-dom'
import scrollToElement from '../assets/scrollToElement.js'
import './hnav.css'

const Hnav = () => {
  return (
    <header className='hnav-container'>
      <header data-thq='thq-navbar' className='hnav-navbar-interactive'>
        <span>
          <span className='hnav-text16'>Dawit.</span>
        </span>
        <div data-thq='thq-navbar-nav' className='hnav-desktop-menu'>
          <nav className='hnav-links1'>
            <Link to='/' className='hnav-link11 thq-body-small thq-link'>
              <span className='hnav-text19'>_home</span>
            </Link>
            <Link to='/about' className='hnav-link21 thq-body-small thq-link'>
              <span className='hnav-text13'>_about Us</span>
            </Link>
            <Link
              to='/about#services'
              className='hnav-link31 thq-body-small thq-link'
            >
              <span className='hnav-text20'>_services</span>
            </Link>
            <Link
              to='/projects'
              className='hnav-link41 thq-body-small thq-link'
            >
              <span className='hnav-text15'>_project</span>
            </Link>
            <Link to='/blog' className='hnav-link51 thq-body-small thq-link'>
              <span className='hnav-text14'>_blog</span>
            </Link>
            <span
              onClick={() => scrollToElement('contact')}
              className='hnav-link52 thq-body-small thq-link'
            >
              <span className='hnav-text21'>_contact</span>
            </span>
          </nav>
        </div>
        <div className='hnav-buttons1'>
          <img
            alt='Menu icon'
            src='/Icons/menuicon.svg'
            className='hnav-image'
          />
        </div>
      </header>
    </header>
  )
}

export default Hnav

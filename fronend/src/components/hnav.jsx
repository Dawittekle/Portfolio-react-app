import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import scrollToElement  from '../assets/scrollToElement.js'

import './hnav.css'

const Hnav = props => {
  return (
    <header className={`hnav-container ${props.rootClassName} `}>
      <header data-thq='thq-navbar' className='hnav-navbar-interactive'>
        <span>
          {props.text ?? (
            <Fragment>
              <span className='hnav-text16'>Dawit.</span>
            </Fragment>
          )}
        </span>
        <div data-thq='thq-navbar-nav' className='hnav-desktop-menu'>
          <nav className='hnav-links1'>
            <Link to='/' className='hnav-link11 thq-body-small thq-link'>
              {props.link1 ?? (
                <Fragment>
                  <span className='hnav-text19'>_home</span>
                </Fragment>
              )}
            </Link>
            <Link to='/about' className='hnav-link21 thq-body-small thq-link'>
              {props.link2 ?? (
                <Fragment>
                  <span className='hnav-text13'>_about Us</span>
                </Fragment>
              )}
            </Link>
            <Link to='/about#services' className='hnav-link31 thq-body-small thq-link'>
              {props.link3 ?? (
                <Fragment>
                  <span className='hnav-text20'>_services</span>
                </Fragment>
              )}
            </Link>
            <Link
              to='/projects'
              className='hnav-link41 thq-body-small thq-link'
            >
              {props.link4 ?? (
                <Fragment>
                  <span className='hnav-text15'>_project</span>
                </Fragment>
              )}
            </Link>
            <Link to='/blog' className='hnav-link51 thq-body-small thq-link'>
              {props.link5 ?? (
                <Fragment>
                  <span className='hnav-text14'>_blog</span>
                </Fragment>
              )}
            </Link>
            <span  onClick={() => scrollToElement("contact")} className='hnav-link52 thq-body-small thq-link'>
              {props.link51 ?? (
                <Fragment>
                  <span className='hnav-text21'>_contact</span>
                </Fragment>
              )}
            </span>
          </nav>
        </div>
        <div className='hnav-buttons1'>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className='hnav-image'
          />
        </div>
        <div data-thq='thq-burger-menu' className='hnav-burger-menu'>
          <svg viewBox='0 0 1024 1024' className='hnav-icon10'>
            <path d='M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z'></path>
          </svg>
        </div>
        <div data-thq='thq-mobile-menu' className='hnav-mobile-menu'>
          <div className='hnav-nav'>
            <div className='hnav-top'>
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className='hnav-logo'
              />
              <div data-thq='thq-close-menu' className='hnav-close-menu'>
                <svg viewBox='0 0 1024 1024' className='hnav-icon12'>
                  <path d='M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z'></path>
                </svg>
              </div>
            </div>
            <nav className='hnav-links2'>
              <a
                href={props.link1Url}
                className='hnav-link12 thq-body-small thq-link'
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className='hnav-text19'>_home</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link2Url}
                className='hnav-link22 thq-body-small thq-link'
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className='hnav-text13'>_about Us</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                className='hnav-link32 thq-body-small thq-link'
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className='hnav-text20'>_services</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link4Url}
                className='hnav-link42 thq-body-small thq-link'
              >
                {props.link4 ?? (
                  <Fragment>
                    <span className='hnav-text15'>_project</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link5Url}
                className='hnav-link53 thq-body-small thq-link'
              >
                {props.link5 ?? (
                  <Fragment>
                    <span className='hnav-text14'>_blog</span>
                  </Fragment>
                )}
              </a>
            </nav>
            <div className='hnav-buttons2'>
              <button className='thq-button-filled'>
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className='hnav-text17'>Sign Up</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className='thq-button-outline'>
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className='hnav-text18'>Log In</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className='hnav-icon-group'>
            <svg
              viewBox='0 0 950.8571428571428 1024'
              className='thq-icon-x-small'
            >
              <path d='M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z'></path>
            </svg>
            <svg
              viewBox='0 0 877.7142857142857 1024'
              className='thq-icon-x-small'
            >
              <path d='M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z'></path>
            </svg>
            <svg
              viewBox='0 0 602.2582857142856 1024'
              className='thq-icon-x-small'
            >
              <path d='M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z'></path>
            </svg>
          </div>
        </div>
      </header>
    </header>
  )
}

Hnav.defaultProps = {
  link1Url: 'https://www.teleporthq.io',
  link2Url: 'https://www.teleporthq.io',
  link2: undefined,
  rootClassName: '',
  imageAlt: 'image',
  link5Url: 'https://www.teleporthq.io',
  link5: undefined,
  link4: undefined,
  text: undefined,
  logoAlt: 'UpStart Logo',
  imageSrc: '/Icons/menuicon.svg',
  action1: undefined,
  link4Url: 'https://www.teleporthq.io',
  action2: undefined,
  link1: undefined,
  link3: undefined,
  logoSrc: '/Icons/align-bottom-svgrepo-com.svg',
  link3Url: 'https://www.teleporthq.io',
  link51: undefined
}

Hnav.propTypes = {
  link1Url: PropTypes.string,
  link2Url: PropTypes.string,
  link2: PropTypes.element,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  link5Url: PropTypes.string,
  link5: PropTypes.element,
  link4: PropTypes.element,
  text: PropTypes.element,
  logoAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  action1: PropTypes.element,
  link4Url: PropTypes.string,
  action2: PropTypes.element,
  link1: PropTypes.element,
  link3: PropTypes.element,
  logoSrc: PropTypes.string,
  link3Url: PropTypes.string,
  link51: PropTypes.element
}

export default Hnav

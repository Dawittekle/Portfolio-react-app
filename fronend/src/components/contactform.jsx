import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contactform.css'

const Contactform = (props) => {
  return (
    <div className="contactform-contact5 thq-section-padding">
      <div className="contactform-max-width thq-section-max-width thq-flex-row">
        <div className="thq-flex-column contactform-content">
          <div className="contactform-section-title">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contactform-text20">Contact info</span>
                </Fragment>
              )}
            </h2>
            <span className="contactform-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contactform-text16">
                    Have a project idea, looking to collaborate, or need a
                    developer, designer, or someone to explore interesting tech
                    with?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="contactform-contact-info thq-flex-column">
            <div className="contactform-row1 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="thq-body-small">
                {props.email ?? (
                  <Fragment>
                    <span className="contactform-text17">
                      teklebrhandawit309@gmail.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contactform-row2 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="thq-body-small">
                {props.phone ?? (
                  <Fragment>
                    <span className="contactform-text19">+251902468877</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contactform-row3 thq-flex-row"></div>
          </div>
        </div>
        <form className="contactform-form">
          <div className="contactform-input1">
            <label
              htmlFor="contact-form-2-name"
              className="contactform-text12 thq-body-small"
            >
              Name
            </label>
            <input
              type="text"
              id="contact-form-2-name"
              placeholder="Name"
              className="contactform-text-input1 thq-input"
            />
          </div>
          <div className="contactform-input2">
            <label
              htmlFor="contact-form-2-email"
              className="contactform-text13 thq-body-small"
            >
              Email
            </label>
            <input
              type="email"
              id="contact-form-2-email"
              required="true"
              placeholder="Email"
              className="contactform-text-input2 thq-input"
            />
          </div>
          <div className="contactform-input3">
            <label
              htmlFor="contact-form-2-message"
              className="contactform-text14 thq-body-small"
            >
              Message
            </label>
            <textarea
              id="contact-form-2-message"
              rows="3"
              placeholder="Enter your message"
              className="contactform-textarea thq-input"
            ></textarea>
          </div>
          <div className="contactform-checkbox1">
            <input
              type="checkbox"
              id="contact-form-2-check"
              checked="true"
              className="thq-checkbox"
            />
            <label
              htmlFor="contact-form-2-check"
              className="contactform-text15 thq-body-small"
            >
              I accept the Terms
            </label>
          </div>
          <button type="submit" className="thq-button-filled">
            <span className="contactform-action1 thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contactform-text18">Send</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

Contactform.defaultProps = {
  content1: undefined,
  email: undefined,
  action: undefined,
  phone: undefined,
  heading1: undefined,
}

Contactform.propTypes = {
  content1: PropTypes.element,
  email: PropTypes.element,
  action: PropTypes.element,
  phone: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contactform

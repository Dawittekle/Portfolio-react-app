import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hnav from '../components/hnav'
import Card from '../components/card'
import Hfooter from '../components/hfooter'
import './projects.css'

const Projects = (props) => {
  return (
    <div className="projects-container">
      <Helmet>
        <title>Projects - Dawit Teklebrhan</title>
        <meta property="og:title" content="Projects - Up Start Finance" />
      </Helmet>
      <Hnav
        text={
          <Fragment>
            <span className="projects-text10">Dawit.</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="projects-text11">_home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="projects-text12">_about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="projects-text13">_services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="projects-text14">_projects</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="projects-text15">_blog</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="projects-text16">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="projects-text17">Log In</span>
          </Fragment>
        }
        rootClassName="hnavroot-class-name2"
        link51={
          <Fragment>
            <span className="projects-text18">_contact</span>
          </Fragment>
        }
      ></Hnav>
      <div className="projects-section section-container">
        <div className="projects-max-width max-width">
          <h1 className="projects-text19">Projects</h1>
          <div className="projects-cards-container">
            <Card
              text="PlayJS"
              text1='"Tiny games. Big fun. All in JavaScript!"'
              text3={
                <Fragment>
                  <span className="projects-text20">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name3"
            ></Card>
            <Card
              text="Kulli"
              text1="Webapp connects truck owners with people(that want to move items between places like household items...)."
              text3={
                <Fragment>
                  <span className="projects-text21">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name4"
            ></Card>
            <Card
              text="VenueLink"
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className="projects-text22">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name5"
            ></Card>
            <Card
              text="VenueLink"
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className="projects-text23">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name6"
            ></Card>
            <Card
              text="VenueLink"
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className="projects-text24">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name7"
            ></Card>
            <Card
              text="VenueLink"
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className="projects-text25">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name8"
            ></Card>
            <Card
              text="VenueLink"
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className="projects-text26">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name9"
            ></Card>
            <Card
              text="VenueLink"
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className="projects-text27">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name10"
            ></Card>
            <Card
              text="VenueLink"
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className="projects-text28">Read More →</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name11"
            ></Card>
          </div>
        </div>
      </div>
      <Hfooter
        email={
          <Fragment>
            <span className="projects-text29">
              teklebrhandawit309@gmail.com
            </span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="projects-text30">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="projects-text31">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="projects-text32">Projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="projects-text33">Blog</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="projects-text34">Contact</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="projects-text35">+251902468877</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="projects-text36">Subscribe</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="projects-text37">
              Stay updated with our latest news and offerings.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="projects-text38">
              ©2023 Dawit Teklebrhan. All rights reserved.
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="projects-text39">Contact me</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="projects-text40">
              <span>Privacy &amp; Terms.</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="projects-text44">Pages</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="projects-text45">Address</span>
          </Fragment>
        }
        rootClassName="hfooterroot-class-name2"
        socialLinkTitleCategory={
          <Fragment>
            <span className="projects-text46">Follow Me</span>
          </Fragment>
        }
      ></Hfooter>
    </div>
  )
}

export default Projects

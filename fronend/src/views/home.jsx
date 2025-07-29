import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hnav from '../components/hnav'
import Card from '../components/card'
import Hblog from '../components/hblog'
import Hfooter from '../components/hfooter'

import './home.css'

const Home = (props) => {
  
  return (
    <div className="home-container1">
      <Helmet>
        <title>Dawit Teklebrhan</title>
        <meta property="og:title" content="Up Start Finance" />
      </Helmet>
      <Hnav
        text={
          <Fragment>
            <span className="home-text10">Dawit.</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text11">_home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">_about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text13">_services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text14">_projects</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text15">_blog</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text16">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text17">Log In</span>
          </Fragment>
        }
        rootClassName="hnavroot-class-name"
        link51={
          <Fragment>
            <span className="home-text18">_contact</span>
          </Fragment>
        }
      ></Hnav>
      <div className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content1">
            <span className="home-subtitle">Always Curious</span>
            <h1 className="home-title1">Ideas Before  Aesthetics</h1>
            <span className="home-description">
              <span className="home-text19">Dawit Teklebrhan, </span>
              <span>
                a Full-Stack Developer and CS student with a passion for clean
                design, smart code, and exploring AI. I build user-friendly web
                apps from front to back, often blending development with UI/UX
                design.
              </span>
            </span>
            <div className="home-container2">
              <a href="/about"> <span className="home-text21">Read More</span></a>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/myphotos/green-600w.jpg"
              className="home-hero-image"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-content2">
            <span className="home-text22">Services</span>
            <h1 className="home-text23">
              What I bring to the table (besides coffee and code).
            </h1>
            <span className="home-text24">
              I love turning ideas into smart, functional, and beautiful digital
              experiences — from full-stack apps to clean UI and a touch of AI.
              Here’s what I do:
            </span>
            <div className="home-container3">
              <a href="/about#services"><span className="home-text25">Read More</span></a>
            </div>
          </div>
          <div className="home-image2">
            <div className="home-content3">
              <div className="home-step1">
                <div className="home-number1">
                  <span className="home-text26">1</span>
                </div>
                <div className="home-container4">
                  <span className="home-title2">
                    Full-Stack Web Development
                  </span>
                  <span className="home-text27">
                    I bring ideas to life — from pixel-perfect frontends to
                    powerful backends.
                  </span>
                </div>
              </div>
              <div className="home-step2">
                <div className="home-number1">
                  <span className="home-text26">2</span>
                </div>
                <div className="home-container5">
                  <span className="home-title3">Web UI/UX Design</span>
                  <span className="home-text29">
                    I don’t just make things work — I make them feel right. With
                    Figma in hand and a love for clean interfaces, I design
                    experiences that are as smooth as they are beautiful.
                  </span>
                </div>
              </div>
              <div className="home-step3">
                <div className="home-number1">
                  <span className="home-text26">3</span>
                </div>
                <div className="home-container6">
                  <span className="home-title4">AI-Integrated Solutions</span>
                  <span className="home-text31">
                    Lately, I’ve been exploring the brains behind the apps —
                    adding a touch of AI to make things smarter, faster, and a
                    bit more magical.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width3 max-width">
          <span className="home-text32">Projects</span>
          <h1 className="home-text33">
            Things I’ve Built (That I’m Kinda Proud Of)
          </h1>
          <div className="home-cards-container">
            <Card
              text="PlayJS"
              text1='"Tiny games. Big fun. All in JavaScript!"'
              text3={
                <Fragment>
                  <span className="home-text34">Read More</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name"
            ></Card>
            <Card
              text="Kulli"
              text1="Webapp connects truck owners with people(that want to move items between places like household items...)."
              text3={
                <Fragment>
                  <span className="home-text34">Read More</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name2"
            ></Card>
            <Card
              text="VenueLink"
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className="home-text34">Read More</span>
                </Fragment>
              }
              rootClassName="cardroot-class-name1"
            ></Card>
          </div>
        </div>
        <div className="home-container7">
          <a href="/projects"><span className="home-text37">View All Projects</span></a>
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-max-width4 max-width">
          <Hblog
            text={
              <Fragment>
                <span className="home-text38">in Design October 25, 2023</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text39">in Design October 25, 2023</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-text40">in Design October 25, 2023</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home-text41">Read More</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home-text41">Read More</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="home-text41">Read More</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <a href="/blog"><span className="home-text41">View More</span></a>  
              </Fragment>
            }
            slogan1={
              <Fragment>
                <span className="home-text45">Blog Post</span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="home-text46">My Latest Articles</span>
              </Fragment>
            }
            feature1Title={
              <Fragment>
                <span className="home-text47">
                  10 Reasons why you should make a physical portfolio
                </span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text47">
                  10 Reasons why you should make a physical portfolio
                </span>
              </Fragment>
            }
            feature3Title={
              <Fragment>
                <span className="home-text47">
                  10 Reasons why you should make a physical portfolio
                </span>
              </Fragment>
            }
            feature1Description={
              <Fragment>
                <span className="home-text50">
                  Use high-quality images and videos to create a visually
                  appealing experience. Visuals of happy clients can
                  significantly...
                </span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="home-text51">
                  Use high-quality images and videos to create a visually
                  appealing experience. Visuals of happy clients can
                  significantly...
                </span>
              </Fragment>
            }
            feature3Description={
              <Fragment>
                <span className="home-text52">
                  Use high-quality images and videos to create a visually
                  appealing experience. Visuals of happy clients can
                  significantly...
                </span>
              </Fragment>
            }
          ></Hblog>
        </div>
      </div>
      <Hfooter
        email={
          <Fragment>
            <span className="home-text53">Email</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text54">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text54">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text54">Projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text54">Blog</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text54">Contact</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="home-text59">+251902468877</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text60">Subscribe</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text61">
              Stay updated with our latest news and offerings.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text62">
              ©2023 Dawit Teklebrhan. All rights reserved.
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text63">Contact me</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text64">
              <span>Privacy &amp; Terms.</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="home-text68">Pages</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="home-text69">Address</span>
          </Fragment>
        }
        rootClassName="hfooterroot-class-name"
        socialLinkTitleCategory={
          <Fragment>
            <span className="home-text70">Follow Me</span>
          </Fragment>
        }
      ></Hfooter>
    </div>
  )
}

export default Home

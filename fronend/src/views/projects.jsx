import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hnav from '../components/hnav'
import Card from '../components/card'
import Hfooter from '../components/hfooter'
import './projects.css'

const Projects = props => {
  return (
    <div className='projects-container'>
      <Helmet>
        <title>Projects - Dawit Teklebrhan</title>
        <meta property='og:title' content='Projects - Dawit Teklebrhan' />
      </Helmet>
      <Hnav />
      <div className='projects-section section-container'>
        <div className='projects-max-width max-width'>
          <h1 className='projects-text19'>Projects</h1>
          <div className='projects-cards-container'>
            <Card
              text='PlayJS'
              text1='"Tiny games. Big fun. All in JavaScript!"'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name3'
            ></Card>
            <Card
              text='Kulli'
              text1='Webapp connects truck owners with people(that want to move items between places like household items...).'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name4'
            ></Card>
            <Card
              text='VenueLink'
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name5'
            ></Card>
            <Card
              text='VenueLink'
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name6'
            ></Card>
            <Card
              text='VenueLink'
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name7'
            ></Card>
            <Card
              text='VenueLink'
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name8'
            ></Card>
            <Card
              text='VenueLink'
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name9'
            ></Card>
            <Card
              text='VenueLink'
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name10'
            ></Card>
            <Card
              text='VenueLink'
              text1='"Find or list the perfect place for any event!"'
              text3={
                <Fragment>
                  <span className='projects-text20'>Read More</span>
                </Fragment>
              }
              rootClassName='cardroot-class-name11'
            ></Card>
          </div>
          <span className='view-more'>View more</span>
        </div>
      </div>
      <Hfooter />
    </div>
  )
}

export default Projects

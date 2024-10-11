import React, { useEffect, useState } from 'react'
import HeroScreen from './HeroScreen'
import { GoArrowUpRight } from 'react-icons/go'
import CountUp from 'react-countup'

import ScrollTrigger from 'react-scroll-trigger'
import HomeChoose from '../pages/HomeChoose'
import HomeProvider from '../pages/HomeProvider'
import HomeProjects from '../pages/HomeProjects'
import HomeTeam from '../pages/HomeTeam'
import Partners from '../pages/Parteners'
const AboutScreen = () => {
 const [count, setCount] = useState(false)

 useEffect(() => {
   const loadingTimer = setTimeout(() => {
     setCount(true)
   }, 2000)

   return () => {
     clearTimeout(loadingTimer)
   }
 }, [])
 useEffect(() => {
   window.scroll({
     top: 0,
     behavior: 'smooth',
   })
 }, [])
  return (
    <div className='about'>
      <HeroScreen
        title='Welcome to Africa Build'
        imageUrl='https://images.pexels.com/photos/28879436/pexels-photo-28879436/free-photo-of-lush-greenhouse-architecture-with-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600'
        homeLink='/'
        aboutLink='/about'
      />
      <div className='about-details section-center'>
        <div className='about-container'>
          <article className='home-content'>
            <div className='title-home'>
              <h2>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
                  alt=''
                />
              </h2>
              <h3>about us</h3>
            </div>
            <h3>We building everything Tthat you needed</h3>
            <p>
              We craft unique digital experiences. With more than 7 years of
              expertise we design and code clean websites.
            </p>
            <p>
              <span>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/about-checklsit-icon1-1.svg'
                  alt=''
                />
              </span>
              Providing Solutions For Construction, Management
            </p>
            <p>
              <span>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/about-checklsit-icon1-1.svg'
                  alt=''
                />
              </span>
              Providing Solutions For Construction, Management
            </p>
            <div className='home-mission'>
              <div>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/about-grid-icon1-1.svg'
                  alt=''
                />
              </div>
              <div>
                <h3>Our Mission</h3>
                <p>
                  We craft unique digital experiences. With more years of
                  expertise we design
                </p>
              </div>
            </div>
            <div className='home-mission'>
              <div>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/about-grid-icon1-2.svg'
                  alt=''
                />
              </div>
              <div>
                <h3> Our Vision</h3>
                <p>
                  We craft unique digital experiences. With more years of
                  expertise we design
                </p>
              </div>
            </div>
            <button className='btn'>
              explore our company <GoArrowUpRight />
            </button>
          </article>
          <article className='about-second'>
            <img
              src='https://html.favdevs.com/construz/demo/assets/img/normal/about_2-1.png'
              alt=''
              className='about-big-img'
            />
            <div className='about-bg'></div>
            <div className='about-second-bg'>
              <img
                src='https://html.favdevs.com/construz/demo/assets/img/hero/hero_experience_wrap_icon_1_1.png'
                alt=''
              />
              <div>
                <ScrollTrigger
                  onEnter={() => setCount(true)}
                  onExit={() => setCount(false)}
                >
                  <article className='about-progress-bar'>
                    <h3>
                      {count && (
                        <CountUp start={0} end={40} duration={2} delay={0} />
                      )}
                      +
                    </h3>
                    <span>Business Experience</span>
                  </article>
                </ScrollTrigger>
              </div>
            </div>
          </article>
        </div>
        <HomeChoose />
      </div>
      <HomeProvider />
      <HomeProjects />
      <HomeTeam/>
      <Partners/>
    </div>
  )
}

export default AboutScreen

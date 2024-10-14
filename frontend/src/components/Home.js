import React, { useEffect } from 'react'
import HomeServices from '../pages/HomeServices'
import HomeChoose from '../pages/HomeChoose'
import HomeProvider from '../pages/HomeProvider'
import HomeProjects from '../pages/HomeProjects'
import HomeHappyCustomer from '../pages/HomeHappyCustomer'
import HomeTeam from '../pages/HomeTeam'
import Partners from '../pages/Parteners'
import HomeBlog from '../pages/HomeBlog'
import Hero from './Hero'
import TopHero from './TopHero'
import { GoArrowUpRight } from 'react-icons/go'

const Home = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <div className='home-page'>
      <Hero />
      <div className='about-home section-center'>
        <TopHero />
        
      </div>
      <HomeServices />
      <HomeChoose />
      <HomeProvider />
      <HomeProjects />
      <HomeHappyCustomer />
      <HomeTeam />
      <Partners />
      <HomeBlog />
    </div>
  )
}

export default Home

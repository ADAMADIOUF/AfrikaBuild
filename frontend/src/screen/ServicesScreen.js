import React from 'react'
import HeroScreen from './HeroScreen'

const ServicesScreen = () => {
  return (
    <div className='services'>
      <HeroScreen
        title='Welcome to Africa Build'
        imageUrl='https://images.pexels.com/photos/28879436/pexels-photo-28879436/free-photo-of-lush-greenhouse-architecture-with-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600'
        homeLink='/'
        servicesLink='/services'
      />
    </div>
  )
}

export default ServicesScreen

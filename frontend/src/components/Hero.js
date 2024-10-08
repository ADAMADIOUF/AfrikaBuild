import React from 'react'
import SliderHero from './SliderHero'
import HeroLines from './HeroLines'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <SliderHero />

        <div className='overlay'></div>
      </div>
      <HeroLines/>
    </>
  )
}

export default Hero

import React from 'react'
import SliderHero from './SliderHero'

const Hero = () => {
  return (
    <div className='hero'>
      <SliderHero />
      {/* Overlay */}
      <div className='overlay'></div>
    </div>
  )
}

export default Hero

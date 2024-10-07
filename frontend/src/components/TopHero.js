import React from 'react'
import hero from '../assets/tophero.png'
import hero2 from '../assets/hero.png'
import { FaHSquare } from 'react-icons/fa'

const TopHero = () => {
  return (
    <div className='top-hero section-center'>
      <div className='img-top-hero'>
        <img src={hero} alt='' />
      </div>
      <div className='top-second-img'>
        <img src={hero2} alt='' />
        <div className='overlay'></div>
        <div className='shape top-left'></div>
        <div className='shape bottom-right'></div>
        <h2 className='hero-title'>
          <FaHSquare className='hero-icon' /> {/* Adjust icon size with CSS */}
          Your Title Here
        </h2>
      </div>
    </div>
  )
}

export default TopHero

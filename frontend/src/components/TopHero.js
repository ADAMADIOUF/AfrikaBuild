import React from 'react'
import hero from '../assets/tophero.png'
import hero2 from '../assets/top1.png'
import { FaHSquare } from 'react-icons/fa'
import top from "../assets/top.png"
const TopHero = () => {
  return (
    <div className='top-hero section-center'>
      <div className='img-top-hero'>
        <img src={hero} alt='' />
      </div>
      <div className='top-second'>
        <img src={hero2} alt='' className='top-second-img' />
        <div className='overlay'></div>
        <div className='shape top-left'></div>
        <div className='shape bottom-right'></div>
        <div className='top'>
         
          <img src={top} alt='' className='top-img' />
        </div>
        <h2 className='hero-title'>
          <FaHSquare className='hero-icon' />
          Let’s work together
        </h2>
      </div>
    </div>
  )
}

export default TopHero

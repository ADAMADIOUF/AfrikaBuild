import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const AnimatedLines = () => {
  useEffect(() => {
    const lines = gsap.utils.toArray('.line') // Select all lines
    gsap.to(lines, {
      x: '100vw', // Move lines from left to right
      repeat: -1, // Repeat infinitely
      stagger: {
        amount: 0.5, // Time between each line's animation start
        from: 'start', // Start from the first line
      },
      duration: 3, // Duration of the animation for each line
      ease: 'power1.inOut', // Smooth easing
    })
  }, [])

  return (
    <div className='line-container'>
      {Array.from({ length: 20 }).map((_, i) => (
        <div className='line' key={i}></div> // Generate multiple lines
      ))}
    </div>
  )
}

export default AnimatedLines

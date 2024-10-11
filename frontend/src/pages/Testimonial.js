import React, { useState, useEffect } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { GoArrowUpRight, GoArrowUpLeft } from 'react-icons/go'
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "This is the best service I've ever used! Highly recommended.",
      author: 'John Doe',
      image:
        'https://html.favdevs.com/construz/demo/assets/img/testimonial/testi_1_2.png', // Update with your image path
    },
    {
      id: 2,
      text: 'Amazing experience! Will definitely come back for more.',
      author: 'Jane Smith',
      image:
        'https://html.favdevs.com/construz/demo/assets/img/testimonial/testi_1_1.png', // Update with your image path
    },
    {
      id: 3,
      text: 'A fantastic company that truly cares about its customers.',
      author: 'Michael Johnson',
      image:
        'https://html.favdevs.com/construz/demo/assets/img/testimonial/testi_1_1.png', // Update with your image path
    },
    {
      id: 4,
      text: "Great value for money. I'm very satisfied with my purchase.",
      author: 'Emily Davis',
      image:
        'https://html.favdevs.com/construz/demo/assets/img/testimonial/testi_1_1.png', // Update with your image path
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change testimonial every 3 seconds

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [testimonials.length])

  // Next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='testimonial-container'>
      <div className='testimonial-content'>
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
        <p className='testimonial-text'>{testimonials[currentIndex].text}</p>

        <div className='testimonial-author'>
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].author}
            className='testimonial-image'
          />
          <p>{testimonials[currentIndex].author}</p>
        </div>
      </div>
      <div className='testimonial-buttons'>
        <button onClick={handlePrev} className='testimonial-button'>
          <GoArrowUpLeft />
        </button>
        <button onClick={handleNext} className='testimonial-button'>
          <GoArrowUpRight />
        </button>
      </div>
    </div>
  )
}

export default Testimonial

import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    img: 'https://via.placeholder.com/80',
    
    name: 'John Doe',
  },
  {
    img: 'https://via.placeholder.com/80',
    
    name: 'Jane Smith',
  },
  {
    img: 'https://via.placeholder.com/80',
    
    name: 'Michael Lee',
  },
  {
    img: 'https://via.placeholder.com/80',
    
    name: 'Anna Davis',
  },
  {
    img: 'https://via.placeholder.com/80',
    
    name: 'Mark Wilson',
  },
  {
    img: 'https://via.placeholder.com/80',
    
    name: 'Emily Rose',
  },
]

function Partenairs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = window.innerWidth > 768 ? 5 : 1 // Display 3 items on large screens, 1 on mobile
  const totalSlides = testimonials.length - testimonialsPerPage

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < totalSlides ? prevIndex + 1 : 0
      )
    }, 3000) // Autoplay every 3 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className='partenairs-container section-center'>
      <div
        className='partenair-slider'
        style={{
          transform: `translateX(-${
            currentIndex * (100 / testimonialsPerPage)
          }%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className={`partenair-item ${
              index === currentIndex ? 'active' : ''
            }`}
            key={index}
            style={{ flex: `0 0 ${100 / testimonialsPerPage}%` }}
          >
            <img
              src={testimonial.img}
              alt={`Client ${index + 1}`}
              className='partenair-image'
            />
            <div className='partenair-info'>
              
             
             
              <p className='partenair-name'>{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Partenairs

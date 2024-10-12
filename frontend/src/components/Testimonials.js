import React, { useState, useEffect } from 'react'


const testimonials = [
  {
    img: 'https://via.placeholder.com/80',
    title: 'Great Service!',
    rating: 5,
    description:
      "The team was amazing, and I couldn't be happier with the results.",
    name: 'John Doe',
  },
  {
    img: 'https://via.placeholder.com/80',
    title: 'Highly Recommend!',
    rating: 5,
    description: 'Excellent communication and a fantastic outcome.',
    name: 'Jane Smith',
  },
  {
    img: 'https://via.placeholder.com/80',
    title: 'Outstanding Support!',
    rating: 4,
    description: 'Very responsive team, and the work was top-notch.',
    name: 'Michael Lee',
  },
  {
    img: 'https://via.placeholder.com/80',
    title: 'Excellent Product!',
    rating: 5,
    description: 'The product exceeded my expectations, would recommend!',
    name: 'Anna Davis',
  },
  {
    img: 'https://via.placeholder.com/80',
    title: 'Awesome Team!',
    rating: 5,
    description: 'Very professional and easy to work with.',
    name: 'Mark Wilson',
  },
  {
    img: 'https://via.placeholder.com/80',
    title: 'Amazing Experience!',
    rating: 5,
    description: 'Would love to work with them again!',
    name: 'Emily Rose',
  },
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = window.innerWidth > 768 ? 3 : 1 // Display 3 items on large screens, 1 on mobile
  const totalSlides = testimonials.length - testimonialsPerPage

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < totalSlides ? prevIndex + 1 : 0
      )
    }, 3000) // Autoplay every 3 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='testimonial-container'>
      <div
        className='testimonial-slider'
        style={{
          transform: `translateX(-${
            currentIndex * (100 / testimonialsPerPage)
          }%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial-item ${
              index === currentIndex ? 'active' : ''
            }`}
            key={index}
            style={{ flex: `0 0 ${100 / testimonialsPerPage}%` }}
          >
            <img
              src={testimonial.img}
              alt={`Client ${index + 1}`}
              className='client-image'
            />
            <div className='testimonial-info'>
              <h3 className='testimonial-title'>{testimonial.title}</h3>
              <div className='rating'>{'⭐'.repeat(testimonial.rating)}</div>
              <p className='testimonial-description'>
                {testimonial.description}
              </p>
              <p className='client-name'>{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='dots-container'>
        {[...Array(totalSlides + 1)].map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Testimonials

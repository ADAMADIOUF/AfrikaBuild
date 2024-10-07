import React, { useState } from 'react'

const SliderHero = () => {
  const slides = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/236x/ba/22/ec/ba22ec0b3b96700849534e692a2d50c1.jpg',
      text: 'Welcome to Africa Build',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/236x/14/2c/fa/142cfa3baf7a7ff342e9f8b13f1797d9.jpg',
      text: 'Quality Construction Services',
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/236x/40/84/e1/4084e1f99c66e56a2d1260d60b1ab76d.jpg',
      text: 'Building Your Dreams',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className='slider-container'>
        <div className='slide' key={slides[currentIndex].id}>
          <div className='text'>
            <h3>{slides[currentIndex].text}</h3>
          </div>
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <button className='prev slider-btn' onClick={prevSlide}>
          &#10094; {/* Left Arrow */}
        </button>
        <button className='next slider-btn' onClick={nextSlide}>
          &#10095; {/* Right Arrow */}
        </button>
        <div className='indicators'>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default SliderHero

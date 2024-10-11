import React, { useState, useEffect } from 'react'

const partnersData = [
  {
    id: 1,
    name: 'Partner One',
    img: 'https://html.favdevs.com/construz/demo/assets/img/client/client-1-5.svg',
  },
  {
    id: 2,
    name: 'Partner Two',
    img: 'https://html.favdevs.com/construz/demo/assets/img/client/client-1-3.svg',
  },
  {
    id: 3,
    name: 'Partner Three',
    img: 'https://html.favdevs.com/construz/demo/assets/img/client/client-1-4.svg',
  },
  {
    id: 4,
    name: 'Partner Four',
    img: 'https://html.favdevs.com/construz/demo/assets/img/client/client-1-1.svg',
  },
  {
    id: 5,
    name: 'Partner Five',
    img: 'https://html.favdevs.com/construz/demo/assets/img/client/client-1-3.svg',
  },
  {
    id: 6,
    name: 'Partner Six',
    img: 'https://html.favdevs.com/construz/demo/assets/img/client/client-1-5.svg',
  },
  
]

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatic slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partnersData.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [partnersData.length])

  // Function to display five partners at a time
  const getVisiblePartners = () => {
    const endIndex = currentIndex + 5
    return partnersData
      .slice(currentIndex, endIndex)
      .concat(
        partnersData.slice(0, Math.max(0, endIndex - partnersData.length))
      )
  }

  return (
    <div className='partners '>
      <div className='overlay' />
      <div className='title-home title-home-partners'>
        <h2>
          <img
            src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
            alt='icon'
          />
        </h2>
        <h3>Happy Partners</h3>
      </div>
      <h3>Our Trusted Partners</h3>

      <div className='partners-slider section-center'>
        <div className='partner-container'>
          {getVisiblePartners().map((partner) => (
            <div className='partner-item' key={partner.id}>
              <img
                src={partner.img}
                alt={partner.name}
                className='partner-image'
              />
              <h4>{partner.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners

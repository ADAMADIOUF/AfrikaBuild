import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeroScreen = ({
  title,
  imageUrl,
  homeLink,
  aboutLink,
  servicesLink,
  contactLink,
}) => {
  return (
    <div
      className='hero-screen'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='hero-content'>
        <h1>{title}</h1>
      </div>
      <div className='hero-links'>
        <Link to={homeLink} className='hero-link'>
          Home
        </Link>
        {/* Conditionally render About, Services, or Contact link */}
        {aboutLink && (
          <Link to={aboutLink} className='hero-link'>
            About Us
          </Link>
        )}
        {servicesLink && (
          <Link to={servicesLink} className='hero-link'>
            Services
          </Link>
        )}
        {contactLink && (
          <Link to={contactLink} className='hero-link'>
            Contact
          </Link>
        )}
      </div>
    </div>
  )
}

// Define prop types for better type checking
HeroScreen.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  homeLink: PropTypes.string.isRequired,
  aboutLink: PropTypes.string,
  servicesLink: PropTypes.string,
  contactLink: PropTypes.string,
}

export default HeroScreen

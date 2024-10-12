import React, { useState } from 'react'
import { FaBars, FaPhone, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleNavbar = () => {
    setOpen(!open)
  }

  const handleLinkClick = () => {
    setOpen(false) // Close the navbar
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to the top
    handleLinkClick() // Close the mobile menu
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to={`/`} onClick={scrollToTop}>
              <h3> 🌍 Africa Build</h3>
            </Link>
          </div>
          <div className='menu'>
            <button onClick={toggleNavbar} className='btn-nav'>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <ul className={`nav-links ${open ? 'show' : ''}`}>
          <li>
            <Link to={`/`} onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`/about`} onClick={scrollToTop}>
              About
            </Link>
          </li>
          <li>
            <Link to={`/services`} onClick={scrollToTop}>
              Services
            </Link>
          </li>

          <li>
            <Link to={`/contact`} onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
        <div className='nav-contact'>
          <div>
            <button>
              <FaPhone />
            </button>
          </div>
          <div>
            <p>
              <span>Call us any time</span>
            </p>
            <h3>+221 778581776</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

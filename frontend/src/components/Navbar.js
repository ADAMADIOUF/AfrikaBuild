import React, { useState } from 'react'
import { FaBars, FaPhone, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleNavbar = () => {
    setOpen(!open) 
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <h3> 🇸🇳 Africa Build</h3>
          </div>
          <div className='menu'>
            <button onClick={toggleNavbar} className='btn-nav'>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <ul className={`nav-links ${open ? 'show' : ''}`}>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Services</a>
          </li>
          <li>
            <a href=''>Projects</a>
          </li>
          <li>
            <a href=''>Contact</a>
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
              <span>call us any time</span>
            </p>
            <h3>+221 778581776</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

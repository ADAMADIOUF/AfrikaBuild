import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content section-center'>
        <div className='footer-first-container'>
          <article>
            <div className='logo'>
              <h3> 🌍 Africa Build</h3>
            </div>
          </article>
          <article className='footer-subscribe'>
            <p>
              Subscribe for the latest news. Stay updated on the latest trends.
            </p>
          </article>
          <article>
            <div className='footer-contact'>
              <form>
                <input type='text' placeholder='enter your email...' />
                <button className='btn btn-footer'>
                  subscribe <GoArrowUpRight />{' '}
                </button>
              </form>
            </div>
          </article>
        </div>
        <hr className='hr-footer' />
        <div className='footer-second-container'>
          <article className='first-footer'>
            <h3>about company</h3>
            <p>
              A small business can be better than a big business because of
              agility and adaptability due to their size and scale.
            </p>
            <h2>Since 2000</h2>
            <div className='avialable-footer'>
              <h3>WE ARE AVAILABLE</h3>
              <p>
                <span>Mon-Sat</span>10:00am to 07:pm
              </p>
            </div>
          </article>
          <article className='second-footer'>
            <h3>Useful Links</h3>
            <div className='footer-links'>
              <ul>
                <li>
                  <span className='icon'>
                    <GoArrowUpRight />
                  </span>
                  About Us
                </li>
                <li>
                  <span className='icon'>
                    <GoArrowUpRight />
                  </span>
                  What We Do
                </li>
                <li>
                  <span className='icon'>
                    <GoArrowUpRight />
                  </span>
                  News & Article
                </li>
                <li>
                  <span className='icon'>
                    <GoArrowUpRight />
                  </span>
                  Success Story
                </li>
                <li>
                  <span className='icon'>
                    <GoArrowUpRight />
                  </span>
                  FAQ’s
                </li>
              </ul>
            </div>
          </article>

          <article className='third-footer second-footer'>
            <ul class='footer-links'>
              <li>
                <span className='icon'>
                  <GoArrowUpRight />
                </span>
                Our Team
              </li>
              <li>
                <span className='icon'>
                  <GoArrowUpRight />
                </span>
                Careers
              </li>
              <li>
                <span className='icon'>
                  <GoArrowUpRight />
                </span>
                Testimonials
              </li>
              <li>
                <span className='icon'>
                  <GoArrowUpRight />
                </span>
                Privacy Policy
              </li>
              <li>
                <span className='icon'>
                  <GoArrowUpRight />
                </span>
                Terms of Use
              </li>
            </ul>
          </article>
          <article class='four-footer'>
            <h3>Office Address</h3>
            <p>Losangle, Street Road 24, New York, USA - 67452</p>

            <h3>Email Address</h3>
            <p>Get in Touch!</p>
            <p>
              <a href='mailto:support@gmail.com'>support@gmail.com</a>
            </p>
          </article>
          <article className='five-footer'>
            <h3>Phone Number</h3>
            <p>+121 551 579 266</p>
            <p>+85 155 596 1658</p>

            <h3>Follow Us</h3>
            <div className='social-icons'>
              <a href='#' className='social-icon'>
                <FaFacebook />
              </a>
              <a href='#' className='social-icon'>
                <FaTwitter />
              </a>
              <a href='#' className='social-icon'>
                <FaInstagram />
              </a>
              <a href='#' className='social-icon'>
                <FaLinkedin />
              </a>
            </div>
          </article>
        </div>
        <hr className='hr-footer' />
        <div className='last-footer'>
          <article className='six-footer'>
            <p>© 2024 Construz | All rights reserved</p>
            <ul className='footer-links'>
              <li> Terms & Condition</li>

              <li> Privacy Policy</li>
              <li> Contact Us</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Footer

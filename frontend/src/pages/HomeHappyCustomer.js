import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Testimonial from './Testimonial'
import happy from "../assets/happy.png"
const HomeHappyCustomer = () => {
  return (
    <div className='home-happy-customer'>
      <div className='home-happy-customer-container section-center'>
        <article className='home-happy-customer-first-content'>
          <div className='happy-customer-text'>
            <h3>Have you any questions?</h3>
            <p>
              Podcasting operational change management inside of making this the
              first true generator.
            </p>
            <button className='btn'>
              contact with us <MdOutlineArrowOutward />
            </button>
          </div>
          
          <img
            src={happy}
            alt=''
          />
        </article>
        <article>
          <div className='title-home'>
            <h2>
              <img
                src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
                alt=''
              />
            </h2>
            <h3>Testimonials</h3>
          </div>
          <h3>Our happy customers</h3>
          <Testimonial />
        </article>
      </div>
    </div>
  )
}

export default HomeHappyCustomer

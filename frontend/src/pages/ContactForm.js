import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import contact from '../assets/contact.png'

const ContactForm = () => {
  return (
    <div className='contact-form section-center'>
      <div className='contact-form-container'>
        <article className='contact-form-img'>
          <img src={contact} alt='Contact Us' />
        </article>
        <article className='contact-form'>
          <h2>
            Get Free Quote <GoArrowUpRight />
          </h2>
          <h3>Have a project in mind?</h3>
          <form className='form-contact'>
            <div>
              <input type='text' placeholder='Your name' />
              <input type='email' placeholder='Your email' />
            </div>
            <div>
              <input type='text' placeholder='Your phone number' />
              <input type='text' placeholder='Your company' />
            </div>
            <div>
              <textarea placeholder='Message'></textarea>
            </div>
            <button type='submit' className='btn-contact'>
              Submit <GoArrowUpRight />
            </button>
          </form>
        </article>
      </div>
    </div>
  )
}

export default ContactForm

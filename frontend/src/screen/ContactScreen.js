import React from 'react'
import HeroScreen from './HeroScreen'
import ContactForm from '../pages/ContactForm'
import Map from '../components/Map'

const ContactScreen = () => {
  return (
    <div className='contact'>
      <HeroScreen
        title='Contact Us'
        imageUrl='https://images.pexels.com/photos/28878897/pexels-photo-28878897/free-photo-of-aerial-view-of-flooded-roundabout-in-bohumin.jpeg?auto=compress&cs=tinysrgb&w=600'
        homeLink='/'
        contactLink='/contact'
      />
      <div className='section-center'>
        <div className='office-container'>
          {/* Main Office */}
          <div className='office-card'>
            <h2>Main Office</h2>
            <p>
              Phone: <a href='tel:+0022730240369'>+00 (22) 730 240 369</a>
            </p>
            <p>
              Email:{' '}
              <a href='mailto:construz.info@gmail.com'>
                construz.info@gmail.com
              </a>
            </p>
            <p>Hours: Mon - Sat 10:00 - 18:00</p>
            <img
              src='https://html.favdevs.com/construz/demo/assets/img/normal/contact_page1-1.png'
              alt='Main Office'
            />
          </div>

          {/* London Office */}
          <div className='office-card'>
            <h2>London Office</h2>
            <p>
              Phone: <a href='tel:+32800240458'>+32 (0) 800 240 458</a>
            </p>
            <p>
              Email:{' '}
              <a href='mailto:construz.info@gmail.com'>
                construz.info@gmail.com
              </a>
            </p>
            <p>Hours: Mon - Sat 12:00 - 20:00</p>
            <img
              src='https://html.favdevs.com/construz/demo/assets/img/normal/contact_page1-2.png'
              alt='London Office'
            />
          </div>

          {/* New York City Office */}
          <div className='office-card'>
            <h2>New York City</h2>
            <p>
              Phone: <a href='tel:+32800240458'>+32 (0) 800 240 458</a>
            </p>
            <p>
              Email:{' '}
              <a href='mailto:construz.info@gmail.com'>
                construz.info@gmail.com
              </a>
            </p>
            <p>Hours: Mon - Sat 08:00 - 16:00</p>
            <img
              src='https://html.favdevs.com/construz/demo/assets/img/normal/contact_page1-3.png'
              alt='New York City Office'
            />
          </div>
        </div>
      </div>
      <div className='margin-top'>
        {' '}
        <ContactForm />
        
      </div>
      <Map/>
    </div>
  )
}

export default ContactScreen

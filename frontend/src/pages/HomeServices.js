import React from 'react'
import { Link } from 'react-router-dom'
import ContactOne from '../screen/ContactOne'

const HomeServices = () => {
  return (
    <div className='home-services '>
      <div className='home-services-container  section-center'>
        <article>
          <div className='title-home'>
            <h2>
              <img
                src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
                alt=''
              />
            </h2>
            <h3>What We Do</h3>
          </div>
          <h3>Our services that we provide</h3>
          <p>
            We craft unique digital experiences. With more than 7 years of
            expertise we design and code clean
          </p>
        </article>
        <article className='home-services-content'>
          <h2 className='vertical-text'>SERVICES - 01</h2>
          <img
            src='https://html.favdevs.com/construz/demo/assets/img/icon/service-icon1-1.png'
            alt=''
            className='home-services-img'
          />
          <h3>General construction</h3>
          <p>There are many passages of lorem ipsum available</p>
          <Link to={`/services`}>
            <button className='btn home-services-btn'>explore service</button>
          </Link>
          <div className='bg-services'></div>
        </article>
        <article className='home-services-content'>
          <h2 className='vertical-text'>SERVICES - 02</h2>
          <img
            src='https://html.favdevs.com/construz/demo/assets/img/icon/service-icon1-2.png'
            alt=''
            className='home-services-img'
          />
          <h3>Property maintenance</h3>
          <p>There are many passages of lorem ipsum available</p>
          <Link to={`/services`}>
            <button className='btn home-services-btn'>explore service</button>
          </Link>
          <div className='bg-services'></div>
        </article>
        <article className='home-services-content'>
          <h2 className='vertical-text'>SERVICES - 03</h2>
          <img
            src='https://html.favdevs.com/construz/demo/assets/img/icon/service-icon1-3.png'
            alt=''
            className='home-services-img'
          />
          <h3>Project management</h3>
          <p>There are many passages of lorem ipsum available</p>
          <Link to={`/services`}>
            <button className='btn home-services-btn'>explore service</button>
          </Link>
          <div className='bg-services'></div>
        </article>
        <article className='home-services-content'>
          <h2 className='vertical-text'>SERVICES - 04</h2>
          <img
            src='https://html.favdevs.com/construz/demo/assets/img/icon/service-icon1-4.png'
            alt=''
            className='home-services-img'
          />
          <h3>Virtual design & build</h3>
          <p>There are many passages of lorem ipsum available</p>
          <Link to={`/services`}>
            <button className='btn home-services-btn'>explore service</button>
          </Link>
          <div className='bg-services'></div>
        </article>
        <article className='home-services-content'>
          <h2 className='vertical-text'>SERVICES - 05</h2>
          <img
            src='https://html.favdevs.com/construz/demo/assets/img/icon/service-icon1-5.png'
            alt=''
            className='home-services-img'
          />
          <h3>Proconstruction</h3>
          <p>There are many passages of lorem ipsum available</p>
          <Link to={`/services`}>
            <button className='btn home-services-btn'>explore service</button>
          </Link>
          <div className='bg-services'></div>
        </article>
      </div>

      <div className='home-services-contact section-center'>
        <article className='home-services-contact-form'>
          <div className='title-home'>
            <h2>
              <img
                src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
                alt=''
              />
            </h2>
            <h3>GET FREE QUOT</h3>
          </div>
          <h3>Have a project in mind?</h3>
          <ContactOne/>
        </article>
        <article className='homeservices-contact-img'>
          <img
            src='https://html.favdevs.com/construz/demo/assets/img/normal/cta-thumb1-1.png'
            alt=''
          />
        </article>
      </div>
    </div>
  )
}

export default HomeServices

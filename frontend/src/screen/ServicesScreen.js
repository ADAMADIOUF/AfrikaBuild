import React, { useEffect } from 'react'
import HeroScreen from './HeroScreen'


const ServicesScreen = () => {
 useEffect(() => {
   window.scroll({
     top: 0,
     behavior: 'smooth',
   })
 }, [])
  return (
    <div className='services'>
      <HeroScreen
        title='Empowering Your Business with Expert Services'
        imageUrl='https://images.pexels.com/photos/28857562/pexels-photo-28857562/free-photo-of-vibrant-city-skyline-at-sunset-with-harbor-view.jpeg?auto=compress&cs=tinysrgb&w=600'
        homeLink='/'
        servicesLink='/services'
      />
      <div className='section-center services-one'>
        <div className='home-services-container section-center'>
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
            <button className='btn home-services-btn'>explore service</button>
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
            <button className='btn home-services-btn'>explore service</button>
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
            <button className='btn home-services-btn'>explore service</button>
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
            <button className='btn home-services-btn'>explore service</button>
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
            <button className='btn home-services-btn'>explore service</button>
            <div className='bg-services'></div>
          </article>
        </div>
        <div className='services-second'>
          <article className='services-img'>
            <div className='title-home'>
              <h2>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
                  alt=''
                />
              </h2>
              <h3>Our Benefits</h3>
            </div>
            <h3>Why choose us</h3>
            <div className='services-img'>
              <img
                src='https://html.favdevs.com/construz/demo/assets/img/normal/process-thumb2-1.png'
                alt=''
              />
            </div>
          </article>
          <article className='services-content'>
            <div className='services-content-container'>
              <article>
                <div>
                  <span>01</span>
                  <div className='bg-servives'></div>
                </div>
                <div>
                  <h3>Advanced Technology</h3>
                  <p>
                    We craft unique digital experiences. With more years of
                    expertise we design
                  </p>
                </div>
              </article>
              <article>
                <div>
                  <span>02</span>
                  <div className='bg-servives'></div>
                </div>
                <div>
                  <h3>Trusted Company</h3>
                  <p>
                    We craft unique digital experiences. With more years of
                    expertise we design
                  </p>
                </div>
              </article>
              <article>
                <div>
                  <span>03</span>
                  <div className='bg-servives'></div>
                </div>
                <div>
                  <h3>Professional Teams</h3>
                  <p>
                    We craft unique digital experiences. With more years of
                    expertise we design
                  </p>
                </div>
              </article>
              <article>
                <div>
                  <span>04</span>
                  <div className='bg-servives'></div>
                </div>
                <div>
                  <h3>Stylistic formula method</h3>
                  <p>
                    We craft unique digital experiences. With more years of
                    expertise we design
                  </p>
                </div>
              </article>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ServicesScreen

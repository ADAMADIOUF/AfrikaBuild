import React from 'react'

const Home = () => {
  return (
    <div className='home-page'>
      <div className='about-home section-center'>
        <div className='about-home-container'>
          <article className='first-img'>
            <div className='big-img'>
              <img
                src='https://images.pexels.com/photos/7937366/pexels-photo-7937366.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt=''
              />
            </div>
            <div className='bg'>
              <h3>1.2k</h3>
              <p>happy customers</p>
              <h2>/////////////</h2>
              <h2>/////////////////////////////</h2>
              <h2>/////////////</h2>
              <img
                src='https://html.favdevs.com/construz/demo/assets/img/normal/client_group_1-1.png'
                alt=''
                className='smal-img'
              />
            </div>
            <div className='second-bg'></div>
          </article>
          <article className='home-content'>
            <div className='title-home'>
              <h2>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
                  alt=''
                />
              </h2>
              <h3>about us</h3>
            </div>
            <h3>We building everything Tthat you needed</h3>
            <p>
              We craft unique digital experiences. With more than 7 years of
              expertise we design and code clean websites.
            </p>
            <p>
              <span>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/about-checklsit-icon1-1.svg'
                  alt=''
                />
              </span>
              Providing Solutions For Construction, Management
            </p>
            <p>
              <span>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/about-checklsit-icon1-1.svg'
                  alt=''
                />
              </span>
              Providing Solutions For Construction, Management
            </p>
            <div className='home-mission'>
              <div>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/about-grid-icon1-1.svg'
                  alt=''
                />
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  We craft unique digital experiences. With more years of
                  expertise we design
                </p>
              </div>
            </div>
            <div className='home-mission'>
              <div>
                <img
                  src='https://html.favdevs.com/construz/demo/assets/img/icon/about-grid-icon1-1.svg'
                  alt=''
                />
              </div>
              <div>
                <h3>Our Mission</h3>
                <p>
                  We craft unique digital experiences. With more years of
                  expertise we design
                </p>
              </div>
            </div>
            <button className='btn'>explore our company</button>
          </article>
          <article className='home-img'>
            <img
              src='https://html.favdevs.com/construz/demo/assets/img/normal/about_shape_1-2.png'
              alt=''
            />
          </article>
        </div>
      </div>
    </div>
  )
}

export default Home

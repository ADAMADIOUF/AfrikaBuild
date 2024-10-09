import React, { useState } from 'react'
import { CiPlay1 } from 'react-icons/ci'

const HomeProvider = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleVideoOpen = () => {
    setIsVideoOpen(true)
  }

  const handleVideoClose = () => {
    setIsVideoOpen(false)
  }

  return (
    <div className='homeprovider'>
      <div className='homeprovider-content section-center'>
        <div className='title-home home-provider-title'>
          <h2>
            <img
              src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
              alt='section icon'
            />
          </h2>
          <h3>Work Process</h3>
        </div>
        <h3>Our services that we provide</h3>
        <div className='home-provider-bg1'></div>
        <div className='home-provider-video' onClick={handleVideoOpen}>
          <h3>Play Video</h3>
          <div>
            <CiPlay1 className='icons-video' />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className='video-overlay'>
          <div className='video-popup'>
            <button className='close-video' onClick={handleVideoClose}>
              X
            </button>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with your video URL
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className='container-provider section-center'>
        <article className='provider-details'>
          <h2>
            <span>01</span> step
          </h2>
          <h3>Technology</h3>
          <p>
            We are expert your all work is very nice waiting for next project.
          </p>
        </article>
        <article className='provider-details'>
          <h2>
            <span>02</span> step
          </h2>
          <h3>Technology</h3>
          <p>
            We are expert your all work is very nice waiting for next project.
          </p>
        </article>
        <article className='provider-details'>
          <h2>
            <span>03</span> step
          </h2>
          <h3>Technology</h3>
          <p>
            We are expert your all work is very nice waiting for next project.
          </p>
        </article>
        <article className='provider-details'>
          <h2>
            <span>04</span> step
          </h2>
          <h3>Technology</h3>
          <p>
            We are expert your all work is very nice waiting for next project.
          </p>
        </article>
      </div>
      <div className='home-provider-bg2'></div>
      <div className='provider-bg-img'>
        <img
          src='https://html.favdevs.com/construz/demo/assets/img/shape/sec-bg-shape1.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default HomeProvider

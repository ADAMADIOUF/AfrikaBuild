import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa'

const HomeTeam = () => {
  return (
    <div className='home-team section-center'>
      <div className='home-team-first-container'>
        <article>
          <div className='title-home'>
            <h2>
              <img
                src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
                alt=''
              />
            </h2>
            <h3>Our Team</h3>
          </div>
          <h3>Meet our leadership</h3>
        </article>
        <article>
          <button className='btn'>View all members</button>
        </article>
      </div>
      <div className='home-team-second-container'>
        {['team-1-1', 'team-1-2', 'team-1-3'].map((teamMember, index) => (
          <article className='home-team-content' key={index}>
            <div className='home-team-content-details'>
              <h3>Penelopa Miller</h3>
              <p>Head of Production</p>
              <div className='home-team-icons'>
                <button>
                  <FaFacebook />
                </button>
                <button>
                  <FaInstagram />
                </button>
                <button>
                  <FaTwitter />
                </button>
              </div>
            </div>

            <div className='home-team-img'>
              <img
                src={`https://html.favdevs.com/construz/demo/assets/img/team/${teamMember}.png`}
                alt=''
              />
            </div>
            <div className='home-team-phone-number'>
              <button>
                <FaPhone />
              </button>
              <div className='phone-number'>
                <p>775005467590</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default HomeTeam

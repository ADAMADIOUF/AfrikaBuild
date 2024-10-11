import React, { useState, useEffect } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const HomeBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const blogPosts = [
    {
      id: 1,
      img: 'https://html.favdevs.com/construz/demo/assets/img/blog/blog_1_1.png',
      title: 'Start your construction by Arona',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde natus nobis eius ab veritatis aut ipsum suscipit earum eligendi.',
    },
    {
      id: 2,
      img: 'https://html.favdevs.com/construz/demo/assets/img/blog/blog_1_1.png',
      title: 'Building your dream home',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde natus nobis eius ab veritatis aut ipsum suscipit earum eligendi.',
    },
    {
      id: 3,
      img: 'https://html.favdevs.com/construz/demo/assets/img/blog/blog_1_1.png',
      title: 'Sustainable construction practices',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde natus nobis eius ab veritatis aut ipsum suscipit earum eligendi.',
    },
    {
      id: 4,
      img: 'https://html.favdevs.com/construz/demo/assets/img/blog/blog_1_1.png',
      title: 'Innovations in construction technology',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde natus nobis eius ab veritatis aut ipsum suscipit earum eligendi.',
    },
    {
      id: 5,
      img: 'https://html.favdevs.com/construz/demo/assets/img/blog/blog_1_1.png',
      title: 'Construction safety tips',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde natus nobis eius ab veritatis aut ipsum suscipit earum eligendi.',
    },
  ]

  // Automatic slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      const imagesToShow = window.innerWidth <= 768 ? 1 : 3 // Show 1 on mobile, 3 on larger screens
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(blogPosts.length / imagesToShow)
      )
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [blogPosts.length])

  return (
    <div className='home-blog section-center'>
      <div className='home-team-first-container'>
        <article>
          <div className='title-home'>
            <h2>
              <img
                src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
                alt=''
              />
            </h2>
            <h3>Latest News</h3>
          </div>
          <h3>Recent news and events</h3>
        </article>
        <article>
          <button className='btn'>View all news</button>
        </article>
      </div>
      <div className='home-blog-container'>
        <div
          className='blog-slider'
          style={{
            transform: `translateX(-${
              currentIndex * (window.innerWidth <= 768 ? 100 : 33.33)
            }%)`, 
          }}
        >
          {blogPosts.map((post) => (
            <article key={post.id}>
              <img
                src={post.img}
                alt={post.title}
                style={{ width: '100%', height: 'auto' }} 
              />
              <div className='details-home-blog'>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button className='btn'>
                  more details <GoArrowUpRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeBlog

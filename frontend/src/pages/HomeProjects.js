import React, { useState, useEffect } from 'react'


const HomeProjects = () => {
  const projects = [
    {
      id: 1,
      imgSrc:
        'https://images.pexels.com/photos/189859/pexels-photo-189859.jpeg',
      title: 'Project 1',
      content: 'We provide high-quality construction services for project 1.',
    },
    {
      id: 2,
      imgSrc:
        'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
      title: 'Project 2',
      content: 'We provide high-quality construction services for project 2.',
    },
    {
      id: 3,
      imgSrc:
        'https://images.pexels.com/photos/209256/pexels-photo-209256.jpeg',
      title: 'Project 3',
      content: 'We provide high-quality construction services for project 3.',
    },
    {
      id: 4,
      imgSrc:
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      title: 'Project 4',
      content: 'We provide high-quality construction services for project 4.',
    },
    {
      id: 5,
      imgSrc:
        'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      title: 'Project 5',
      content: 'We provide high-quality construction services for project 5.',
    },
    {
      id: 6,
      imgSrc:
        'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg',
      title: 'Project 6',
      content: 'We provide high-quality construction services for project 6.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [projects.length])

  const handleImageClick = (index) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleNext = () => {
    setModalIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePrev = () => {
    setModalIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    )
  }

  return (
    <div className='home-projects section-center'>
      <div className='title-home'>
        <h2>
          <img
            src='https://html.favdevs.com/construz/demo/assets/img/icon/section-subtitle-icon.svg'
            alt='icon'
          />
        </h2>
        <h3>Recent Work</h3>
      </div>
      <h3>Check our latest projects</h3>
      <p>We are the best construction agency in the world</p>

      <div className='slider-gallery-home-projects'>
        <div className='project-slide'>
          {projects
            .slice(currentIndex, currentIndex + 3)
            .map((project, index) => (
              <div
                className={`project ${index === 0 ? 'larger' : ''}`}
                key={project.id}
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className='project-image'
                  onClick={() => handleImageClick(project.id - 1)} // Pass project index
                />
                <div className='project-info'>
                  <h4>{project.title}</h4>
                  <p>{project.content}</p>
                  <button className='explore-btn'>Explore Services</button>
                </div>
              </div>
            ))}
        </div>
        <div className='project-indicators'>
          {projects.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Modal for Image Viewing */}
      {isModalOpen && (
        <div className='modal'>
          <span className='close-btn' onClick={handleCloseModal}>
            &times;
          </span>
          <div className='modal-content'>
            <img
              src={projects[modalIndex].imgSrc}
              alt={projects[modalIndex].title}
              className='modal-image'
            />
            <h4>{projects[modalIndex].title}</h4>
            <p>{projects[modalIndex].content}</p>
            <div className='modal-buttons'>
              <button className='prev-btn' onClick={handlePrev}>
                Previous
              </button>
              <button className='next-btn' onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeProjects

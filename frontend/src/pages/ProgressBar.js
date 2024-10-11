import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'

import ScrollTrigger from 'react-scroll-trigger'

const ProgressBar = () => {
  const [count, setCount] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setCount(true)
    }, 2000)

    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
    <section className='progress-content'>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className='progress-bar'>
          <article>
            <h3>
              {count && <CountUp start={0} end={85} duration={2} delay={0} />}K
              +
            </h3>
            <span>Projects Completed</span>
            <div className={`progress bg1 ${count ? 'animate' : ''}`}></div>
          </article>
          <article>
            <h3>
              {count && <CountUp start={0} end={98} duration={2} delay={0} />}%
            </h3>
            <span>Customers Satisfied</span>
            <div className={`progress bg2 ${count ? 'animate' : ''}`}></div>
          </article>
          <article>
            <h3>
              {count && <CountUp start={0} end={20} duration={2} delay={0} />}M
            </h3>
            <span>Special Machinery</span>
            <div className={`progress bg3 ${count ? 'animate' : ''}`}></div>
          </article>
          <article>
            <h3>
              {count && <CountUp start={0} end={15} duration={2} delay={0} />}+
            </h3>
            <span>Years in Business</span>
            <div className={`progress bg3 ${count ? 'animate' : ''}`}></div>
          </article>
        </div>
      </ScrollTrigger>
    </section>
  )
}

export default ProgressBar

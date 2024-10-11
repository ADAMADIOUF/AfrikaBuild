import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopHero from './components/TopHero'
import Home from './components/Home'
import Footer from './components/Footer'
import ClickButtonTop from './components/ClikButtonTop'
const App = () => {
  return (
    <div>
      <Navbar />
      <ClickButtonTop />
      <Hero />
      <TopHero />
      <Home />
      <Footer />
    </div>
  )
}

export default App

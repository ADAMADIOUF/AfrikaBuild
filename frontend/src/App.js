import React from 'react'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import ClickButtonTop from './components/ClikButtonTop'
import { Outlet } from 'react-router-dom'
const App = () => {
  
  return (
    <div>
      <Navbar />
      <Outlet/>
      <ClickButtonTop />
      
     
      <Footer />
    </div>
  )
}

export default App

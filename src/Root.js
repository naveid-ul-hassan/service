import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

function Root() {
  return (
<>

    <Header />
    

    <Outlet />
    
    <Footer/>
    
    </>
  )
}

export default Root
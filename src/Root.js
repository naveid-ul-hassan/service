import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import TopHeader from './components/topheader/TopHeader'

function Root() {
  return (
<>
    {/* <TopHeader/> */}
    <Header />
    

    <Outlet />
    
    <Footer/>
    
    </>
  )
}

export default Root
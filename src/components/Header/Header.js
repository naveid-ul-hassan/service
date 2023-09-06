import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import config from '../../config'
import MessageParser from '../../MessageParser'
import ActionProvider from '../../ActionProvider'
import Chatbot from 'react-chatbot-kit'
// import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className='header'>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div >
                    <Link className="navbar-brand px-4" href="/">
                        <span>LOGO</span>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav  mb-2 mb-lg-0 navbar_container ">
                            <li className="nav-item  px-3"> <NavLink className="nav-link" activeClassName="active"   to='/'>Home</NavLink></li>
                            <li className="nav-item  px-3"> <NavLink className="nav-link" activeClassName="active" to='/about'>About Us</NavLink></li>
                            <li className="nav-item px-3"> <NavLink className="nav-link"  activeClassName="active" to='/services'>Services</NavLink></li>
                            <li className="nav-item px-3"> <NavLink className="nav-link" activeClassName="active" to='/blogs'>Blogs</NavLink></li>
                            <li className="nav-item px-3"> <NavLink className="nav-link" activeClassName="active" to='/contact'>Contact Us</NavLink></li>
                        </ul>
            
                    </div>
                    <div className='chat-tag'>
     {/* <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /> */}
      </div>
                </div>
            </nav>
            
           
            <div className='header_underline' ></div>

            {/* <div className='container d-flex justify-content-between'>
                <div>
                    <img src='' alt='LGOG' />
                </div>
                <div className='navlink'>
                    <ul className='d-flex flex-row'>
                        <li className='px-4'> <Link to='/'>Home</Link></li>
                        <li className='px-4'> <Link to='/about'>About Us</Link></li>
                        <li className='px-4'> <Link to='/services'>Services</Link></li>
                        <li className='px-4'> <Link to='/blogs'>Blogs</Link></li>
                        <li className='px-4'> <Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
            </div> */}
           
        </header>
    )
}
export default Header
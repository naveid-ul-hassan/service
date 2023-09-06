import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookShareButton,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    TwitterShareButton,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceIcon
} from "react-share";
import styles from './Footer.module.css'
function Footer() {
    return (
        <div className={` ${styles.footer} px-4`  } >
            <div className="row">
                <div className={`${styles.footer_content} col-lg`}>
                    <Link to="/" ><h3>LOGO</h3></Link>
                    <p>Online Expert Class is known to be one of the most leading and competent coursework helping services online, with a high repute in offering their unmatchable professional lesson, assignment, project and so many more to several different kind of services to both students as well as professional individuals. Students who require some help from all across the world can now fill applications, and take countless advantages of our wide variety of solutions and services.</p>
                </div>
                <div className="col-lg d-flex flex-column align-items-center">
                    <h2>Quick Links</h2>
                    <ul className="navbar-nav  mb-2 mb-lg-0 navbar_container ">
                            <li className="nav-item  px-3"> <NavLink className="nav-link" activeClassName="active"   to='/'>Home</NavLink></li>
                            <li className="nav-item  px-3"> <NavLink className="nav-link" activeClassName="active" to='/about'>About Us</NavLink></li>
                            <li className="nav-item px-3"> <NavLink className="nav-link"  activeClassName="active" to='/services'>Services</NavLink></li>
                            <li className="nav-item px-3"> <NavLink className="nav-link" activeClassName="active" to='/blogs'>Blogs</NavLink></li>
                            <li className="nav-item px-3"> <NavLink className="nav-link" activeClassName="active" to='/contact'>Contact Us</NavLink></li>
                        </ul>
                </div>
                <div className={`col-lg d-flex flex-column align-items-center ${styles.footer_links} `}>
                    <h3>Get In Touch</h3>
                    <FacebookShareButton url="https://www.facebook.com/">
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <EmailShareButton url="https://mail.google.com/">
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    <TwitterShareButton url="https://twitter.com/">
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton url="https://web.whatsapp.com/" className="mr-2">
                        <WhatsappIcon className='d-flex flex-column' size={36} round={true} />
                    </WhatsappShareButton>
                </div>
            </div>
        </div>
    )
}

export default Footer
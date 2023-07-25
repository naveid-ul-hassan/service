import React from 'react'
import { Link } from 'react-router-dom'
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
function Footer() {
    return (
        <div class="container" style={{}}>
            <div class="row">
                <div class="col-lg">
                    <Link to="/" ><h3>LOGO</h3></Link>
                    <p> The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century. An unknown printer used a scrambled version of Cicero's philosophical book "De Finibus Bonorum et Malorum", written in 45 BC, to create filler text. </p>
                </div>
                <div class="col-lg d-flex flex-column align-items-center">
                    <h2>Quick Links</h2>
                    <ul className="navbar-nav  mb-2 mb-lg-0 px-4">
                        <li className="nav-item"> <Link className="nav-link" to='/'>Home</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to='/about'>About Us</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to='/services'>Services</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to='/blogs'>Blogs</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div class="col-lg d-flex flex-column align-items-center ">
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
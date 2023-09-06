import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import classes from "./userreview.module.css";
// import avatar1 from "avatar-1.jpg";
// import avatar2 from "../avatar-2.jpg";
// import avatar3 from "./avatar-3.jpg";
// import avatar1 from "./avatar-1.jpg"
// import bggrey from "../../assets/image/shape-grey.png";
// import bgwhite from "../../assets/image/shape-white.png";

import { BsFillStarFill } from 'react-icons/bs';

const UserReview = () => {
  return (
    <div className="container">
        <div
          className={`row ${classes.row} mx-auto`}
        //   data-aos="fade-up"
        //   data-aos-easing="ease-out"
        //   data-aos-duration="700"
        >
            <div className="col">
         
            <div className={classes.header_div}>
              {/* <h2>Testimonials</h2> */}
              <p>This is what our client are saying</p>
            </div>
       
          </div>
        </div>

        
            <div className={`row ${classes.row_content}`}>
         
                <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="testi-card" style={{ backgroundColor:"white",padding:"8%" }}>
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img
                      src="avatar-1.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Robert William"
                      style={{ borderRadius: "50px" }}
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Robert William</h3>

                    {/* <p className="testi-title">CEO Kingfisher</p> */}
                  </div>
                </div>

                <blockquote className="testi-text">
                  "You're truly a man of work and art. I genuinely appreciate how incredible you are and your work! Thank you for a job well done!"
                </blockquote>

                <div className={classes.rating_wrapper}>
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                </div>
              </div>
              </div>
            
                <div className="col-md-6 col-lg-4 col-xl-4">

              <div className="testi-card" style={{ backgroundColor:"white",padding:"8%" }}>
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img
                      src="avatar-2.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Robert William"
                      style={{ borderRadius: "50px" }}
                      className="avatarimg"
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Robert William</h3>

                    {/* <p className="testi-title">CEO Kingfisher</p> */}
                  </div>
                </div>

                <blockquote className="testi-text">
                  "You're truly a man of work and art. I genuinely appreciate how incredible you are and your work! Thank you for a job well done!"
                </blockquote>

                <div className={classes.rating_wrapper}>
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                </div>
              </div>
              </div>
             <div className="col-md-6 col-lg-4 col-xl-4">

              <div className="testi-card" style={{ backgroundColor:"white",padding:"8%" }}>
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img
                      src="avatar-3.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Robert William"
                      style={{ borderRadius: "50px" }}
                      className="avatarimg"
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Robert William</h3>

                    {/* <p className="testi-title">CEO Kingfisher</p> */}
                  </div>
                </div>

                <blockquote className="testi-text">
                  "You're truly a man of work and art. I genuinely appreciate how incredible you are and your work! Thank you for a job well done!"
                </blockquote>

                <div className={classes.rating_wrapper}>
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                <BsFillStarFill color="hsl(32, 100%, 59%)" />
                </div>
              </div>
              </div>

          </div>
        
      </div>
  );
  //ENd
};

export default UserReview;

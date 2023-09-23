import React, { Component } from "react";
import Slider from "react-slick";

export default function  Carousol() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

    return (
      <div className="py-3">
        {/* <h2>Auto Play</h2> */}
        {/* <Slider {...settings}>
          <div>
            <h3>name 1</h3>
          </div>
          <div>
            <h3>name 2</h3>
          </div>
          <div>
            <h3>name 3</h3>
          </div>
          <div>
            <h3>name 4</h3>
          </div>
          <div>
            <h3>name 5</h3>
          </div>
          <div>
            <h3>name 6</h3>
          </div>
        </Slider> */}
        
      </div>
    );
  }

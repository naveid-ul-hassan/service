import React from "react";
import "./cources.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Cources = ()=>{
    return(
        <div className="cources_container container py-5">
            <h2 className="d-flex justify-content-center py-4">Cources By Categories</h2>

            <div className="cource_card_tag d-flex">
            <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Science</h2>
            </div>
            <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Mathematics</h2>
            </div>
            <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Arts</h2>
            </div>
            <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Business</h2>
            </div>
            <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">English</h2>
            </div>
            <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">History</h2>
            </div>
            <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Real Estate</h2>
            </div>   
            </div>   
        {/* <Swiper
        pagination={{
          type:"bullets",
        }}
        slidesPerView={3}
        mousewheel-force-to-axis={true}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Science</h2>
            </div>
            </SwiperSlide>
        <SwiperSlide> 
        <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Mathematics</h2>
            </div>
            </SwiperSlide>
        <SwiperSlide> 
        <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Arts</h2>
            </div></SwiperSlide>
            <SwiperSlide> <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Business</h2>
            </div></SwiperSlide>
            <SwiperSlide> <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">English</h2>
            </div></SwiperSlide>
            <SwiperSlide> <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">History</h2>
            </div></SwiperSlide>
            <SwiperSlide> <div className="cource_card"> 
            <img src="science.webp" alt="science"  className="cource_card_img"/>
            <h2 className="cource_card_tittle">Real Estate</h2>
            </div></SwiperSlide>
      </Swiper> */}
        </div>
    )
}
export default Cources
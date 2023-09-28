import React from "react";
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Testimonials = () => {
    return(
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        
      </Swiper>
    //     <section id="testimonials" class="testimonials">
    //     <div class="container" data-aos="zoom-in">
  
    //       <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
    //         <div class="swiper-wrapper">
  
    //           <div class="swiper-slide">
    //             <div class="testimonial-item">
    //               <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
    //               <h3>Saul Goodman</h3>
    //               <h4>Ceo &amp; Founder</h4>
    //               <p>
    //                 <i class="bx bxs-quote-alt-left quote-icon-left"></i>
    //                 Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
    //                 <i class="bx bxs-quote-alt-right quote-icon-right"></i>
    //               </p>
    //             </div>
    //           </div>
  
    //           <div class="swiper-slide">
    //             <div class="testimonial-item">
    //               <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
    //               <h3>Sara Wilsson</h3>
    //               <h4>Designer</h4>
    //               <p>
    //                 <i class="bx bxs-quote-alt-left quote-icon-left"></i>
    //                 Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
    //                 <i class="bx bxs-quote-alt-right quote-icon-right"></i>
    //               </p>
    //             </div>
    //           </div>
  
    //           <div class="swiper-slide">
    //             <div class="testimonial-item">
    //               <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
    //               <h3>Jena Karlis</h3>
    //               <h4>Store Owner</h4>
    //               <p>
    //                 <i class="bx bxs-quote-alt-left quote-icon-left"></i>
    //                 Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
    //                 <i class="bx bxs-quote-alt-right quote-icon-right"></i>
    //               </p>
    //             </div>
    //           </div>
  
    //           <div class="swiper-slide">
    //             <div class="testimonial-item">
    //               <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
    //               <h3>Matt Brandon</h3>
    //               <h4>Freelancer</h4>
    //               <p>
    //                 <i class="bx bxs-quote-alt-left quote-icon-left"></i>
    //                 Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
    //                 <i class="bx bxs-quote-alt-right quote-icon-right"></i>
    //               </p>
    //             </div>
    //           </div>
  
    //           <div class="swiper-slide">
    //             <div class="testimonial-item">
    //               <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
    //               <h3>John Larson</h3>
    //               <h4>Entrepreneur</h4>
    //               <p>
    //                 <i class="bx bxs-quote-alt-left quote-icon-left"></i>
    //                 Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
    //                 <i class="bx bxs-quote-alt-right quote-icon-right"></i>
    //               </p>
    //             </div>
    //           </div>
  
    //         </div>
    //         <div class="swiper-pagination"></div>
    //       </div>
  
    //     </div>
    //   </section>       
    )
}
export default Testimonials
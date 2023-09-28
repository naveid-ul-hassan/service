import React from "react";
import './ChooseUs.css'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const ChooseUs = () =>{
return(
    <section id="services" class="services">
    <div class="container" data-aos="fade-up">

      <div class="section-title alignCenter py-3">
        <h2 align="center">Why Choose Us</h2>
        {/* <h3>Check our <span>Services</span></h3> */}
        {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box">
            <div class="icon"><LibraryBooksIcon /></div>
            <h4>Handpicked Experts</h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><LibraryBooksIcon /></div>
            <h4>100% refund policy</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><LibraryBooksIcon /></div>
            <h4>Cover 150+ subjects</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </div>
        </div>

       

      </div>

    </div>
  </section>
)
}

export default ChooseUs
import React from 'react'
// import styles from "./Services.module.css"
import "./Services.css";
import ServiceCard from '../common/ServiceCard';
import Cources from '../cources/Cources';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
function Services() {
  return (
    <div className='services_container py-5'>
       <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><LibraryBooksIcon /></div>
              <h4 class="title"><a href="">Online Cources</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><LibraryBooksIcon /></div>
              <h4 class="title"><a href="">Test and Quizes</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><LibraryBooksIcon /></div>
              <h4 class="title"><a href="">Test and Exams</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          {/* <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div> */}

        </div>

      </div>
    </section>
      {/* <div className='row'>
      <h4 className="text-center pt-4">Our Services</h4>
      <h2 className="text-center ">Find The Right Plan</h2>
      
      </div>
      <div className='row m-3 justify-content-center'>
          <ServiceCard/>
      </div> */}
      {/* <Cources /> */}

    </div>
  )
}

export default Services
import React from "react";
import "./cources.css";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import './styles.css';

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import ContactUsBtn from "../common/ContactUsBtn";
import { Button } from "@mui/material";
// import { Translate } from "@mui/icons-material";

const Cources = () => {
  return (
    <div className="cources_container   py-5">
      {/* <h2 classNameName="d-flex justify-content-center py-4">Cources By Categories</h2>

            <div classNameName="cource_card_tag d-flex">
            <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Science</h2>
            </div>
            <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Mathematics</h2>
            </div>
            <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Arts</h2>
            </div>
            <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Business</h2>
            </div>
            <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">English</h2>
            </div>
            <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">History</h2>
            </div>
            <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Real Estate</h2>
            </div>   
            </div>    */}
      <div class="row mt-5 bgc-iGray10 justify-content-end no-gutters">
        <div class="col-lg-5">
          <div class="subject-left">
            <ul>
              <li>
                <div class="subject-box bgc-iPink sty1">
                  <div class="img-wrap">
                    <i class="ic-52"></i>
                  </div>
                  <h6>Computer Science</h6>
                </div>
              </li>
              <li>
                <div class="subject-box">
                  <div class="img-wrap">
                    <i class="ic-53"></i>
                  </div>
                  <h6>Engineering</h6>
                </div>
              </li>
              <li>
                <div class="subject-box bgc-iGreen sty1">
                  <div class="img-wrap">
                    <i class="ic-54"></i>
                  </div>
                  <h6>Education</h6>
                </div>
              </li>
              <li>
                <div class="subject-box">
                  <div class="img-wrap">
                    <i class="ic-55"></i>
                  </div>
                  <h6>Psychology</h6>
                </div>
              </li>
              <li>
                <div class="subject-box">
                  <div class="img-wrap">
                    <i class="ic-56"></i>
                  </div>
                  <h6>Chemistry</h6>
                </div>
              </li>
              <li>
                <div class="subject-box bgc-iBlue sty1">
                  <div class="img-wrap">
                    <i class="ic-57"></i>
                  </div>
                  <h6>Biology</h6>
                </div>
              </li>
              <li>
                <div class="subject-box">
                  <div class="img-wrap">
                    <i class="ic-58"></i>
                  </div>
                  <h6>Physics</h6>
                </div>
              </li>
              <li>
                <div class="subject-box bgc-iOrange sty1">
                  <div class="img-wrap">
                    <i class="ic-59"></i>
                  </div>
                  <h6>Social Sciences</h6>
                </div>
              </li>
              <li>
                <div class="subject-box bgc-iPrimary sty1">
                  <div class="img-wrap">
                    <i class="ic-60"></i>
                  </div>
                  <h6>Maths</h6>
                </div>
              </li>
              <li>
                <div class="subject-box">
                  <div class="img-wrap">
                    <i class="ic-61"></i>
                  </div>
                  <h6>Algebra</h6>
                </div>
              </li>
              <li>
                <div class="subject-box bgc-iYellow sty1">
                  <div class="img-wrap">
                    <i class="ic-62"></i>
                  </div>
                  <h6>International Relation</h6>
                </div>
              </li>
              <li>
                <div class="subject-box">
                  <div class="img-wrap">
                    <i class="ic-63"></i>
                  </div>
                  <h6>Calculus</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="subject-right">
            <img src="assets/images/subject-left.webp" alt="" />
            <div class="girl">
              <img src="assets/images/girlss.webp" alt="" />
            </div>
          </div>
        </div>
      </div>


      <section className="featured-area pt-100 pb-70">
        <div className="">
          <div className="section-title">
            <h3 className="playfair-display">Our Services</h3>
          </div>
          <div className="row service_section_main">
            <div className=" col-md-10 col-sm-10 col-xs-10 service_section_container">
              <div className="">
                <div className="icon">
                  <i className="bx bx-layer"></i>
                </div>
                <h3 className="">Online Cources</h3>
                <p>
                  Our expert tutors work tirelessly on your behalf to ensure you
                  do not have to worry about className timings, attendance.
                </p>
              </div>
            </div>
            <div className=" col-md-10 col-sm-10 col-xs-10 service_section_container" >
              <div className="single-featured-box">
                <div className="icon">
                  <i className="bx bx-book-reader"></i>
                </div>
                <h3 className="playfair-display">Online Courses</h3>
                <p>
                  Want to add show another skill or knowledge set but don’t have
                  the time? Our team of professionals will assist you with
                  online course, lectures, assignments, and projects.
                </p>
              </div>
            </div>
            <div className=" col-md-10 col-sm-10 col-xs-10 service_section_container">
              <div className="single-featured-box">
                <div className="icon">
                  <i className="bx bxs-thermometer"></i>
                </div>
                <h3 className="playfair-display">Tests &amp; Quizzes</h3>
                <p>
                  Cannot focus or prepare for the upcoming quiz? Our skilled
                  mentors are primed and ready to assist you ace your online
                  tests and online quizzes to help you get that perfect score.
                </p>
              </div>
            </div>
            <div className=" col-md-10 col-sm-10 col-xs-10 service_section_container">
              <div className="single-featured-box">
                <div className="icon">
                  <i className="bx bx-layer"></i>
                </div>
                <h3 className="playfair-display">Online Exams</h3>
                <p>
                  Exams are always a nightmare, but our team has the expertise
                  in easing your worries by helping you ace your next online
                  university exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section experience-area ptb-100 bg-f5faf8">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="experience-content">
                <h2>Online className Help</h2>
                <p>
                  Students often face the dilemma of completing their online
                  classNamees with great difficulty or dropping them altogether.
                  It could be due to personal problems, managing a full-time job
                  with studies, intense pressure, or often a simple challenge of
                  studying in an online className.
                </p>
                <p>
                  We provide intensive support and top-quality online className
                  help. Students can pay for online classNamees where our
                  subject specific experts take online classNamees. So, as a
                  student, if you’ve ever wondered if someone to take my online
                  className then we have the perfect solution for you.
                </p>

                <h2>Why should I hire someone to take my online className? </h2>
                <p>
                  Students who sign up for online classNamees are often trying
                  to cope up with many responsibilities simultaneously. There is
                  personal life, a stressful job, and on top of all that they
                  have to dedicate hundreds of hours to completing online
                  classNamees, deliver homework, attempt quizzes and tests, and
                  clear final exams to qualify for the completion of their
                  online classNamees. We take all of this hassle and stress away
                  from you by providing you an all-in-one solution for your
                  online classNamees to ensure that you achieve success.
                </p>

                <h2>Can You do My Online className for Me?</h2>
                <p>
                  We have some of the best tutors for a vast array of subjects.
                  Our experts include graduates from some of the top colleges
                  and universities in the US – many of whom were exceptional
                  students in Ivy League schools. Our dedicated professionals
                  have completed and delivered thousands of essays, projects,
                  homework and assignments on a myriad of subjects for
                  uncountable students. When you sign up with us to complete
                  your online classNamees, our tutors discuss the entire project
                  with you and then meticulously deliver the final files to you.
                  Your success is our achievement!
                </p>

                {/* <a href="contact.php" className="default-btn"><i className="bx bx-user-circle icon-arrow before"></i><span className="label">Contact Us</span><i className="bx bx-user-circle icon-arrow after"></i></a> */}
                <ContactUsBtn />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="experience-image">
                <img src="university.jpg" alt="image" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section experience-area ptb-100 bg-f5faf8">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="experience-image">
                <img src="university.jpg" alt="image" width="100%" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="experience-content">
                <h2>
                  Will Your Tutors Plagiarize if They Do My Online className?
                </h2>
                <p>
                  Never! We take immense pride in delivering quality and
                  original content that is 100% free of plagiarism. Our offshore
                  competitors often extract tests, projects, assignments, and
                  contents from public test banks and present them as original
                  content, but the Geeks frown upon such practices and insists
                  on delivering top quality work produced and written by our
                  inhouse team of highly experienced tutors. We want to provide
                  you legitimate and genuine services. All of our content is
                  passed through plagiarism checkers and you receive a complete
                  plagiarism report free of cost with each project that is
                  delivered to you through us.
                </p>

                <h2>I am ready to Pay someone to take my online className</h2>
                <p>
                  Of course, you are! We are the best and you know it. To begin
                  your journey, sign up today or contact us to place your order.
                  Our experts and support team will guide you through the entire
                  process and put to ease any other concerns you might have.
                </p>
                <p>
                  Buy online className help from us today to complete your
                  pending classNamees, achieve excellent grades with a
                  remarkable attendance – all that and more at affordable
                  student prices. Our tutors make it simple for you.
                </p>

                {/* <a href="contact.php" className="default-btn"><i className="bx bx-user-circle icon-arrow before"></i><span className="label">Contact Us</span><i className="bx bx-user-circle icon-arrow after"></i></a> */}
                <ContactUsBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="testimonials-area ptb-100" style= {{backgroundColor: "#f7f5f4"}}>
    <div class="container">
        <div class="section-title">
            <span class="sub-title">Testimonials</span>
            <h2>What Students Says</h2>
        </div>
        <div class="testimonials-slides owl-carousel owl-theme owl-loaded owl-drag">
            
        <div class="owl-stage-outer"><div class="owl-stage" style={{transition:"all 0.25 ease 0s" , width:"7068px"}}><div class="owl-item cloned" ><div class="single-testimonials-item">
                <p>I couldn’t imagine passing my exams if the Online Course Geeks hasn’t gone above and beyond to help me through them.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>David Liptrot</h3>
                </div>
            </div></div><div class="owl-item cloned" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>I couldn’t imagine passing my exams if the Online Course Geeks hasn’t gone above and beyond to help me through them</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Naomi Allan</h3>
                </div>
            </div></div><div class="owl-item cloned" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>This was one of the best decisions I ever made – not only did I complete my class, but received the top grade too!</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Gerard Hansen </h3>
                </div>
            </div></div><div class="owl-item cloned" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>Superb services for fantastic prices! The special student discount really helped me through a tough time.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Alicia Williams</h3>
                </div>
            </div></div><div class="owl-item cloned" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>After banging my head against the wall fretting about my law course, the Online Course Geeks helped me secure a great grade and save my head.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Tara Sullivan </h3>
                </div>
            </div></div><div class="owl-item" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>This was one of the best decisions I ever made – not only did I complete my course, but received the top grade too!</p>
                <div class="info">
                    <img src="assets/img/user1.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Gerard Hansen</h3>
                </div>
            </div></div><div class="owl-item" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>Superb services for fantastic prices! The special student discount really helped me through a tough time.</p>
                <div class="info">
                    <img src="assets/img/user2.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Alicia Williams</h3>
                </div>
            </div></div><div class="owl-item" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>After banging my head against the wall fretting about my law exam, the Online Course Geeks helped me secure a great grade and save my head.</p>
                <div class="info">
                    <img src="assets/img/user3.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Tara Sullivan</h3>
                </div>
            </div></div><div class="owl-item" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>I’ve been coming here repeatedly for the past two years to help me finish my online course on time.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Joseph Harper</h3>
                </div>
            </div></div><div class="owl-item" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>I couldn’t imagine passing my exams if the Online Course Geeks hasn’t gone above and beyond to help me through them.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>David Liptrot</h3>
                </div>
            </div></div><div class="owl-item" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>I couldn’t imagine passing my exams if the Online Course Geeks hasn’t gone above and beyond to help me through them</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Naomi Allan</h3>
                </div>
            </div></div><div class="owl-item" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>This was one of the best decisions I ever made – not only did I complete my class, but received the top grade too!</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Gerard Hansen </h3>
                </div>
            </div></div><div class="owl-item active" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>Superb services for fantastic prices! The special student discount really helped me through a tough time.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Alicia Williams</h3>
                </div>
            </div></div><div class="owl-item active center" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>After banging my head against the wall fretting about my law course, the Online Course Geeks helped me secure a great grade and save my head.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Tara Sullivan </h3>
                </div>
            </div></div><div class="owl-item cloned active" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>This was one of the best decisions I ever made – not only did I complete my course, but received the top grade too!</p>
                <div class="info">
                    <img src="assets/img/user1.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Gerard Hansen</h3>
                </div>
            </div></div><div class="owl-item cloned" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>Superb services for fantastic prices! The special student discount really helped me through a tough time.</p>
                <div class="info">
                    <img src="assets/img/user2.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Alicia Williams</h3>
                </div>
            </div></div><div class="owl-item cloned" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>After banging my head against the wall fretting about my law exam, the Online Course Geeks helped me secure a great grade and save my head.</p>
                <div class="info">
                    <img src="assets/img/user3.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Tara Sullivan</h3>
                </div>
            </div></div><div class="owl-item cloned" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>I’ve been coming here repeatedly for the past two years to help me finish my online course on time.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image" />
                    <h3>Joseph Harper</h3>
                </div>
            </div></div><div class="owl-item cloned" style={{width:"372px"}}><div class="single-testimonials-item">
                <p>I couldn’t imagine passing my exams if the Online Course Geeks hasn’t gone above and beyond to help me through them.</p>
                <div class="info">
                    <img src="assets/img/user4.jpg" class="shadow rounded-circle" alt="image"/>
                    <h3>David Liptrot</h3>
                </div>
            </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="bx bx-left-arrow-alt"></i></button><button type="button" role="presentation" class="owl-next"><i class="bx bx-right-arrow-alt"></i></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div></div>
    </div>
</section> */}
      {/* <Swiper
        pagination={{
          type:"bullets",
        }}
        slidesPerView={3}
        mousewheel-force-to-axis={true}
        navigation={true}
        modules={[ Navigation]}
        classNameName="mySwiper"
      >
        <SwiperSlide> 
        <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Science</h2>
            </div>
            </SwiperSlide>
        <SwiperSlide> 
        <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Mathematics</h2>
            </div>
            </SwiperSlide>
        <SwiperSlide> 
        <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Arts</h2>
            </div></SwiperSlide>
            <SwiperSlide> <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Business</h2>
            </div></SwiperSlide>
            <SwiperSlide> <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">English</h2>
            </div></SwiperSlide>
            <SwiperSlide> <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">History</h2>
            </div></SwiperSlide>
            <SwiperSlide> <div classNameName="cource_card"> 
            <img src="science.webp" alt="science"  classNameName="cource_card_img"/>
            <h2 classNameName="cource_card_tittle">Real Estate</h2>
            </div></SwiperSlide>
      </Swiper> */}
    </div>
  );
};
export default Cources;

import React from 'react'
import "./Home.css"
import UserReview from '../review/UserReview'
import Cources from '../cources/Cources'
import Carousol from './Carousol'
import GetHelp from './GetHelp'
import ChooseUs from './ChooseUs'
import CountSection from '../count/CounSection'
import Testimonials from '../testimonials/testimonials'


function Home() {
  return (
    <>
    <div className='home_container' >
      <div className="row container py-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center" >
          <div className='col-10'>
            <h3>Get done with your online</h3> 
            <h3>lesson or classes</h3>
           
            <p>
            we wil assist you in your online courses including labs quizzes assignments discussion projects & exam.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center" >
          <img width={350} src='homeright.png' />
        </div>
      </div>
      {/* <div className='row my-4'>
       <UserReview />
      </div> */}
    </div>
    {/* <GetHelp /> */}
    {/* <Carousol /> */}
    {/* <Cources /> */}
    <ChooseUs />
    <Testimonials />
    {/* <CountSection /> */}
    </>
  )
}

export default Home
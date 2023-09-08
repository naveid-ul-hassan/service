import React from 'react'
import  "./about.css"
import OrderForm from '../common/OrderForm'

function About() {
  return (
    <div>
      <div className="about_order_section">
    <img  src='unviersity.jpg' alt='university' className="about_img" />
    <div className="place_order" >

    <h2>GET YOUR GRADES UP</h2>
    <p>Your papers are not your problem anymore.</p>
    {/* <button type="button" className={`btn btn-primary `}  data-toggle="modal" data-target="#exampleModal">
    Place Order
</button> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Place Order
</button>
    {/* <button className={`btn btn-primary `}>Place Order</button> */}
    </div>
    </div>
    <div className= "about_container container p-4" >
      <h4 className='py-2 mt-2'>
      The Fleet of Qualified Online Course Attendants to Help You Get Through Your Tough classNamees!
      </h4>
      <p>
      Any exceptional student would thrive on increased className participation, timely submission of assignments, excellent quizzes, and ultimately higher grades. Guess what? Students want someone who is highly skilled and qualified to assist them in their online classNamees. We have a pool of highly skilled online className guide specialists working around the clock to ensure that no one can outwit you in the future. Approach the students who are the part of our online classNamees immediately, and don't delay.
      </p>
      <h4 className='py-2 mt-2'>
      Native Online className Participants
      </h4>
      <p>
      Our online className team includes native experts. Because Online expert className has native speakers all over the world, you should know that when you contact us for assistance with an online className because this may make your decision-making easier.
      </p>
      <h4 className='py-2 mt-2'>
      Helpers from Subject Specialists
      </h4>
      <p>
      One concern that pushes students toward online instructors is their subject knowledge. Every subject is covered by a subject specialist in the Online expert className. Our online instructors will alleviate your complicated course stress.
      </p>
      <h4 className='py-2 mt-2'>
      Highly Skilled and Qualified
      </h4>
      <p>
      We only hire discipline experts with a Ph.D. on our team. Your className will benefit greatly from our expert online instructor.
      </p>
    </div>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal_content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Contact US</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
     <OrderForm />
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default About
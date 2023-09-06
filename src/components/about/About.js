import React from 'react'
import styles from "./about.module.css"
import OrderForm from '../common/OrderForm'

function About() {
  return (
    <div>
      <div className={styles.about_order_section}>
    <img  src='unviersity.jpg' alt='university' className={styles.about_img} />
    <div className={`${styles.place_order}`}>

    <h2>GET YOUR GRADES UP</h2>
    <p>Your papers are not your problem anymore.</p>
    {/* <button type="button" className={`btn btn-primary `}  data-toggle="modal" data-target="#exampleModal">
    Place Order
</button> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Place Order
</button>
    {/* <button className={`btn btn-primary `}>Place Order</button> */}
    </div>
    </div>
    <div className={`${styles.about_container} container p-4`}>
      <h4 className='py-2 mt-2'>
      The Fleet of Qualified Online Course Attendants to Help You Get Through Your Tough Classes!
      </h4>
      <p>
      Any exceptional student would thrive on increased class participation, timely submission of assignments, excellent quizzes, and ultimately higher grades. Guess what? Students want someone who is highly skilled and qualified to assist them in their online classes. We have a pool of highly skilled online class guide specialists working around the clock to ensure that no one can outwit you in the future. Approach the students who are the part of our online classes immediately, and don't delay.
      </p>
      <h4 className='py-2 mt-2'>
      Native Online Class Participants
      </h4>
      <p>
      Our online class team includes native experts. Because Online expert class has native speakers all over the world, you should know that when you contact us for assistance with an online class because this may make your decision-making easier.
      </p>
      <h4 className='py-2 mt-2'>
      Helpers from Subject Specialists
      </h4>
      <p>
      One concern that pushes students toward online instructors is their subject knowledge. Every subject is covered by a subject specialist in the Online expert class. Our online instructors will alleviate your complicated course stress.
      </p>
      <h4 className='py-2 mt-2'>
      Highly Skilled and Qualified
      </h4>
      <p>
      We only hire discipline experts with a Ph.D. on our team. Your class will benefit greatly from our expert online instructor.
      </p>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Contact US</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     <OrderForm />
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default About
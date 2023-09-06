import React from 'react'
import styles from "./contact.module.css"
import OrderForm from '../common/OrderForm'
function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className="row container my-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center" >
          <div className='col-8'>
            <h3>Need help with anything?</h3>
            <h3>Feel Free to contact us</h3>

            <p>
              The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 " >
          <OrderForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
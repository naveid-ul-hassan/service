import React from 'react'
// import styles from "./Services.module.css"
import styles from "./Services.module.css";
import ServiceCard from '../common/ServiceCard';
function Services() {
  return (
    <div className={`py-4 ${styles.service_container}`}>
      <div className='row'>
      <h4 className="text-center pt-4">Our Services</h4>
      <h2 className="text-center ">Find The Right Plan</h2>
      
      </div>
      <div className='row m-3 justify-content-center'>
          <ServiceCard/>
      </div>

    </div>
  )
}

export default Services
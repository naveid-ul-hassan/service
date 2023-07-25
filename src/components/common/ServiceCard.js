import React from 'react'
import styles from "./servicecard.module.css"
import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'
function ServiceCard() {
    return (
        <div className=' row justify-content-between'>
             <div className={`${styles.servicecard_container}`}>
                <h2 className={styles.course_tag}>Cource Name</h2>
                <div className='d-flex justify-content-center align-items-center'> <h2> $20.00 </h2><span> / course</span></div>
                <button type="button" className="btn btn-primary my-2">Get Started</button>
                <ul className={styles.course_points}>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                </ul>
                 <Link to="/servicedetail" className="btn btn-primary">hello</Link>
            </div>
            <div className={`${styles.servicecard_container}`}>
                <h2 className={styles.course_tag}>Cource Name</h2>
                <div className='d-flex justify-content-center align-items-center'> <h2> $20.00 </h2><span> / course</span></div>
                <button type="button" className="btn btn-primary my-2">Get Started</button>
                
                <ul className={styles.course_points}>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                </ul>
                <p>Learn More</p>
            </div> 
            <div className={`${styles.servicecard_container}`}>
                <h2 className={styles.course_tag}>Cource Name</h2>
                <div className='d-flex justify-content-center align-items-center'> <h2> $20.00 </h2><span> / course</span></div>
                <button type="button" className="btn btn-primary my-2">Get Started</button>
                
                <ul className={styles.course_points}>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                </ul>
                <p>Learn More</p>
            </div>
        </div>
    )
}

export default ServiceCard
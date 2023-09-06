import React from 'react'
import styles from "./servicecard.module.css"
import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'
import ServiceDetailComp from './servicedetail/ServiceDetailComp'
function ServiceCard() {
    const componentonedata={
        tittle:"course tittle one",
        description:`The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century. An unknown printer used a scrambled version of Cicero's philosophical book "De Finibus Bonorum et Malorum", written in 45 BC, to create filler text.`,
        packagedetail:{
            basic:"basic package tittle one",
            standard:"standard pakg",
            premium:"premium package"
        }
    }
    const componenttwodata={
        tittle:"course tittle two",
        description:`The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century. An unknown printer used a scrambled version of Cicero's philosophical book "De Finibus Bonorum et Malorum", written in 45 BC, to create filler text.`,
        packagedetail:{
            basic:"basic package tittle two",
            standard:"standard pakg",
            premium:"premium package"
        }
    }
    const componentthreedata={
        tittle:"course tittle three",
        description:`The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century. An unknown printer used a scrambled version of Cicero's philosophical book "De Finibus Bonorum et Malorum", written in 45 BC, to create filler text.`,
        packagedetail:{
            basic:"basic package tittle three",
            standard:"standard pakg",
            premium:"premium package"
        }
    }
    return (
        <div className=' row justify-content-between'>
             <div className={`${styles.servicecard_container}`}>
                <h2 className={styles.course_tag}>Cource Name</h2>
                <div className='d-flex justify-content-center align-items-center'> <h2> $20.00 </h2><span> / course</span></div>
                {/* <button type="button" className="btn btn-primary my-2">Get Started</button> */}
                <ul className={styles.course_points}>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                </ul>
                 <Link to="/servicedetail" state={componentonedata} className="btn btn-primary">Learn More</Link>
            </div>
            <div className={`${styles.servicecard_container}`}>
                <h2 className={styles.course_tag}>Cource Name</h2>
                <div className='d-flex justify-content-center align-items-center'> <h2> $20.00 </h2><span> / course</span></div>
                {/* <button type="button" className="btn btn-primary my-2">Get Started</button> */}
                <ul className={styles.course_points}>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                </ul>
                <Link to="/servicedetail" state={componenttwodata} className="btn btn-primary">Learn More</Link>
            </div> 
            <div className={`${styles.servicecard_container}`}>
                <h2 className={styles.course_tag}>Cource Name</h2>
                <div className='d-flex justify-content-center align-items-center'> <h2> $20.00 </h2><span> / course</span></div>
                {/* <button type="button" className="btn btn-primary my-2">Get Started</button> */}
                <ul className={styles.course_points}>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                </ul>
                <Link to="/servicedetail" state={componentthreedata} className="btn btn-primary">Learn More</Link>
            </div>
        </div>
    )
}
export default ServiceCard
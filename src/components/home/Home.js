import React from 'react'
import styles from "./Home.module.css"
function Home() {
  return (
    <div className={styles.home_container} >
      <div className="row container">
  <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center" >
    <div className='col-8'>
    <h3>The best workspace</h3>
    <h3>crafted for your</h3>
    <h3>Business</h3>
    <p>
    The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century.
    </p>
    </div>
</div>
  <div className ="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center" >
    <img width={350} src='homeright.png' />
  </div>
</div>
      </div>
  )
}

export default Home
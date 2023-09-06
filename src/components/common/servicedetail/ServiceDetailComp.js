import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PackageDetail from './PackageDetail'
import Slider from "react-slick";
import styles from './servicedetail.module.css'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} styles.next-arrow`}
            style={{ ...style, display: "block", background: "black", right: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", left: "20px" }}
            onClick={onClick}
        />
    );
}

function ServiceDetailComp() {
    const location = useLocation()
    const componentdata = location.state;
    console.log("ajksdfjkas", componentdata)
    const [tab, settab] = useState("basic_pakg")


    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className='row my-4'>
            <div className='col-lg-8 px-4'>
                <h2 className='p-2'>{componentdata?.tittle}</h2>
                <div className={`mx-4 my-3  ${styles.slider_tag}`}>
                    <Slider {...settings} >
                        <div>
                            <img src="avatar-1.jpg" className={styles.slider_img} />
                        </div>
                        <div>
                            <img src="avatar-2.jpg" className={styles.slider_img} />
                        </div>
                        <div>
                            <img src="avatar-3.jpg" className={styles.slider_img} />
                        </div>

                    </Slider>
                </div>
                <p>{componentdata?.description}</p>
                <h2 className='p-2'>Tittle 2</h2>
                <ul >
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                    <li>The Lorem Ipsum text used </li>
                </ul>
            </div>
            <div className='col-lg-4'>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="basic-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Basic</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="standard-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Standard</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="premium-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Premium</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="basic-tab"><PackageDetail data={componentdata?.packagedetail?.basic} /></div>
                    <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="standard-tab"><PackageDetail data={componentdata?.packagedetail?.standard} /></div>
                    <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="premium-tab"><PackageDetail data={componentdata?.packagedetail?.premium} /></div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailComp
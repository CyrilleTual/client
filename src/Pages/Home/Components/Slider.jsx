import React from 'react';
import styles from './slider.module.css'
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../../assets/img/slider/1.jpg';
import img2 from '../../../assets/img/slider/2.jpg'


function mySlider() {

     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
     };


  return (
    <div className={styles.sliderSlick}>

          <Slider {...settings}>
            <div>
            <img src={img1} alt="promo noel" />
            </div>
            <div>
            <img src={img2} alt="promo noel" />
            </div>
          </Slider>
    </div>
  );
}

export default mySlider
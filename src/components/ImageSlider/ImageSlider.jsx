"use client"
import React, { Component } from "react";
import s from './ImageSlider.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2
      };
      return (
        <div className="slider-container slider-my">
          <Slider {...settings}>
            <div>
              <img src={"https://jjji.ru/300x200"} width={300} height={200} />
            </div>
            <div>
              <img src={"https://jjji.ru/300x200"} width={300} height={200}/>
            </div>
            <div>
              <img src={"https://jjji.ru/300x200"} width={300} height={200}/>
            </div>
            <div>
              <img src={"https://jjji.ru/300x200"}  width={300} height={200} />
            </div>
            <div>
              <img src={"https://jjji.ru/300x200"} width={300} height={200} />
            </div>
            <div>
              <img src={"https://jjji.ru/300x200"} width={300} height={200}/>
            </div>
            <div>
              <img src={"https://jjji.ru/300x200"} width={300} height={200}/>
            </div>
            <div>
              <img src={"https://jjji.ru/300x200"}  width={300} height={200} />
            </div>
          </Slider>
        </div>
      );
}
 
export default ImageSlider;
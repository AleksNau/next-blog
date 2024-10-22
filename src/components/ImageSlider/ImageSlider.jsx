"use client";
import React, { Component } from "react";
import s from "./ImageSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testingInfo } from "../../app/data/testData";

const ImageSlider = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
  };
  return (
    <div className="slider-container slider-my">
      <Slider {...settings}>
        {testingInfo?.map((item, index) => {
          return (
            <div key={index} onClick={()=>console.log(item.value)}>
              <img src={item.value} width={150} alt={"slider-image"} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;

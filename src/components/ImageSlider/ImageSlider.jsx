"use client";
import React, { Component } from "react";
import s from "./ImageSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testingInfo } from "../../app/data/testData";

const ImageSlider = ({data,title}) => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className="slider-container slider-my">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div key={index} onClick={()=>console.log(item.value)}>
              <img src={item} width={150} alt={`${title}${index}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;

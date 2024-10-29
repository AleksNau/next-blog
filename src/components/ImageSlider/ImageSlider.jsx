"use client";
import React, { useContext } from "react";
import s from "./ImageSlider.module.scss";
import { testingInfo } from "../../app/data/testData";
import {MyContext} from "@/context/MyContext";

const ImageSlider = ({data,title}) => {
  const {handleCardClick} = useContext(MyContext);

  return (
    <div className={s.container}>
    
        {data?.map((item, index) => {
          return (
            <div key={index} onClick={()=>handleCardClick(item)}>
              <img src={item} width={150} alt={`${title}${index}`} />
            </div>
          );
        })}
    
    </div>
  );
};

export default ImageSlider;

"use client";
import React, { useContext,useRef } from "react";
import s from "./ImageSlider.module.scss";
import { testingInfo } from "../../app/data/testData";
import {MyContext} from "@/context/MyContext";

const ImageSlider = ({data,title}) => {
  const {handleCardClick} = useContext(MyContext);
  const list = useRef(null)
  return (
    <div className={s.wrapper}>
    <div className={s.list} ref={list}>
      <button type={'button'} className={s.before} onClick={()=> {
       list.current.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
      });
      }}> &#8592;</button>
      <button type={'button'} className={s.next} onClick={()=> {
         list.current.scrollBy({
          top: 0,
          left: -300,
          behavior: 'smooth'
        });
      }}>&#8594;</button>
    {data?.map((item, index) => {
          return (
            <div key={index} onClick={()=>handleCardClick(item)}>
              <img className={s.item} src={item} width={250} alt={`${title}${index}`} />
            </div>
          );
        })}
    </div>
    </div>
  );
};

export default ImageSlider;

"use client"
import React,{useContext} from 'react';
import s from "./Popup.module.scss";
import {MyContext} from "@/context/MyContext";

const Popup = () => {
    const {selectedCard,handleCardClick} = useContext(MyContext);
    function closeAllPopups() {
        handleCardClick("");
      }
    return (
        <div
        className={selectedCard ? (`${s.popup} ${s.image_zoom} ${s.popup_opened}`) : (`${s.popup}`)}
        onClick={() => {
            closeAllPopups();
        }}
      >
        <div
          className={s.conteiner_zoom}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className={s.close_button}
            onClick={() => closeAllPopups()}
          />
          <img src={selectedCard} alt={"что то"} className={s.popup__image} />
        </div>
      </div>
    );
};

export default Popup;
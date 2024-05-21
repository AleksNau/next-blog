'use client'

import React, {useContext, useEffect, useState} from 'react';
import s from "./themeToggle.module.scss";
import Image from "next/image";
import {ThemeContext} from "@/context/ThemeContext";

const ThemeToggle = () => {
    const {theme, toggle} = useContext(ThemeContext)
console.log(theme)

    return (
        <div className={s.container} onClick={toggle} style={theme==='dark'?{backgroundColor:"#ffffff"}:{backgroundColor:"#0f172a"}}>
            <Image src={'/moon.png'} alt={'moon'} width={14} height={14}/>
            <div className={`${s.ball} ${theme==='dark'? s.ballleft : s.ballright}`} style={theme==='dark'?{left:1,backgroundColor:"#0f172a"}:{right:1,backgroundColor:"#ffffff"}}></div>
            <Image src={'/sun.png'} alt={'sun'} width={14} height={14}/>
        </div>
    );
};

export default ThemeToggle;
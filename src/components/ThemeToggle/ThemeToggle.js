import React from 'react';
import s from "./themeToggle.module.scss";
import Image from "next/image";

const ThemeToggle = () => {
    return (
        <div className={s.container}>
<Image src={'/moon.png'} alt={'moon'} width={14} height={14}/>
<div className={s.ball}></div>
            <Image src={'/sun.png'} alt={'sun'} width={14} height={14}/>
        </div>
    );
};

export default ThemeToggle;
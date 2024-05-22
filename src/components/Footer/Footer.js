import React from 'react';
import s from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.logo}>
                    <Image src={'/logo.png'} alt={'logo'} width={50} height={50}></Image>
                <h2 className={s.title}>Lamablog</h2>
                </div>
            </div>
            <div className={s.links}></div>
        </div>
    );
};

export default Footer;
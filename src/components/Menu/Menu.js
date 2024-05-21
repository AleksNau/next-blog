import React from 'react';
import s from "./menu.module.scss";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
    return (
        <div className={s.container}>
            <h2>Whats hot</h2>
            <h1>Most Popular</h1>
            <div className={s.items}>
                <Link className={s.item} href={'/'}>
                    <div className={s.imageContainer}>
                        <Image src={'/p1.jpeg'} alt={'image'} className={s.image}/>
                    </div>
                    <div className={s.textContainer}>
                        <span className={`${s.category} ${s.travel}`}>Travel</span>
                        <h3 className={s.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <div className={s.detail}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}>10.03.23</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
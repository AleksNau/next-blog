import s from "./card.module.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = () => {
    return (
        <div className={s.container}>
            <div className={s.imageContainer}>
                <Image className={s.image} src={'/p1.jpeg'} alt={'card'} fill/>
            </div>
            <div className={s.textContainer}>
                <div className={s.detail}>
                    <span className={s.date}>11.02.2023</span>
                    <span className={s.category}> CULTURE</span>
                </div>
                <Link href={'/'}>
                    <h2 className={s.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                </Link>
                <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
                    aspernatur atque delectus dolore doloremque excepturi expedita facere, impedit laudantium magni,
                    maxime praesentium tempore veniam? Atque ducimus fugiat maxime provident vitae.</p>
                <Link className={s.link} href={'/'}>Read More</Link>
            </div>
        </div>
    )
}


export default Card;
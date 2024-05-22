import React from 'react';
import s from "./menuPosts.module.scss";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({withImage}) => {
    return (
        <div className={s.items}>
            <Link className={s.item} href={'/'}>
                {withImage && (<div className={s.imageContainer}>
                    <Image src={'/p1.jpeg'} alt={'image'} className={s.image} fill/>
                </div>)}
                <div className={s.textContainer}>
                    <span className={`${s.category} ${s.travel}`}>Travel</span>
                    <h3 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                    <div className={s.detail}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 10.03.23</span>
                    </div>
                </div>
            </Link>
            <Link className={s.item} href={'/'}>
                {withImage && (<div className={s.imageContainer}>
                    <Image src={'/p1.jpeg'} alt={'image'} className={s.image} fill/>
                </div>)}
                <div className={s.textContainer}>
                    <span className={`${s.category} ${s.fashion}`}>Fashion</span>
                    <h3 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                    <div className={s.detail}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 10.03.23</span>
                    </div>
                </div>
            </Link>
            <Link className={s.item} href={'/'}>
                {withImage && (<div className={s.imageContainer}>
                    <Image src={'/p1.jpeg'} alt={'image'} className={s.image} fill/>
                </div>)}
                <div className={s.textContainer}>
                    <span className={`${s.category} ${s.culture}`}>Culture</span>
                    <h3 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                    <div className={s.detail}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 10.03.23</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MenuPosts;
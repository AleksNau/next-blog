import s from "./card.module.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({title,category,desc,item}) => {

    return (
        <div className={s.container}>
            <div className={s.imageContainer}>
                <Image className={s.image} src={'/p1.jpeg'} alt={'card'} fill/>
            </div>
            <div className={s.textContainer}>
                <div className={s.detail}>
                    <span className={s.date}>{item.createdAt.substring(0, 10)}</span>
                    <span className={s.category}> {category}</span>
                </div>
                <Link href={`/posts/post?id=${item.id}`} item={item}>
                    <h2 className={s.title}>{title}</h2>
                </Link>
                <p className={s.description}>{desc}</p>
                <Link className={s.link} href={'/'}>Read More</Link>
            </div>
        </div>
    )
}


export default Card;
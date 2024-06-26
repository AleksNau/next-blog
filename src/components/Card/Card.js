import s from "./card.module.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({title, category, desc, item, image="/p1.jpeg"}) => {

    return (
        <div className={s.container}>{ image &&
           ( <div className={s.imageContainer}>
                <Image className={s.image} src={image} alt={'card'} fill/>
            </div>)}
            <div className={s.textContainer}>
                <div className={s.detail}>
                    <span className={s.date}>{item.createdAt.substring(0, 10)}</span>
                    <span className={s.category}> {category}</span>
                </div>
                <Link href={`/posts/${item.slug}`} item={item}>
                    <h2 className={s.title}>{title}</h2>
                </Link>
<div className={s.description} dangerouslySetInnerHTML={{ __html: desc.slice(0,45) }}/>

                <Link className={s.link} href={'/'}>Read More</Link>
            </div>
        </div>
    )
}


export default Card;
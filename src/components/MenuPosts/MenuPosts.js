import React from 'react';
import s from "./menuPosts.module.scss";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({withImage,data}) => {
    return (
        <div className={s.items}>
            {data.reverse().slice(0, 3).map(item => {
                return (
                    <Link className={s.item} href={`/posts/${item.slug}`} key={item.id}>
                        {withImage && (<div className={s.imageContainer}>
                            <Image src={item.img} alt={item.title} className={s.image} fill/>
                        </div>)}
                        <div className={s.textContainer}>
                            <span className={`${s.category} ${s.travel}`}>{item.catSlug}</span>
                            <h3 className={s.postTitle}>{item.title}</h3>
                            <div className={s.detail}>
                                <span className={s.username}>{data.user?.name}</span>
                                <span className={s.date}>{data.createdAt}</span>
                            </div>
                        </div>
                    </Link>)

            })}
        </div>
    );
};

export default MenuPosts;
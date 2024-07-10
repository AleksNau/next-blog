import React from 'react';
import s from "./categoryList.module.scss";
import Image from "next/image";
import Link from "next/link";




const CategoryList = async ({data}) => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Популярные теги</h1>
            <div className={s.categories}>
                {data.map(item => {
                    return (
                        <Link key={item.id} href={`/category?cat=${item.slug}`}
                              className={`${s.category} ${s[item.slug]}`}>
                            <Image src={item.img} width={32} height={32} className={s.image} alt={item.title}/>
                            {item.title}
                        </Link>)
                })}
            </div>

        </div>
    );
};

export default CategoryList;
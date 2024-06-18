import React from 'react';
import s from "./categoryList.module.scss";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('Не та категория')
    }

    return res.json()
}


const CategoryList = async () => {

    const data = await getData();
    return (
        <div className={s.container}>
            <h1 className={s.title}>Popular Categories</h1>
            <div className={s.categories}>
                {data.map(item => {
                    return (
                        <Link key={item.id} href={'/pages?cat=style'}
                              className={`${s.category} ${s[item.title]}`}>
                            <Image src={item.img} width={32} height={32} className={s.image} alt={item.title}/>
                            {item.title}
                        </Link>)

                })}
            </div>

        </div>
    );
};

export default CategoryList;
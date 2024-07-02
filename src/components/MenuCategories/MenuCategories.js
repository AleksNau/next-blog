import React from 'react';
import s from "./menuCategories.module.scss";
import Link from "next/link";
import Image from "next/image";

const MenuCategories = ({categories}) => {
    return (
        <div className={s.categoryList}>

            {categories.map(item => {
                return (
                    <Link key={item.id} href={`/pages?cat=${item.slug}`} className={`${s.categoryItem} ${s[item.slug]}`}>
                        <Image src={item.img} width={32} height={32} className={s.image} alt={item.title}/>
                        {item.title}</Link>)

            })}


        </div>
    );
};

export default MenuCategories;
import React from 'react';
import s from "./menuCategories.module.scss";
import Link from "next/link";

const MenuCategories = () => {
    return (
        <div className={s.categoryList}>
            <Link href={'/blog?cat=style'} className={`${s.categoryItem} ${s.fashion}`}>Fashion</Link>
            <Link href={'/blog?cat=style'} className={`${s.categoryItem} ${s.travel}`}>Travel</Link>
            <Link href={'/blog?cat=style'} className={`${s.categoryItem} ${s.culture}`}>Culture</Link>
        </div>
    );
};

export default MenuCategories;
import React from 'react';
import s from "./categoryList.module.scss";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}></h1>
            <div className={s.categories}>
                    <Link href={'/blog?cat=style'} className={`${s.category} ${s.style}`}>
                        <Image src={'/style.png'} width={32} height={32} className={s.image}/>
                    </Link>
            </div>
        </div>
    );
};

export default CategoryList;
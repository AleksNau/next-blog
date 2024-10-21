'use client'
import React from 'react';
import s from "./Pagination.module.scss";
import {useRouter} from "next/navigation";

const Pagination = ({page, hasPrev, hasNext}) => {
    const router = useRouter()
    const {pathname} = useRouter()
    console.log('pathname :' + pathname)

    return (
        <div className={s.container}>
            <button className={s.button} disabled={!hasPrev} onClick={() => router.push(`?page= ${page - 1}`)}>Назад
            </button>
            <button className={s.button} disabled={!hasNext} onClick={() => router.push(`?page= ${page + 1}`)}>Вперед
            </button>
        </div>
    );
};

export default Pagination;
import React from 'react';
import s from "./cardlist.module.scss";
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";
import Card from "@/components/Card/Card";


const getData = async (page) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`,{cache:'no-store'});

    if (!res.ok){
        throw new Error('Нет постов')
    }

    return res.json()
}

const CardList = async ({page}) => {
    const {posts,count} = await getData(page);

    const POST_PER_PAGE = 3;
    const hasPrev = POST_PER_PAGE * (page - 1) >0
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className={s.container}>
            <h1 className={s.title}>Recent Posts</h1>
            <div className={s.data}>


                {posts?.map(item => {
                    return(<Card key={item.id} title={item.title} category={item.catSlug} desc={item.desc}/> )
                })}

            </div>
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
        </div>
    );
};

export default CardList;
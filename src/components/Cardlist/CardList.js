import React from 'react';
import s from "./cardlist.module.scss";
import Pagination from "@/components/Pagination/Pagination";

import Card from "@/components/Card/Card";


const CardList = async ({page,data,amount = 0}) => {

    const POST_PER_PAGE = 3;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < amount;

    return (
        <div className={s.container}>

            <h1 className={s.title}>Недавние посты</h1>
            <div className={s.data}>

                {data?.map(item => {

                    return (
                        <Card key={item.id} title={item.title} category={item.catSlug} desc={item.desc} item={item} image={item.img}/>)
                })}

            </div>
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
        </div>
    );
};

export default CardList;
import React from 'react';
import s from "./cardlist.module.scss";
import Pagination from "@/components/Pagination/Pagination";

const CardList = () => {
    return (
        <div className={s.container}>
            <Pagination/>
        </div>
    );
};

export default CardList;
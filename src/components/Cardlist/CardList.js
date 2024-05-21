import React from 'react';
import s from "./cardlist.module.scss";
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";
import Card from "@/components/Card/Card";

const CardList = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Recent Posts</h1>
            <div className={s.posts}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Pagination/>
        </div>
    );
};

export default CardList;
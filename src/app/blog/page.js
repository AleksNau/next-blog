import React from 'react';
import s from "./blog.module.scss";
import CardList from "@/components/Cardlist/CardList";
import Menu from "@/components/Menu/Menu";

const page = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Style Blog</h1>
            <div className={s.content}>
                <CardList/>
                <Menu/>
            </div>
        </div>
    );
};

export default page;
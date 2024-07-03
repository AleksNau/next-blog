import React from 'react';
import s from "./menu.module.scss";

import MenuPosts from "@/components/MenuPosts/MenuPosts";
import MenuCategories from "@/components/MenuCategories/MenuCategories";
import {getCategoryData, getData} from "@/app/utils/data";

const Menu = async () => {
    const categories = await getCategoryData();
    const {posts} = await getData();

    return (
        <div className={s.container}>

            {/* categories*/}
            <h2 className={s.subtitle}>Поиск по теме</h2>
            <h1 className={s.title}>Категории</h1>
            <MenuCategories categories={categories}/>

            {/* whats hot*/}
            <h2 className={s.subtitle}>Обсуждаемое</h2>
            <h1 className={s.title}>Самое популярное</h1>
            <MenuPosts withImage={true} data={posts}/>
        </div>
    );
};

export default Menu;
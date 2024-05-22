import React from 'react';
import s from "./menu.module.scss";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "@/components/MenuPosts/MenuPosts";
import MenuCategories from "@/components/MenuCategories/MenuCategories";

const Menu = () => {
    return (
        <div className={s.container}>
            <h2 className={s.subtitle}>Chosen by editor</h2>
            <h1 className={s.title}>Editors Pick</h1>
           <MenuPosts withImage={false}/>

            {/* categories*/}
            <h2 className={s.subtitle}>Discover by topic</h2>
            <h1 className={s.title}>Categories</h1>
<MenuCategories/>

            {/* whats hot*/}
            <h2 className={s.subtitle}>Whats hot</h2>
            <h1 className={s.title}>Most Popular</h1>
            <MenuPosts withImage={true}/>
        </div>
    );
};

export default Menu;
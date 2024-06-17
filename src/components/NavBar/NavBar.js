import React from 'react';
import s from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "@/components/AuthLinks/AuthLinks";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const NavBar = () => {
    return (
    <div className = {s.container} >
        <div className={s.social}>
            <Link href={"https://www.facebook.com/"} target={"_blank"}>
                <Image className={s.image} src={'/facebook.png'} alt={'facebook'} width={24} height={24}/>
            </Link>
            <Link href={"https://www.instagram.com/"} target={"_blank"}>
                <Image className={s.image} src={'/instagram.png'} alt={'instagram'} width={24} height={24}/>
            </Link>
            <Link href={"https://www.tiktok.com/"} target={"_blank"}>
                <Image className={s.image} src={'/tiktok.png'} alt={'tiktok'} width={24} height={24}/>
            </Link>
            <Link href={"https://m.youtube.com/?gl=RU&hl=ru"} target={"_blank"}>
                <Image className={s.image} src={'/youtube.png'} alt={'youtube'} width={24} height={24}/>
            </Link>
        </div>
        <div className={s.logo}>Настолки FUN</div>
        <div className={s.links}>
            <ThemeToggle/>
            <Link href={'/'} className={s.link}>Главная</Link>
            <Link href={'/'} className={s.link}>Контакты</Link>
            <Link href={'/'} className={s.link}>О нас</Link>
            <AuthLinks/>
        </div>
    </div>
);

};

export default NavBar;
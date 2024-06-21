import React from 'react';
import s from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "@/components/AuthLinks/AuthLinks";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { SlSocialVkontakte,SlSocialInstagram ,SlSocialYoutube,SlSocialFacebook } from "react-icons/sl";

const NavBar = () => {
    return (
        <div className={s.container}>
            <div className={s.social}>
                <Link href={"https://www.facebook.com/"} target={"_blank"}>
                    <SlSocialFacebook className={s.image} alt={'facebook'}/>
                </Link>
                <Link href={"https://www.instagram.com/"} target={"_blank"}>
                    <SlSocialInstagram className={s.image} alt={'instagram'}/>
                </Link>
                <Link href={"https://www.vkontakte.ru/"} target={"_blank"}>
                    <SlSocialVkontakte className={s.image} alt={'vkontakte'}/>
                </Link>
                <Link href={"https://m.youtube.com/?gl=RU&hl=ru"} target={"_blank"}>
                    <SlSocialYoutube className={s.image} alt={'youtube'}/>
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
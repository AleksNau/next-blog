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
            <Image src={'/facebook.png'} alt={'alt'} width={24} height={24}/>
            <Image src={'/instagram.png'} alt={'alt'} width={24} height={24}/>
            <Image src={'/tiktok.png'} alt={'alt'} width={24} height={24}/>
            <Image src={'/youtube.png'} alt={'alt'} width={24} height={24}/>
        </div>
        <div className={s.logo}> lamablog</div>
        <div className={s.links}>
            <ThemeToggle/>
            <Link href={'/'}>Homepage</Link>
            <Link href={'/'}>Contact</Link>
            <Link href={'/'}>About</Link>
            <AuthLinks/>
        </div>
    </div>
);

};

export default NavBar;
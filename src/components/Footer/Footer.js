import React from 'react';
import s from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.logo}>
                    <Image src={'/logo.png'} alt={'logo'} width={50} height={50}></Image>
                    <h2 className={s.logoText}>Lamablog</h2>
                </div>
                <p className={s.desc}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores autem, consequuntur, ea earum expedita explicabo inventore ipsam laboriosam minus molestiae optio quas, quibusdam quos repudiandae rerum voluptas voluptatum! Eaque.
                </p>
                <div className={s.icons}>
                <Image src={'/facebook.png'} alt={'icon'} width={18} height={18}/>
                <Image src={'/instagram.png'} alt={'icon'} width={18} height={18}/>
                <Image src={'/tiktok.png'} alt={'icon'} width={18} height={18}/>
                <Image src={'/youtube.png'} alt={'icon'} width={18} height={18}/>
                </div>
            </div>
            <div className={s.links}>
                <div className={s.list}>
                    <span className={s.listTitle}>Links</span>
                    <Link className={s.linkItem} href={'/'}>Home</Link>
                    <Link className={s.linkItem} href={'/'}>About</Link>
                    <Link className={s.linkItem} href={'/'}>Blog</Link>
                    <Link className={s.linkItem} href={'/'}>Contacts</Link>
                </div>
                <div className={s.list}>
                    <span className={s.listTitle}>Tags</span>
                    <Link className={s.linkItem} href={'/'}>Style</Link>
                    <Link className={s.linkItem} href={'/'}>Fashion</Link>
                    <Link className={s.linkItem} href={'/'}>Travel</Link>
                    <Link className={s.linkItem} href={'/'}>Coding</Link>
                </div>
                <div className={s.list}>
                    <span className={s.listTitle}>Social</span>
                    <Link className={s.linkItem} href={'/'}>Facebook</Link>
                    <Link className={s.linkItem} href={'/'}>Instagram</Link>
                    <Link className={s.linkItem} href={'/'}>Tiktok</Link>
                    <Link className={s.linkItem} href={'/'}>Youtube</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
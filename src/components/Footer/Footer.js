import React from 'react';
import s from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.logo}>
                    <Image src={'/logo.png'} alt={'logo'} width={50} height={50}/>
                    <h2 className={s.logoText}>Настолки FUN</h2>
                </div>
                <p className={s.desc}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores autem, consequuntur, ea earum expedita explicabo inventore ipsam laboriosam minus molestiae optio quas, quibusdam quos repudiandae rerum voluptas voluptatum! Eaque.
                </p>
                <div className={s.icons}>
                    <Link href={"https://www.facebook.com/"} target={"_blank"}>
                        <Image className={s.image} src={'/facebook.png'} alt={'icon'} width={18} height={18}/>
                    </Link>
                    <Link href={"https://www.instagram.com/"} target={"_blank"}>
                        <Image className={s.image} src={'/instagram.png'} alt={'icon'} width={18} height={18}/>
                    </Link>
                    <Link href={"https://www.tiktok.com/"} target={"_blank"}>
                        <Image className={s.image} src={'/tiktok.png'} alt={'icon'} width={18} height={18}/>
                    </Link>
                    <Link href={"https://m.youtube.com/?gl=RU&hl=ru"} target={"_blank"}>
                        <Image className={s.image} src={'/youtube.png'} alt={'icon'} width={18} height={18}/>
                    </Link>
                </div>
            </div>
            <div className={s.links}>
                <div className={s.list}>
                    <span className={s.listTitle}>Links</span>
                    <Link className={s.linkItem} href={'/'}>Главная</Link>
                    <Link className={s.linkItem} href={'/'}>О нас</Link>
                    <Link className={s.linkItem} href={'/'}>Блог</Link>
                    <Link className={s.linkItem} href={'/'}>Контакты</Link>
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
                    <Link className={s.linkItem} href={"https://www.facebook.com/"} target={"_blank"}>Facebook</Link>
                    <Link className={s.linkItem} href={"https://www.instagram.com/"} target={"_blank"}>Instagram</Link>
                    <Link className={s.linkItem} href={"https://www.tiktok.com/"} target={"_blank"}>Tiktok</Link>
                    <Link className={s.linkItem} href={"https://m.youtube.com/?gl=RU&hl=ru"} target={"_blank"}>Youtube</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import s from "./footer.module.scss";

import Link from "next/link";
import { SlSocialVkontakte,SlSocialInstagram ,SlSocialYoutube,SlSocialFacebook } from "react-icons/sl";
import { GiDiceShield } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className={s.container}>
            <div className={s.info}>
                <div className={s.logo}>
                    <GiDiceShield className={s.mainlogo} alt={'logo'}/>
                    <h2 className={s.logoText}>Настолки FUN</h2>
                </div>
                <p className={s.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores autem, consequuntur,
                    ea earum expedita explicabo inventore ipsam laboriosam minus molestiae optio quas, quibusdam quos
                    repudiandae rerum voluptas voluptatum! Eaque.
                </p>
                <div className={s.icons}>
                    <Link href={"https://www.facebook.com/"} target={"_blank"}>
                        <SlSocialFacebook className={s.image} alt={'facebook'}/>
                    </Link>
                    <Link href={"https://www.instagram.com/"} target={"_blank"}>
                        <SlSocialInstagram className={s.image} alt={'instagram'}/>
                    </Link>
                    <Link href={"https://www.Vkontakte.ru/"} target={"_blank"}>
                        <SlSocialVkontakte className={s.image} alt={'Vkontakte'}/>
                    </Link>
                    <Link href={"https://m.youtube.com/?gl=RU&hl=ru"} target={"_blank"}>
                        <SlSocialYoutube className={s.image} alt={'youtube'}/>
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
                    <Link className={s.linkItem} href={"https://m.youtube.com/?gl=RU&hl=ru"}
                          target={"_blank"}>Youtube</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
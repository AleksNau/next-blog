'use client'
import React, {useState} from 'react';
import s from "./authLinks.module.scss";
import Link from "next/link";
import {useUser} from "@clerk/clerk-react";
import {signOut} from "next-auth/react"

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const {user,isLoaded,isSignedIn} = useUser();
    console.log(isSignedIn)
    return (
        <>
            {!isSignedIn ? (<Link href={'/login'} className={s.link}>Войти</Link>)
                : (<>
                    <Link href={'/write'} className={s.link}>Новый пост</Link>
                    <span className={s.link} onClick={() => {
                        signOut()
                    }}>Выйти</span>
                </>)}

            <div className={s.burger} onClick={() => setOpen(!open)}>
                <span className={s.line}/>
                <span className={s.line}/>
                <span className={s.line}/>
            </div>

            {open && (
                <div className={s.resMenu}>
                    <Link href={'/'}>Главная</Link>
                    <Link href={'/'}>О нас</Link>
                    <Link href={'/'}>Контакты</Link>
                    {!isSignedIn ? (<Link href={'/login'}>Войти</Link>)
                        : (<>
                            <Link href={'/write'}>Новый пост</Link>
                            <span onClick={() => signOut()}>Выйти</span>
                        </>)}
                </div>)}
        </>
    );
};

export default AuthLinks;
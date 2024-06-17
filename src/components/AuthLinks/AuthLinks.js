'use client'
import React, {useState} from 'react';
import s from "./authLinks.module.scss";
import Link from "next/link";
import {SignOut} from "@/app/utils/signout";
import {useSession} from "next-auth/react";
import { signOut } from "next-auth/react"

const AuthLinks = () => {
    const [open,setOpen] = useState(false);
    const {status} = useSession()

    return (
        <>
            {status==='unauthenticated' ? (<Link href={'/login'} className={s.link}>Войти</Link>)
                : (<>
                    <Link href={'/write'} className={s.link}>Новый пост</Link>
                    <span className={s.link} onClick={()=> {
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
                    {status === 'unauthenticated' ? (<Link href={'/login'}>Login</Link>)
                        : (<>
                            <Link href={'/write'}>Write</Link>
                            <span onClick={()=>SignOut()}>Logout</span>
                        </>)}
                </div> ) }
        </>
    );
};

export default AuthLinks;
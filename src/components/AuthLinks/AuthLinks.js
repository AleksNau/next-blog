'use client'
import React, {useState} from 'react';
import s from "./authLinks.module.scss";
import Link from "next/link";
import {SignOut} from "@/app/utils/signout";
import {useSession} from "next-auth/react";
import { signOut } from "next-auth/react"

const AuthLinks = () => {
    const [open,setOpen] = useState(false);
    const {data,status} = useSession()
    //notauthonticated

    console.log(status)

    return (
        <>
            {status==='unauthenticated' ? (<Link href={'/login'} className={s.link}>Login</Link>)
                : (<>
                    <Link href={'/write'} className={s.link}>Write</Link>
                    <span className={s.link} onClick={()=> {
                        signOut()
                    }}>Logout</span>
                </>)}

            <div className={s.burger} onClick={() => setOpen(!open)}>
                <span className={s.line}/>
                <span className={s.line}/>
                <span className={s.line}/>
            </div>

            {open && (
                <div className={s.resMenu}>
                    <Link href={'/'}>Homepage</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact</Link>
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
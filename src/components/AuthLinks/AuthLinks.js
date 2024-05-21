'use client'
import React, {useState} from 'react';
import s from "./authLinks.module.scss";
import Link from "next/link";

const AuthLinks = () => {
    const [open,setOpen] = useState(false);
    //notauthonticated
    const status= false;

    return (
        <>
            {status===false ? (<Link href={'/login'} className={s.link}>Login</Link>)
                : (<>
                    <Link href={'/write'} className={s.link}>Write</Link>
                    <span className={s.link}>Logout</span>
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
                    {status===false ? (<Link href={'/login'}>Login</Link>)
                        : (<>
                            <Link href={'/write'}>Write</Link>
                            <span>Logout</span>
                        </>)}
                </div> ) }
        </>
    );
};

export default AuthLinks;
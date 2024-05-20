import React from 'react';
import s from "./authLinks.module.scss";
import Link from "next/link";

const AuthLinks = () => {

    //notauthonticated
    const status= false;

    return (
        <>
            {status===false ? (<Link href={'/login'}>Login</Link>)
                : (<>
                    <Link href={'/write'}>Write</Link>
                    <span className={s.link}>Logout</span>
                </>)}
        </>
    );
};

export default AuthLinks;
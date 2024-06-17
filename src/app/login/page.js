'use client';
import React, {useEffect} from 'react';
import s from "./loginPage.module.scss";
import {SignIn} from '../utils/signin'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";



const LoginPage = () => {
    const {status} = useSession()

    const router = useRouter()


    useEffect(() => {

        if (status === 'authenticated') {
            router.push('/')
        }
    }, [status]);

    return (
        <div className={s.container}>
<div className={s.wrapper}>
    <div className={s.socialButton} onClick={() => {
        SignIn()
    }}>Sign in with Google</div>
    <div className={s.socialButton}>Sign in with Github</div>
    <div className={s.socialButton}>Sign in with Facebook</div>
</div>
        </div>
    );
};

export default LoginPage;
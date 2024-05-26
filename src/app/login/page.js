'use client';
import React from 'react';
import s from "./loginPage.module.scss";
import {SignIn} from '../utils/signin'



const LoginPage = () => {
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
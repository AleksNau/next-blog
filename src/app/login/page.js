'use client';
import React, {useEffect} from 'react';
import s from "./loginPage.module.scss";

import {signIn} from "next-auth/react"
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {SignIn} from "@/app/utils/SignInButton";



const LoginPage = () => {
    const {status} = useSession()
    const router = useRouter()


    useEffect(() => {

        if (status === 'authenticated') {
            router.push('/')
        }
    }, [status,router]);

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <form
                    action={() => {
                        SignIn()
                    }}
                >
                    <button type="submit">Signin with Google</button>
                </form>
                {/*<div className={s.socialButton} onClick={() => {
                    signIn("google")
                }}>Sign in with Google
                </div>*/}
                <div className={s.socialButton}>Sign in with Github</div>
                <div className={s.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    );
};

export default LoginPage;
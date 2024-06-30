"use client"
import {useEffect} from 'react';
import s from "./loginPage.module.scss";

//import {signIn} from "next-auth/react"
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import { signIn } from "@/auth.ts"
import {loginOath} from "@/app/utils/signin";


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
                <div className={s.socialButton} onClick={() => {
                   loginOath().then(res => console.log(res))
                }}>Sign in with Google
                </div>
                <div className={s.socialButton}>Sign in with Github</div>
                <div className={s.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    );
};

export default LoginPage;
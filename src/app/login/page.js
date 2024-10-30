'use client';
import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
import {useUser} from "@clerk/clerk-react";
import s from './loginPage.module.scss'
import {SignIn} from "@clerk/clerk-react";


const LoginPage = () => {
    
    const router = useRouter()

    const {isSignedIn} = useUser();
    useEffect(() => {

        if (isSignedIn) {
            router.push('/')
        }
    }, [router,isSignedIn]);

    return (
        <div className={s.container}>
            <SignIn/>
        </div>
    );
};

export default LoginPage;

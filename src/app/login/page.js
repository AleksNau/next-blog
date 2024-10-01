'use client';
import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
import {useUser} from "@clerk/clerk-react";
import s from './loginPage.module.scss'
import {SignIn} from "@clerk/clerk-react";


const LoginPage = () => {
    
    const router = useRouter()

    const {user,isLoaded,isSignedIn} = useUser();
    useEffect(() => {

        if (isSignedIn) {
            router.push('/')
        }
    }, [router]);

    return (
        <div className={s.container}>
            <SignIn/>
        </div>
    );
};

export default LoginPage;

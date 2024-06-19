'use client'
import React, {useState} from 'react';
import s from "./comments.module.scss";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import {useSession} from "next-auth/react";

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (!res) {
        const error = new Error(data.message);
        throw error;
    }
    return data;
}


const Comments = ({postSlug}) => {
    const {status} = useSession();
    const {data, mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);


    const [desc, setDesc] = useState("")

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({desc, postSlug})
        });
        mutate();
    }


    return (
        <div className={s.container}>
            <h2 className={s.title}></h2>
            <div className={s.comments}>
                {status === 'authenticated' ? (
                    <div className={s.write}>
                        <textarea className={s.input} placeholder='write a comment'
                                  onChange={e => setDesc(e.target.value)}/>
                        <button className={s.button} onClick={() => handleSubmit()}>Send</button>
                    </div>
                ) : (<Link href={'/'}>Login to write a comment</Link>)
                }
                {isLoading ? ("Loading") : (data.map((item) => {
                    return (

                        <div className={s.comment} key={item.id}>
                            <div className={s.user}>
                                <Image src={item.user.image ? (item.user.image) : "./p1.jpg"} alt={'avatar'} width={50} height={50} className={s.image}/>
                                <div className={s.userInfo}>
                                    <span className={s.username}>{item.user.name}</span>
                                    <span className={s.date}>{item.createdAt}</span>
                                </div>
                            </div>
                            <p className={s.desc}>{item.desc}</p>
                        </div>
                    )
                }))}
            </div>
            <div></div>
        </div>
    );
};

export default Comments;
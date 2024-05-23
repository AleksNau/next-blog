import React from 'react';
import s from "./comments.module.scss";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated"

    return (
        <div className={s.container}>
            <h2 className={s.title}></h2>
            {status === 'authenticated' ? (
                <div className={s.write}>
                    <textarea className={s.input} placeholder='write a comment'/>
                    <button className={s.button}>Send</button>
                </div>
            ) :(<Link href={'/'}>Login to write a comment</Link>)
            }
            <div className={s.comments}>
                <div className={s.comment}>
                    <div className={s.user}>
                        <Image src={'/p1.jpeg'} width={50} height={50} className={s.image}/>
                        <div className={s.userInfo}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}>01.03.2024</span>
                        </div>
                    </div>
                    <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque natus quam. Ab, culpa cupiditate dolores et ex, excepturi facere ipsum, iure labore molestias nulla odio quibusdam quod saepe ullam!</p>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Comments;
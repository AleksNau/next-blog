'use client'

import s from "./featured.module.scss";
import Image from "next/image";
import {useRouter} from 'next/navigation'


const Featured = () => {
    const router = useRouter()
    return (
        <div className={s.container}>
            <h1 className={s.title}>
                <b>Главная новость ностолок!</b>
            </h1>
            <div className={s.post}>
                <div className={s.imgContainer}>
                    <Image className={s.image} src={'/p1.jpeg'} alt={'alt'} fill/>
                </div>
                <div className={s.textContainer}>
                    <h1 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta,
                        dignissimos earum error excepturi!</h1>
                    <p className={s.postDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea,
                        eum, id nesciunt non, placeat porro quae quia rem soluta voluptas voluptatem! Culpa dolore
                        eligendi fuga recusandae tempora, tenetur?</p>
                    <button className={s.postButton} onClick={() => router.push('/mainpost')}>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
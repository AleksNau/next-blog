import React from 'react';
import s from "./singlePage.module.scss";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";
import {getSinglePost} from "@/app/utils/data";




//Страница поста
const SinglePage = async ({params: {slug}}) => {
    //тут один пост по запросу
    const data = await getSinglePost(slug);

    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.textContainer}>
                    <h1 className={s.title}>{data.title}</h1>
                    <div className={s.user}>
                        <div className={s.userImageContainer}>
                            {data.user?.image && (<Image src={data.user.image} alt={'Аватарка пользователя'} fill className={s.avatar}/>)}
                        </div>
                        <div className={s.userTextContainer}>
                            <span className={s.username}>{data.user?.name}</span>
                            <span className={s.date}>{data.createdAt}</span>
                        </div>
                    </div>
                </div>
                <div className={s.imageContainer}>
                    {data.img && <Image src={data.img} alt={'Изображение поста'} fill className={s.image}/>}
                </div>
            </div>
            <div className={s.content}>
                <div className={s.post}>
                    <div className={s.desc} dangerouslySetInnerHTML={{ __html: data.desc }} >
                    </div>
                    <div className={s.comment}>
                        {/*<Comments postSlug={slug}/>*/}
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    );
};

export default SinglePage;
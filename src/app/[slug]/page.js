import React from 'react';
import s from "./singlePage.module.scss";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";

const SinglePage = async () => {

    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.textContainer}>
                    <h1 className={s.title}>Главная</h1>
                    <div className={s.user}>
                        <div className={s.userImageContainer}>
                            <Image src={'/p1.jpeg'} alt={'img'} fill className={s.avatar}/>
                        </div>
                        <div className={s.userTextContainer}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={s.imageContainer}>
                    <Image src={'/p1.jpeg'} alt={'img'} fill className={s.image}/>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.post}>
                    <div className={s.desc}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis corporis
                            delectus, dolores doloribus enim, error esse ex inventore ipsum, minima modi nulla
                            perferendis qui reiciendis sapiente unde ut voluptas!</p>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis corporis
                            delectus, dolores doloribus enim, error esse ex inventore ipsum, minima modi nulla
                            perferendis qui reiciendis sapiente unde ut voluptas!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis corporis
                            delectus, dolores doloribus enim, error esse ex inventore ipsum, minima modi nulla
                            perferendis qui reiciendis sapiente unde ut voluptas!</p>
                    </div>
                    <div className={s.comment}>
                        <Comments/>

                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    );
};

export default SinglePage;


import s from "./featured.module.scss";
import Image from "next/image";
import Link from "next/link";
import {getSinglePost, handleNumber} from "@/app/utils/data";


const Featured = ({data,number}) => {
console.log(data)
    return (
        <div className={s.container}>
            <h1 className={s.title}>
                <b>{data.title}</b>
            </h1>
            <div className={s.post}>
                <div className={s.imgContainer}>
                    <Image className={s.image} src={data.img} alt={data.title} fill/>
                </div>
                <div className={s.textContainer}>
                    <Link className={s.postButton} href={`/${number}`} >Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;
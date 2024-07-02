import s from "./featured.module.scss";
import Image from "next/image";
import Link from "next/link";



const Featured = ({data,number}) => {

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
                    <h1 className={s.postTitle}>{data.title}</h1>
                    <div className={s.postDesc} dangerouslySetInnerHTML={{ __html: data.desc.slice(0,45) }}/>
                    <Link className={s.postButton} href={`/posts/${number}`} >Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;
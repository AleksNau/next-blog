"use server"
import {getData} from "@/app/utils/data";

export const handleSubmitFirst = async (info) => {

    let count;
    const data = await getData().then((res) => {
        count = res.count;
    });

    const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify({
            img: info.media, slug: count + 1,
            userEmail: info.email,photos:info.photos,referal:info.referal, title:info.title,desc:info.desc,catSlug:info.catSlug
        }),
    });
    if (res.ok) {
        console.log("res: " + res);
    }
};
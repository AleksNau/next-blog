"use server"
const getData = async () => {

    const res = await fetch(`https://www.tablefun.ru/api/posts?page=1`, {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('Нет постов')
    }

    return res.json()
}


export const getSinglePost = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('Нет такого поста')
    }

    return res.json()
}

export const handleNumber = async () => {
    let count;
    const data = await getData().then((res) => {
        count =  res.count;

    })
return count
}
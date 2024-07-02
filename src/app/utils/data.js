"use server"
export const getData = async (page = 1) => {

    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {cache: 'no-store'});

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

export const getCategoryData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('Не та категория')
    }

    return res.json()
}
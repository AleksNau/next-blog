import styles from "./homepage.module.css";

import CardList from "@/components/Cardlist/CardList";
import Menu from "@/components/Menu/Menu";



const getData = async (page, cat) => {
    const res = await fetch(
        `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

export default async function CategoryPage({searchParams}) {
    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;

    const {posts} = await getData(page,cat);

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Категория {ucFirst(cat)}</h1>
            <div className={styles.content}>
                <CardList page={page} data={posts} amount={posts.length}/>
                <Menu/>
            </div>
        </main>);
}

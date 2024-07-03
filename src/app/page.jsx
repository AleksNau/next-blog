import styles from "./homepage.module.css";

import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/Cardlist/CardList";
import Menu from "@/components/Menu/Menu";
import {getData, getSinglePost,getCategoryData} from "@/app/utils/data";


export default async function Home({searchParams}) {
    const page = parseInt(searchParams.page) || 1;
    const {posts, count} = await getData(page);
    const featured = await getSinglePost(count);
    const categories = await getCategoryData();
    return (
        <main className={styles.container}>
            <Featured data={featured} number={count}/>
            <CategoryList data={categories}/>
            <div className={styles.content}>
                <CardList page={page} data={posts} amount={count}/>
                <Menu/>
            </div>
        </main>);
}

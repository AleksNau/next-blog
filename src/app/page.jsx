import styles from "./homepage.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/Cardlist/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;

  return (<div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList page={page}/>
      <Menu/>
    </div>
  </div>);
}

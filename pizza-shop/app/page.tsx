import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeComp from "@/components/homeComp/HomeComp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className={styles.main}>
        <div id="home">
          <HomeComp/>
        </div>
        <div id="menu"></div>
        <div id="events"></div>
        <div id="about us"></div>
       
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

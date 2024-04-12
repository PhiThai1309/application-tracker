import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Application Tracker</h1>
      <div className={styles.body__container}></div>
    </main>
  );
}

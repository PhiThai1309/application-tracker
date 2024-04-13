import Image from "next/image";
import styles from "./page.module.css";
import AppListContainer from "./components/appListContainer/appListContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.body__container}>
        <h1>Application Tracker</h1>
        <button className={styles.add__btn}>
          <span className="material-symbols-rounded">add</span>
        </button>
        <AppListContainer />
      </div>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import AppList from "./components/appList/appList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header__wrapper}>
        <h1>Application Tracker</h1>
        <svg
          width="60"
          height="60"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-2 left-0 rotate-90 tablet:bottom-0 tablet:w-10 smallTablet:-bottom-20"
        >
          <path
            d="M9.94922 10.2192V4.44453H4.17451"
            stroke="#000000"
            stroke-width="1"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M9.9481 4.44301L3.89062 10.5005"
            stroke="#030303"
            stroke-width="1"
            stroke-miterlimit="10"
          ></path>
        </svg>
      </div>

      <div className={styles.body__container}>
        <AppList />
      </div>
    </main>
  );
}

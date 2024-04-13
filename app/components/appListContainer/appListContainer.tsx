import AppList from "../appList/appList";
import styles from "./appListContainer.module.css";

const AppListContainer = () => {
  return (
    <div className={styles.list__container}>
      <AppList />
      <AppList />
      <AppList />
      <AppList />
    </div>
  );
};

export default AppListContainer;

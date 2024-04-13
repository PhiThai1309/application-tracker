import styles from "./appList.module.css";

const AppList = () => {
  return (
    <div className={styles.appList__container}>
      <p>Company name</p>
      <p>Job title</p>
      <p>Application date</p>
    </div>
  );
};

export default AppList;

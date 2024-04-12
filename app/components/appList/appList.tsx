import styles from "./appList.module.css";

const AppList = () => {
  return (
    <div className={styles.appList__container}>
      <h5>Company name</h5>
      <p>Job title</p>
      <p>Application date</p>
    </div>
  );
};

export default AppList;

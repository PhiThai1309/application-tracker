import styles from "./appList.module.css";

const AppList = () => {
  return (
    <div className={styles.appList__wrapper}>
      <div className={styles.appList__container}>
        <p>Company name</p>
        <p>Job title</p>
        <p>Application date</p>
      </div>
      <select name="toys" id="toy-id" className={styles.select__input}>
        <option value="New">New</option>
      </select>
    </div>
  );
};

export default AppList;

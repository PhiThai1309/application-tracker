import { Application } from "@/app/model/Application";
import styles from "./appList.module.css";

const AppList: React.FC<Application> = (props) => {
  return (
    <div className={styles.appList__wrapper}>
      <div className={styles.appList__container}>
        <p>{props.companyName}</p>
        <p>{props.position}</p>
        <p>{String(props.applicationDate)}</p>
      </div>
      <select name="toys" id="toy-id" className={styles.select__input}>
        <option value={String(props.status)}>{String(props.status)}</option>
      </select>
    </div>
  );
};

export default AppList;

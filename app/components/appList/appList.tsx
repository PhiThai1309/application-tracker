import { Application, Status } from "@/app/model/Application";
import styles from "./appList.module.css";

interface ApplicationStatus extends Application {
  enumStatus?: Record<string, number> | null;
  onClick: () => void; // Define onClick handler prop
}

const AppList: React.FC<ApplicationStatus> = (props) => {
  const dateObject = new Date(props.applicationDate.valueOf());
  const formattedDate = `${dateObject.getDate()}-${
    dateObject.getMonth() + 1
  }-${dateObject.getFullYear()}`;

  return (
    <div className={styles.appList__wrapper}>
      <div className={styles.appList__container} onClick={props.onClick}>
        <p>{props.companyName}</p>
        <p>{props.position}</p>
        <p>{formattedDate}</p>
      </div>
      <select
        name="toys"
        id="toy-id"
        className={styles.select__input}
        value={Status[props.status]}
      >
        {props.enumStatus &&
          Object.entries(props.enumStatus).map(([name, value]) => (
            <option key={value} value={name}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default AppList;

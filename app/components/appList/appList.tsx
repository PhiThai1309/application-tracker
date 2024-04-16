import { Application, Status } from "@/app/model/Application";
import styles from "./appList.module.css";

const AppList: React.FC<Application> = (props) => {
  const dateObject = new Date(props.applicationDate.valueOf());
  const formattedDate = `${dateObject.getDate()}-${
    dateObject.getMonth() + 1
  }-${dateObject.getFullYear()}`;

  return (
    <div className={styles.appList__wrapper}>
      <div className={styles.appList__container}>
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
        {Object.keys(Status)
          .filter((key) => isNaN(Number(Status[key as keyof typeof Status]))) // Filter out numeric keys
          .map((key) => (
            <option key={key} value={Status[key as keyof typeof Status]}>
              {Status[key as keyof typeof Status]}
            </option>
          ))}
      </select>
    </div>
  );
};

export default AppList;

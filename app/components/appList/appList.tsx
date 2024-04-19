import { Application, Status } from "@/app/model/Application";
import styles from "./appList.module.css";
import { useEffect, useState } from "react";
import { changeStatus } from "@/app/networks/lib/home";

interface ApplicationStatus extends Application {
  enumStatus?: Record<string, number> | null;
  onClick: () => void; // Define onClick handler prop
  reload: () => void;
}

const AppList: React.FC<ApplicationStatus> = (props) => {
  const [status, setStatus] = useState(props.status);
  const dateObject = new Date(props.applicationDate.valueOf());
  const formattedDate = `${dateObject.getDate()}-${
    dateObject.getMonth() + 1
  }-${dateObject.getFullYear()}`;

  function handleChangeStatus(e: React.ChangeEvent<HTMLSelectElement>): void {
    setStatus(Number(e.target.value));
    const formDataObject: Record<string, string> = {};
    formDataObject["status"] = String(e.target.value);
    changeStatus(props._id?.toString() ?? "", formDataObject).then(() => {
      props.reload();
    });
  }

  //somehow the status does not change on first render so we need to force a rs update
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={styles.appList__wrapper}>
      <div className={styles.appList__container} onClick={props.onClick}>
        <p>{props.companyName}</p>
        <p>{props.position}</p>
        <p>{formattedDate}</p>
      </div>
      <select
        name={props.status.toString()}
        id={props.status.toString()}
        className={styles.select__input}
        value={status}
        onChange={(e) => {
          handleChangeStatus(e);
        }} // Explicitly specify the type of the index expression as 'number'
        required
      >
        {props.enumStatus &&
          Object.entries(props.enumStatus).map(([name, value]) => (
            <option key={value} value={String(value)}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default AppList;

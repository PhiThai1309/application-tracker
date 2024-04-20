import { Application } from "@/app/model/Application";
import styles from "./appList.module.css";
import { useEffect, useState } from "react";
import { changeStatus } from "@/app/networks/lib/home";
import ChipsBtn from "../client/chipsBtn/chipsBtn";

interface ApplicationStatus extends Application {
  enumStatus?: Record<string, { value: number; color: string }> | null;
  onClick: () => void; // Define onClick handler prop
  reload: () => void;
}

const AppList: React.FC<ApplicationStatus> = (props) => {
  const [status, setStatus] = useState(props.status);
  const [color, setColor] = useState("");
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

    function getColor() {
      const statusObject = Object.values(props.enumStatus ?? {}).find(
        (value) => {
          return value.value == props.status;
        }
      );

      if (statusObject) {
        setColor(statusObject.color);
      }
      console.log(statusObject);
    }

    getColor();
  }, [props.enumStatus, props.status]);

  return (
    <div className={styles.appList__wrapper}>
      <div className={styles.appList__container} onClick={props.onClick}>
        <p>{props.companyName}</p>
        <p>{props.position}</p>
        <p>{formattedDate}</p>
      </div>
      {/* <select
        name={props.status.toString()}
        id={props.status.toString()}
        className={styles.select__input}
        value={status.toString()}
        style={{
          backgroundColor: color,
        }} // Convert status to a string and provide a default value for enumStatus
        onChange={(e) => {
          handleChangeStatus(e);
        }} // Explicitly specify the type of the index expression as 'number'
        required
      >
        {props.enumStatus &&
          Object.entries(props.enumStatus).map(([name, { value, color }]) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
      </select> */}

      <ChipsBtn
        enumStatus={props.enumStatus}
        status={props.status}
        _id={props._id?.toString() ?? ""}
        reload={() => {
          console.log("reload inside");
          props.reload();
        }}
      />
    </div>
  );
};

export default AppList;

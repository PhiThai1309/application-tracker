import { Application } from "@/app/model/Application";
import React, { useContext, useEffect, useState } from "react";
import styles from "./chipsBtn.module.css";
import { changeStatus } from "@/app/networks/lib/home";
import { StatusContext } from "@/app/model/StatusContext";

interface ChipsBtnProps {
  _id: string;
  status: number;
  reload: () => void;
}

const ChipsBtn: React.FC<ChipsBtnProps> = (props) => {
  const statusContext = useContext(StatusContext);
  const [status, setStatus] = useState(props.status);
  const [color, setColor] = useState("");

  function handleChangeStatus(e: React.ChangeEvent<HTMLSelectElement>): void {
    // setStatus(Number(e.target.value));
    const formDataObject: Record<string, string> = {};
    formDataObject["status"] = String(e.target.value);
    changeStatus(props._id?.toString() ?? "", formDataObject).then(() => {
      props.reload();
    });
  }

  //
  useEffect(() => {
    setStatus(props.status);

    function getColor() {
      const statusObject = Object.values(statusContext?.status ?? {}).find(
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
  }, [statusContext?.status, props.status]);

  return (
    <select
      name={props.status.toString()}
      id={props.status.toString()}
      className={styles.select__input}
      value={status.toString()}
      style={{
        backgroundColor: color,
      }}
      onChange={(e) => {
        handleChangeStatus(e);
      }}
      required
    >
      {statusContext &&
        statusContext?.status &&
        Object.entries(statusContext.status ?? {}).map(
          ([name, { value, color }]) => (
            <option key={value} value={value}>
              {name}
            </option>
          )
        )}
    </select>
  );
};

export default ChipsBtn;

import { getApplication, getStatus } from "@/app/networks/lib/home";
import AppList from "../appList/appList";
import styles from "./appListContainer.module.css";
import { useEffect, useState } from "react";
import { Application } from "@/app/model/Application";

interface AppListContainerProps {
  datas: Application[];
  enumData: Record<string, number> | null;
}
const AppListContainer: React.FC<AppListContainerProps> = (props) => {
  return (
    <div className={styles.list__container}>
      {/* render each  application in the list */}
      {props.datas.map((data) => (
        <AppList key={String(data._id)} enumStatus={props.enumData} {...data} />
      ))}
    </div>
  );
};

export default AppListContainer;

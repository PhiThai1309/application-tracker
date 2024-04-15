import { getApplication } from "@/app/networks/lib/home";
import AppList from "../appList/appList";
import styles from "./appListContainer.module.css";
import { useEffect, useState } from "react";
import { Application } from "@/app/model/Application";

const AppListContainer = () => {
  const [datas, setDatas] = useState<Application[]>([]);
  const fetchData = async () => {
    try {
      const response = await getApplication();
      setDatas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.list__container}>
      {/* render each  application in the list */}
      {datas.map((data) => (
        <AppList key={String(data._id)} {...data} />
      ))}
    </div>
  );
};

export default AppListContainer;

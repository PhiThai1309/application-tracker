import { getApplication, getStatus } from "@/app/networks/lib/home";
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

  const [enumData, setEnumData] = useState<Record<string, number> | null>(null);
  async function createEnum() {
    const enumData = await getStatus();
    if (enumData) {
      // Create an object with enum-like behavior
      const Status = enumData.data.reduce(
        (
          acc: Record<string, number>,
          { name, value }: { name: string; value: number }
        ) => {
          acc[name] = value;
          return acc;
        },
        {} as Record<string, number>
      );
      setEnumData(Status);
      return Status;
    }
    return null;
  }

  useEffect(() => {
    fetchData();
    createEnum();
  }, []);

  return (
    <div className={styles.list__container}>
      {/* render each  application in the list */}
      {datas.map((data) => (
        <AppList key={String(data._id)} enumStatus={enumData} {...data} />
      ))}
    </div>
  );
};

export default AppListContainer;

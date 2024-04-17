"use client";
import AddBtn from "@/app/components/client/addBtn";
import styles from "./HomePage.module.css";
import AppListContainer from "@/app/components/appListContainer/appListContainer";
import AddCard from "@/app/components/addCard/addCard";
import { useEffect, useState } from "react";
import { Application } from "@/app/model/Application";
import { getApplication, getStatus } from "@/app/networks/lib/home";
import { useRouter } from "next/router";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [enumData, setEnumData] = useState<Record<string, number> | null>(null);
  const [datas, setDatas] = useState<Application[]>([]);
  const [reloadFlag, setReloadFlag] = useState(false); // New state to trigger data reload

  const fetchData = async () => {
    try {
      const response = await getApplication();
      setDatas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
  }, [reloadFlag]);

  return (
    <>
      <div className={styles.body__container}>
        <h2>Application Tracker</h2>
        <div className={styles.add__btn}>
          <AddBtn enable={setShow} />
        </div>
        <AppListContainer datas={datas} enumData={enumData} />
      </div>
      {show && (
        <div className={`${styles.modal__container}`}>
          <AddCard
            enable={setShow}
            enumData={enumData}
            reload={() => {
              setReloadFlag(!reloadFlag); // Toggle reloadFlag to trigger data reload
            }}
          />
        </div>
      )}
    </>
  );
};
export default HomePage;

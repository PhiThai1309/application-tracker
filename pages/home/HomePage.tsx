"use client";
import AddBtn from "@/app/components/client/addBtn";
import styles from "./HomePage.module.css";
import AppListContainer from "@/app/components/appListContainer/appListContainer";
import AddCard from "@/app/components/addCard/addCard";
import { useEffect, useState } from "react";
import { Application } from "@/app/model/Application";
import { getApplication, getStatus } from "@/app/networks/lib/home";
import { useRouter } from "next/router";
import { StatusContext } from "@/app/model/StatusContext";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [currentApplication, setCurrentApplication] =
    useState<Application | null>(null);
  const [enumData, setEnumData] = useState<Record<
    string,
    { value: number; color: string }
  > | null>(null);
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
    try {
      const enumData = await getStatus(); // Assuming getStatus() fetches the JSON data

      if (enumData && enumData.data) {
        const statusEnum: Record<string, { value: number; color: string }> = {};
        // Parse enumData.data into an object
        const dataObject = JSON.parse(enumData.data) as Record<
          string,
          { value: number; color: string }
        >;

        // Iterate over the entries of dataObject
        Object.entries(dataObject).forEach(
          ([key, { value, color }]: [
            string,
            { value: number; color: string }
          ]) => {
            statusEnum[key] = {
              value: value, // Ensure value is converted to number
              color: color,
            };
          }
        );
        setEnumData(statusEnum);
        return statusEnum;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    createEnum();
  }, []);

  useEffect(() => {
    setCurrentApplication(null);
    fetchData();
  }, [reloadFlag]);

  return (
    <StatusContext.Provider value={{ status: enumData }}>
      <div className={styles.body__container}>
        <h2>Application Tracker</h2>
        <div className={styles.add__btn}>
          <AddBtn
            enable={setShow}
            clearCurrentApplication={setCurrentApplication}
          />
        </div>
        <AppListContainer
          datas={datas}
          enable={setShow}
          application={setCurrentApplication}
          reload={() => {
            console.log("reload");
            setReloadFlag(!reloadFlag); // Toggle reloadFlag to trigger data reload
          }}
        />
      </div>
      {show && (
        <div className={`${styles.modal__container}`}>
          <AddCard
            application={currentApplication}
            enable={setShow}
            reload={() => {
              console.log("reload");
              setReloadFlag(!reloadFlag); // Toggle reloadFlag to trigger data reload
            }}
          />
        </div>
      )}
    </StatusContext.Provider>
  );
};
export default HomePage;

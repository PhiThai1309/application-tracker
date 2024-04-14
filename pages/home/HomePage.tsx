"use client";
import AddBtn from "@/app/components/client/addBtn";
import styles from "./HomePage.module.css";
import AppListContainer from "@/app/components/appListContainer/appListContainer";
import AddCard from "@/app/components/addCard/addCard";
import { useState } from "react";

export const HomePage = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.body__container}>
        <h2>Application Tracker</h2>
        <div className={styles.add__btn}>
          <AddBtn enable={setShow} />
        </div>
        <AppListContainer />
      </div>
      {show && (
        <div className={`${styles.modal__container}`}>
          <AddCard enable={setShow} />
        </div>
      )}
    </>
  );
};

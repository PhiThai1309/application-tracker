import AppList from "../appList/appList";
import styles from "./appListContainer.module.css";
import { Application, ApplicationEnum } from "@/app/model/Application";

interface AppListContainerProps {
  datas: Application[];
  enable: (value: boolean) => void;
  application: (value: Application | null) => void;
  reload: () => void;
}

const AppListContainer: React.FC<AppListContainerProps> = (props) => {
  // console.log(props.datas);
  return (
    <div className={styles.list__container}>
      {/* render each  application in the list */}
      {props.datas.map((data) => (
        <AppList
          key={String(data._id)}
          {...data}
          onClick={() => {
            props.application(data);
            props.enable(true);
          }}
          reload={() => {
            console.log("reload inside");
            props.reload();
          }}
        />
      ))}
      {props.datas.length < 1 && <div>There are no applications yet</div>}
    </div>
  );
};

export default AppListContainer;

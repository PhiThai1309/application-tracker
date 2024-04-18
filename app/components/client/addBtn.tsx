import { Application } from "@/app/model/Application";
import styles from "./addBtn.module.css";

interface AddBtnModuleProps {
  enable: (value: boolean) => void;
  clearCurrentApplication: (value: Application | null) => void;
}

const AddBtn: React.FC<AddBtnModuleProps> = (props) => {
  function onClickHandler() {
    console.log("press enter");
    props.enable(true);
    props.clearCurrentApplication(null);
    // setShowModal(!showModal);
  }
  return (
    <button onClick={onClickHandler} className={styles.add_btn__wrapper}>
      <span className="material-symbols-rounded">add</span>
    </button>
  );
};

export default AddBtn;

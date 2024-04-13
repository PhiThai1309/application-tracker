import styles from "./addBtn.module.css";

interface AddBtnModuleProps {
  enable: (value: boolean) => void;
}

const AddBtn: React.FC<AddBtnModuleProps> = (props) => {
  function onClickHandler() {
    console.log("press enter");
    props.enable(true);
    // setShowModal(!showModal);
  }
  return (
    <button onClick={onClickHandler} className={styles.add_btn__wrapper}>
      <span className="material-symbols-rounded">add</span>
    </button>
  );
};

export default AddBtn;

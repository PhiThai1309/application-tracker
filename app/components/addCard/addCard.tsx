import styles from "./addCard.module.css";

interface AddCardProps {
  enable: (value: boolean) => void;
}

const AddCard: React.FC<AddCardProps> = (props) => {
  function onClickHandler() {
    console.log("press enter");
    props.enable(false);
    // setShowModal(!showModal);
  }
  return (
    <div className={styles.addCard__wrapper} onClick={onClickHandler}>
      <div className={styles.card__container}>
        <button className={styles.close__btn} onClick={onClickHandler}>
          <span className="material-symbols-rounded">close</span>
        </button>

        <h2>Add application</h2>
      </div>
    </div>
  );
};

export default AddCard;

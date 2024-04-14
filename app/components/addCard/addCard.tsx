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
    <div className={styles.addCard__wrapper}>
      <div className={styles.card__container}>
        <button className={styles.close__btn} onClick={onClickHandler}>
          <span className="material-symbols-rounded">close</span>
        </button>

        <h3>New application</h3>
        <form className={styles.addForm}>
          <div>
            <p className={styles.required}>Company name</p>
            <input type="text" />
          </div>
          <div>
            <p className={styles.required}>Position</p>
            <input type="text" />
          </div>
          <div>
            <p className={styles.required}>Application date</p>
            <input type="date" />
          </div>
          <div>
            <p>JD</p>
            <input type="text" />
          </div>
          <div>
            <p>HR Email</p>
            <input type="text" />
          </div>
          <div>
            <p className={styles.required}>Apply through</p>
            <input type="text" />
          </div>
          <div>
            <p className={styles.required}>Status</p>
            <select name="toys" id="toy-id" className={styles.select__input}>
              <option value="New">New</option>
            </select>
          </div>
          <div className={styles.submit_wrapper}>
            <button type="reset" value="Reset">
              Reset
            </button>
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;

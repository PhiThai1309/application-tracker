import { FormEvent, useState } from "react";
import styles from "./addCard.module.css";
import { ApplicationEnum } from "@/app/model/Application";
import { postApplication } from "@/app/networks/lib/home";

interface AddCardProps {
  enumData: Record<string, number> | null;
  enable: (value: boolean) => void;
}

const AddCard: React.FC<AddCardProps> = (props) => {
  // const [formData, setFormData] = useState(Application);
  function onClickHandler() {
    console.log("press enter");
    props.enable(false);
  }
  const currentDate = new Date().toISOString().split("T")[0];

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Create an object to store the form data
    const formDataObject: Record<string, string> = {};

    // Iterate over each form field in the FormData object
    formData.forEach((value, key) => {
      // Add the value to the formDataObject using the field name as the key
      formDataObject[key] = value.toString();
    });

    // Log the formDataObject containing all the form field values
    // console.log(formDataObject);

    postApplication(formDataObject);
  }

  return (
    <div className={styles.addCard__wrapper}>
      <div className={styles.card__container}>
        <div className={styles.card__content}>
          <button className={styles.close__btn} onClick={onClickHandler}>
            <span className="material-symbols-rounded">close</span>
          </button>

          <h3>New application</h3>
          <form className={styles.addForm} id="form" onSubmit={onSubmitHandler}>
            <div>
              <p className={styles.required}>Company name</p>
              <input
                type="text"
                name={ApplicationEnum.companyName}
                id={ApplicationEnum.companyName}
                required
              />
            </div>
            <div>
              <p className={styles.required}>Position</p>
              <input
                type="text"
                name={ApplicationEnum.position}
                id={ApplicationEnum.position}
                required
              />
            </div>
            <div>
              <p className={styles.required}>Application date</p>
              <input
                type="date"
                value={currentDate}
                name={ApplicationEnum.applicationDate} // Convert to string
                id={ApplicationEnum.applicationDate}
                required
              />
            </div>
            <div>
              <p>JD</p>
              <input
                type="text"
                name={ApplicationEnum.jd}
                id={ApplicationEnum.jd}
              />
            </div>
            <div>
              <p>HR Email</p>
              <input
                type="text"
                name={ApplicationEnum.hrEmail}
                id={ApplicationEnum.hrEmail}
              />
            </div>
            <div>
              <p className={styles.required}>Apply through</p>
              <input
                type="text"
                name={ApplicationEnum.applyThrough}
                id={ApplicationEnum.applyThrough}
                required
              />
            </div>
            <div>
              <p className={styles.required}>Status</p>
              <select
                name={ApplicationEnum.status}
                id={ApplicationEnum.status}
                className={styles.select__input}
                required
              >
                {props.enumData &&
                  Object.entries(props.enumData).map(([name, value]) => (
                    <option key={value} value={value}>
                      {name}
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles.submit_wrapper}>
              <button type="reset" value="Reset">
                Reset
              </button>
              <button type="submit" value="Submit" form="form">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCard;

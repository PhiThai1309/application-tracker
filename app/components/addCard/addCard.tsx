import { FormEvent, useState, ReactNode, useContext } from "react";
import styles from "./addCard.module.css";
import { Application, ApplicationEnum } from "@/app/model/Application";
import {
  deleteApplication,
  editApplication,
  postApplication,
} from "@/app/networks/lib/home";
import AddCardComponent from "./component/addCardComponent";
import { StatusContext } from "@/app/model/StatusContext";

interface AddCardProps {
  application: Application | null;
  enable: (value: boolean) => void;
  reload: () => void;
}

const initState: Application = {
  _id: null,
  companyName: "",
  position: "",
  applicationDate: Date(),
  jd: "",
  hrEmail: "",
  applyThrough: "",
  status: 1,
};

const AddCard: React.FC<AddCardProps> = (props) => {
  function onClickHandler() {
    props.enable(false);
  }

  const statusContext = useContext(StatusContext);
  const currentDate = new Date().toISOString().split("T")[0];

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data: Application = {
      _id: props.application?._id || null,
      companyName: companyName,
      position: position,
      applicationDate: applicationDate,
      jd: jd,
      hrEmail: hrEmail,
      applyThrough: applyThrough,
      status: status,
    };

    const formDataObject: Record<string, string> = {};

    // Iterate over each form field in the FormData object
    Object.entries(data).forEach(([key, value]) => {
      // Add the value to the formDataObject using the field name as the key
      formDataObject[key] = value ? value.toString() : "";
    });
    if (props.application) {
      editApplication(formDataObject)
        .then(() => {
          props.enable(false);
          props.reload();
          if (props.application) {
            props.application.status = status;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      postApplication(formDataObject)
        .then(() => {
          props.enable(false);
          props.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleDelete() {
    deleteApplication(props.application?._id?.toString() ?? "")
      .then(() => {
        props.enable(false);
        props.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Initialize state variables based on ApplicationEnum
  const initialState = props.application
    ? Object.keys(ApplicationEnum).reduce((acc: any, key: any) => {
        key === "applicationDate"
          ? (acc[key as keyof Application] = props.application
              ? (props.application[key as keyof Application] as string)?.split(
                  "T"
                )[0] ?? ""
              : "")
          : (acc[key as keyof Application] = props.application
              ? props.application[key as keyof Application]
              : "");

        return acc;
      }, {} as Record<keyof Application, any>)
    : initState;

  const [formData, setFormData] = useState<Application>({
    ...initialState,
    status: props.application?.status ?? "1",
  });

  const [companyName, setCompanyName] = useState(initialState.companyName);
  const [position, setPosition] = useState(initialState.position);
  const [applicationDate, setApplicationDate] = useState(
    initialState.applicationDate
      ? new Date(initialState.applicationDate).toISOString().split("T")[0]
      : Date()
  );
  const [jd, setJd] = useState(initialState.jd);
  const [hrEmail, setHrEmail] = useState(initialState.hrEmail);
  const [applyThrough, setApplyThrough] = useState(initialState.applyThrough);
  const [status, setStatus] = useState(initialState.status);

  return (
    <div className={styles.addCard__wrapper}>
      <div className={styles.close} onClick={onClickHandler}></div>
      <div className={styles.card__container}>
        <div className={styles.card__content}>
          <button className={styles.close__btn} onClick={onClickHandler}>
            <span className="material-symbols-rounded">close</span>
          </button>
          {!props.application ? (
            <h3>New application</h3>
          ) : (
            <h3>Edit application</h3>
          )}

          <form className={styles.addForm} id="form" onSubmit={onSubmitHandler}>
            {Object.entries(formData ?? "").map(
              ([key, value]) =>
                ApplicationEnum[key as keyof typeof ApplicationEnum] &&
                key !== "applicationDate" &&
                key !== "jd" &&
                key !== "status" && (
                  <AddCardComponent
                    key={key} // Add a key prop for each mapped component
                    header={
                      ApplicationEnum[key as keyof typeof ApplicationEnum]
                    } // Add a type assertion to ensure the key is of type keyof typeof ApplicationEnum
                    value={
                      // Set value dynamically based on key
                      (() => {
                        switch (key) {
                          case "companyName":
                            return companyName;
                          case "position":
                            return position;
                          case "hrEmail":
                            return hrEmail;
                          case "applyThrough":
                            return applyThrough;
                          default:
                            return "";
                        }
                      })()
                    }
                    onChange={(e) => {
                      // Define onChange function to update the state dynamically
                      switch (key) {
                        case "companyName":
                          setCompanyName(e);
                          break;
                        case "position":
                          setPosition(e);
                          break;
                        case "hrEmail":
                          setHrEmail(e);
                          break;
                        case "applyThrough":
                          setApplyThrough(e);
                          break;
                        // Handle other fields similarly
                        default:
                          break;
                      }
                    }}
                    applicationEnum=""
                  />
                )
            )}
            <div>
              <p className={styles.required}>Application date</p>
              <input
                type="date"
                value={applicationDate}
                onChange={(event) => setApplicationDate(event.target.value)}
                name={ApplicationEnum.applicationDate}
                id={ApplicationEnum.applicationDate}
                required
              />
            </div>
            <div>
              <p>JD</p>
              <span
                className={styles.textarea}
                // name={ApplicationEnum.jd}
                // value={props.application?.jd.toString() ?? ""}
                // value={jd}
                suppressContentEditableWarning={true}
                onBlur={(e) => setJd(e.currentTarget.textContent)}
                role="textbox"
                id={ApplicationEnum.jd}
                contentEditable
              >
                {jd}
              </span>
            </div>
            <div>
              <p className={styles.required}>Status</p>
              <select
                name={ApplicationEnum.status}
                id={ApplicationEnum.status}
                className={styles.select__input}
                // value={props.application?.status.toString() ?? ""}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                {statusContext &&
                  statusContext?.status &&
                  Object.entries(statusContext?.status ?? {}).map(
                    ([name, { value, color }]) => (
                      <option key={value} value={value}>
                        {name}
                      </option>
                    )
                  )}
              </select>
            </div>
            <div className={styles.submit_wrapper}>
              {props.application ? (
                <button
                  value="Delete"
                  className={styles.deleteBtn}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              ) : null}

              <button
                type="submit"
                value="Submit"
                form="form"
                className={styles.submit_btn}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCard;

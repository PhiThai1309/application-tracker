import { Application, ApplicationEnum } from "@/app/model/Application";
import { useEffect, useRef } from "react";

interface addCardComponentProps {
  header: string;
  value: string;
  onChange: (value: string) => void;
  applicationEnum: string;
}

const AddCardComponent: React.FC<addCardComponentProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <p>{props.header}</p>
      <input
        type="text"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        name={props.applicationEnum}
        id={props.applicationEnum}
      />
    </div>
  );
};

export default AddCardComponent;

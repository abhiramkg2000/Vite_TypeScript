import React, { ChangeEvent } from "react";
import "./TextField.css";

type TextFieldProps = {
  name: string;
  id: string;
  value: string;
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checkValidity: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextField({
  name,
  id,
  value,
  handleFormChange,
  checkValidity,
}: TextFieldProps) {
  return (
    <div>
      {/* <label htmlFor={id}>{name}</label> */}
      <input
        type="text"
        name={name}
        id={id}
        data-testid={id}
        data-datavalue={value}
        required={true}
        autoComplete="off"
        value={value}
        onChange={handleFormChange}
        onInvalid={checkValidity}
      />
      <span className="floating-label">Enter Email</span>
    </div>
  );
}

export default TextField;

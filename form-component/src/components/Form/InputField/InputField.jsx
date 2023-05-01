import React, { Fragment } from "react";
import "./InputField.css";

export const InputField = ({
  inputType,
  inputName,
  inputID = "",
  isFormValidOnChange,
  isFormValidOnBlur,
  formErrors,
  required,
}) => {
  let [firstPart, ...secondPart] = inputName.split(/(?=[A-Z])/);
  let firstWord = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
  let restWord = secondPart.join(" ");
  let label = `${firstWord} ${restWord}`;

  return (
    <Fragment>
      <label htmlFor={inputName}>
        {label} <span className="label-error">{required && "*"}</span>
      </label>
      <div className="input-fields">
        <input
          type={inputType}
          id={`${inputID}? ${inputID}:${inputName} `}
          name={inputName}
          onChange={isFormValidOnChange}
          onBlur={isFormValidOnBlur}
          required
        />
      </div>
      <label>
        {formErrors[inputName] && (
          <p className="label-error">First Name is required</p>
        )}
      </label>
    </Fragment>
  );
};

import React, { Fragment, useState } from "react";
import "./App.css";
import { Form } from "../src/components/Form/Form";

function App() {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    date: "",
    country: "",
    courses: [],
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    email: false,
    gender: false,
    date: false,
    country: false,
    courses: false,
  });

  const [errorMessages, setErrorMessages] = useState({
    firstName: "",
    email: "",
    gender: "",
    date: "",
    country: "",
    courses: "",
  });

  // Check all fields for validation
  const isFormValidOnSubmit = () => {
    let errors = {
      firstName: false,
      email: false,
      gender: false,
      date: false,
      country: false,
      courses: false,
    };

    if (inputFields.firstName === "" || inputFields.firstName.length <= 3) {
      errors.firstName = true;
    }
    if (inputFields.email === "") {
      errors.email = true;
    }
    if (inputFields.gender === "") {
      errors.gender = true;
    }
    if (inputFields.date === "") {
      errors.date = true;
    }
    if (inputFields.country === "") {
      errors.country = true;
    }
    if (inputFields.courses.length === 0) {
      errors.courses = true;
    }
    setFormErrors(errors);
    if (Object.values(errors).some((error) => error === true)) {
      return false;
    }
    return true;
  };

  // OnBlur Validation
  const isFormValidOnBlur = (event) => {
    const { name, value } = event.target;
    let error = false;
    if ((name === "firstName" && value === "") || value.length <= 3) {
      error = true;
    } else if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    } else if (name === "courses" && value.length === 0) {
      error = true;
    }

    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // OnChange Validation
  const isFormValidOnChange = (event) => {
    let { name, value } = event.target;

    if (name === "courses") {
      let newCourses = [...inputFields.courses];
      if (event.target.checked) {
        newCourses.push(value);
      } else {
        newCourses = newCourses.filter((course) => course !== value);
      }
      value = newCourses;
    }

    setInputFields((prev) => ({
      ...prev,
      [name]: value,
    }));

    isFormValidOnBlur(event);
  };

  // Form onSubmit validation
  const formSubmit = (event) => {
    event.preventDefault();
    if (isFormValidOnSubmit()) {
      console.log("Valid");
      return;
    }
    console.log("invalid");
  };

  console.log(inputFields);
  console.log(formErrors);

  return (
    <Fragment>
      <Form
        formSubmit={formSubmit}
        isFormValidOnChange={isFormValidOnChange}
        isFormValidOnBlur={isFormValidOnBlur}
        formErrors={formErrors}
      />
    </Fragment>
  );
}

export default App;

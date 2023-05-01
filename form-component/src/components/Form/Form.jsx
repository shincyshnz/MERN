import React, { Fragment } from "react";
import "../Form/form.css";
import { InputField } from "./InputField/InputField";

export function Form({
  formSubmit,
  isFormValidOnChange,
  isFormValidOnBlur,
  formErrors,
}) {
  const courses = [
    {
      id: 1,
      course: "Javascript",
    },
    {
      id: 2,
      course: "React",
    },
    {
      id: 3,
      course: "Angular",
    },
  ];

  return (
    <Fragment>
      <div className="form-container">
        <form
          className="form"
          onSubmit={formSubmit}
          noValidate
          autoComplete="off"
        >
          <h1>Register</h1>
          <p>Please fill the form</p>
          {/* <div className="input-fields">
            <label htmlFor="firstName">
              First Name <span className="label-error">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={isFormValidOnChange}
              onBlur={isFormValidOnBlur}
              required
            />
          </div>
          <label>
            {formErrors.firstName && (
              <p className="label-error">First Name is required</p>
            )}
          </label> */}
          <InputField
            inputType={"text"}
            inputName={"firstName"}
            isFormValidOnChange={isFormValidOnChange}
            isFormValidOnBlur={isFormValidOnBlur}
            formErrors={formErrors}
            required={"required"}
          ></InputField>
          <InputField
            inputType={"email"}
            inputName={"email"}
            isFormValidOnChange={isFormValidOnChange}
            isFormValidOnBlur={isFormValidOnBlur}
            required={"required"}
            formErrors={formErrors}
          ></InputField>
          <InputField
            inputType={"date"}
            inputName={"date"}
            isFormValidOnChange={isFormValidOnChange}
            isFormValidOnBlur={isFormValidOnBlur}
            formErrors={formErrors}
          ></InputField>

          <InputField
            inputType={"date"}
            inputName={"date"}
            isFormValidOnChange={isFormValidOnChange}
            isFormValidOnBlur={isFormValidOnBlur}
            formErrors={formErrors}
          ></InputField>

          <div className="input-fields">
            <label htmlFor="courses">Courses</label>
            <div className="course-container">
              {courses.map((item) => {
                return (
                  <div className="course-item" key={item.id}>
                    <label htmlFor={item.id}>{item.course}</label>
                    <input
                      type="checkbox"
                      id={item.id}
                      name="courses"
                      value={item.course}
                      onBlur={isFormValidOnBlur}
                      onChange={isFormValidOnChange}
                      required
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="input-fields">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={isFormValidOnChange}
              onBlur={isFormValidOnBlur}
              required
            />
          </div>
          <label>
            {formErrors.email && <p className="label-error">Email Required</p>}
          </label>
          <div className="input-fields">
            <label>Gender</label>
            <div className="radio-container">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                name="gender"
                onChange={isFormValidOnChange}
                onBlur={isFormValidOnBlur}
                value={"male"}
                required
              />

              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value={"female"}
                onBlur={isFormValidOnBlur}
                onChange={isFormValidOnChange}
                required
              />
            </div>
          </div>
          <label>
            {formErrors.gender && (
              <p className="label-error">gender is required</p>
            )}
          </label>
          <div className="input-fields">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="date"
              onChange={isFormValidOnChange}
              onBlur={isFormValidOnBlur}
              required
            />
          </div>
          <label>
            {formErrors.date && <p className="label-error">date is required</p>}
          </label>
          <div className="input-fields">
            <label htmlFor="country">Country</label>
            <div>
              <select
                name="country"
                onChange={isFormValidOnChange}
                onBlur={isFormValidOnBlur}
                required
              >
                <option value="">Select</option>
                <option value="uae">UAE</option>
                <option value="india">INDIA</option>
                <option value="qatar">QATAR</option>
              </select>
            </div>
          </div>
          <label>
            {formErrors.country && (
              <p className="label-error">Country needs to be selected</p>
            )}
          </label>
          <div className="input-fields">
            <label htmlFor="courses">Courses</label>
            <div className="course-container">
              {courses.map((item) => {
                return (
                  <div className="course-item" key={item.id}>
                    <label htmlFor={item.id}>{item.course}</label>
                    <input
                      type="checkbox"
                      id={item.id}
                      name="courses"
                      value={item.course}
                      onBlur={isFormValidOnBlur}
                      onChange={isFormValidOnChange}
                      required
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <label>
            {formErrors.courses && (
              <p className="label-error">
                At-least one course needs to be selected
              </p>
            )}
          </label> */}
          <div className="input-fields">
            <button type="submit">Submit</button>
            {/* {message && <p>{message}</p>} */}
          </div>
        </form>

        <div className="image-container">
          <img
            src="/src/assets/images/register-vector-removebg.png"
            alt="Registration"
          />
        </div>
      </div>
    </Fragment>
  );
}

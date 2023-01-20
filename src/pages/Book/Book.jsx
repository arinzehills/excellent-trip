import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/Inputfield/InputField";
import handleChange from "../../utils/handleChange";

const Book = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  return (
    <div
      className="reg-fsc-section "
      style={{ width: "100%", height: "100vh", marginTop: "5rem" }}
    >
      <div
        style={{
          width: "70%",
          height: "80vh",
          boxShadow: "var(--box-shadow)",
          background: "white",
        }}
      >
        {/* formfield container */}
        <div>
          <div className="register_row">
            <h3 style={{ textTransform: "capitalize" }}>Name</h3>
            <div style={{ flexDirection: "column" }}>
              <InputField
                label={"Enter email"}
                value={formValues.email}
                name={"email"}
                inputStyle="input--shadow-purple"
                inputColor="purple-input"
                onHandleChange={(e) => {
                  handleChange(e, formValues, setFormValues);
                }}
              />
              {/* <p className="errors">{formErrors.email}</p> */}
            </div>
          </div>
          <div className="register_row">
            <h3 style={{ textTransform: "capitalize" }}>Age</h3>
            <div style={{ flexDirection: "column" }}>
              <InputField
                label={"Enter email"}
                value={formValues.email}
                name={"email"}
                inputStyle="input--shadow-purple"
                inputColor="purple-input"
                onHandleChange={(e) => {
                  handleChange(e, formValues, setFormValues);
                }}
              />
              {/* <p className="errors">{formErrors.email}</p> */}
            </div>
            <div className="centerClass">
              <Button
                buttonColor={"btn--orange"}
                // onClick={onSubmit}
              >
                Add
              </Button>
            </div>
          </div>

          {/* end of form container */}
          <div style={{ background: "red", width: "50%" }}>dss</div>
        </div>
      </div>
    </div>
  );
};

export default Book;

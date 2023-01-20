import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import InputField from "../../components/Inputfield/InputField";
import handleChange from "../../utils/handleChange";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [responseError, setResponseError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  return (
    <div>
      <h3>LOGIN</h3>
      <div className="register_row">
        <div>
          <h3 style={{ textTransform: "capitalize" }}>Email</h3>
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
            <p className="errors">{formErrors.email}</p>
          </div>
        </div>
        <div>
          <h3 style={{ textTransform: "capitalize" }}>Password</h3>
          <div style={{ flexDirection: "column" }}>
            <InputField
              name={"password"}
              label={"Enter password"}
              value={formValues.password}
              inputStyle="input--shadow-purple"
              inputColor="purple-input"
              onHandleChange={(e) => {
                handleChange(e, formValues, setFormValues);
              }}
            />
            {/* <p className="errors">{formErrors[`${inputItem.label}`]}</p> */}
          </div>
        </div>
        <div className="centerClass">
          <Button
            buttonColor={"btn--orange"}
            // onClick={onSubmit}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

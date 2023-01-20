import React, { useEffect, useState } from "react";
import MyProgress from "../../components/MyProgress/MyProgress";
import "./Register.css";
import "./Auth.css";
import InputField from "../../components/Inputfield/InputField";
import Button from "../../components/Button/Button";
import handleChangeList from "../../utils/handleChangeList";
import { FaFemale, FaMale } from "react-icons/fa";

const Register = () => {
  const [gender, setGender] = useState("male");
  const inputs = [
    { hintText: "Enter name", value: "", label: "name" },
    { hintText: "01/02/1986", value: "", label: "dob" },
    { hintText: "example@gmail.com", value: "", label: "email" },
    { hintText: "+91  700353260", value: "", label: "phone" },
    { hintText: "Enter a strong password", value: "", label: "password" },
  ];

  const [formValues, setFormValues] = useState(inputs);
  const [formErrors, setFormErrors] = useState({});

  const [responseError, setResponseError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const errors = {};
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    for (let i = 0; i < inputs.length; i++) {
      setFormErrors(validate(formValues, index));
    }
    setIsSubmit(true);
  };
  useEffect(() => {
    // setLoading(true)
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      register();
    }
  }, [formErrors]);
  const register = async () => {
    setLoading(true);
    const data = {};
    for (let i = 0; i < formValues.length; i++) {
      let name = formValues[i]["label"];
      data[`${name}`] = formValues[i]["value"];
    }

    const url = window.baseUrl + "register";
    fetch(url, {
      // credentials: 'include
      // Authorization:'http://localhost:8000/api/user',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': 'http://localhost:8000/api/user',
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log( data['token']);

        if (data["success"] === true) {
          const token = data["token"];
          console.log(token);
          history("/login");
          // setToken(token)
          handleNot({
            title: "Success",
            message:
              data["message"] + "You can now log in" ?? "re successfully",
            backgroundColor: "var(--success)",
          });
          setShowModal(true);
          setLoading(false);
        } else {
          const error = data["message"];
          console.log(error);
          setResponseError(error);
          setLoading(false);
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);

        setLoading(false);
      });
  };
  const validate = (values) => {
    console.log(values?.email);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };
  const SelectGender = () => (
    <div style={{ gap: "2rem" }}>
      <div
        onClick={() => setGender("male")}
        style={{ color: gender === "male" && "var(--success)" }}
      >
        Male
        <FaMale />
      </div>
      <div
        onClick={() => setGender("female")}
        style={{ color: gender === "female" && "var(--success)" }}
      >
        Female
        <FaFemale />
      </div>
    </div>
  );
  return (
    <div style={{ padding: "0.5rem" }}>
      <h3>REGISTER</h3>
      <div className="register_row">
        {inputs.map((inputItem, index) => (
          <div>
            <h3 style={{ textTransform: "capitalize" }}>
              {inputItem.name === "dob" ? "Date of birth" : inputItem.label}
            </h3>
            <div style={{ flexDirection: "column" }}>
              <InputField
                label={inputItem.hintText}
                // value={inputItem.value}
                name={inputItem.label}
                inputStyle="input--shadow-purple"
                inputColor="purple-input"
                onHandleChange={(e) => {
                  handleChangeList(e, index, formValues, setFormValues);
                  console.log(formValues[index]["label"]);
                }}
              />
              <p className="errors">{formErrors[`${inputItem.label}`]}</p>
            </div>
          </div>
        ))}
        <div>
          <h3>Gender</h3>
          <SelectGender />
        </div>
        {/* For Button */}
      </div>
      <div className="centerClass">
        <Button buttonColor={"btn--orange"} onClick={onSubmit}>
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default Register;

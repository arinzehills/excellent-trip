import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Button from "../../components/Button/Button";
import InputField from "../../components/Inputfield/InputField";
import handleChange from "../../utils/handleChange";

const Book = () => {
  const initialValues = { name: "", age: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [travellers, setTravellers] = useState([]);
  const [error, setError] = useState([]);
  const addTravellers = () => {
    console.log({ ...formValues });
    setTravellers([...travellers, formValues]);
    // setFormValues([{ ...initialValues }]);
  };
  const handleRemoveTraveller = (index) => {
    const list = [...travellers];
    list.splice(index, 1); //starting from index zero remove one service
    setTravellers(list); //set links to new list
  };
  console.log(travellers);
  const ListTravelers = () => {
    return (
      <div
        className="destination_list"
        style={{
          width: "50%",
          overflow: "visible",
        }}
      >
        {travellers.map((traveller, index) => (
          <div
            style={{
              height: "50px",
              maxWidth: "150px",
              background: "var(--orange-gradient)",
              color: "white",
              margin: "1rem",
              padding: "1rem",
            }}
            className=""
          >
            <div
              //   className="centerClass"
              style={{
                background: "white",
                borderRadius: "5px",
              }}
              onClick={() => handleRemoveTraveller(index)}
            >
              <AiFillDelete color="red" />
            </div>
            <div>{traveller.name}</div>
          </div>
        ))}
      </div>
    );
  };
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
          display: "flex",
        }}
      >
        {/* formfield container */}
        <div>
          <div className="register_row">
            <h3 style={{ textTransform: "capitalize" }}>Name</h3>
            <div style={{ flexDirection: "column" }}>
              <InputField
                label={"Enter name"}
                value={formValues.name}
                name={"name"}
                inputStyle="input--shadow-purple"
                inputColor="purple-input"
                onHandleChange={(e) => {
                  handleChange(e, formValues, setFormValues);
                }}
              />
              {/* <p className="errors">{formErrors.name}</p> */}
            </div>
          </div>
          <div className="register_row">
            <h3 style={{ textTransform: "capitalize" }}>Age</h3>
            <div style={{ flexDirection: "column" }}>
              <InputField
                label={"Enter age"}
                value={formValues.age}
                name={"age"}
                inputStyle="input--shadow-purple"
                inputColor="purple-input"
                onHandleChange={(e) => {
                  handleChange(e, formValues, setFormValues);
                }}
              />
              <p className="errors">{error}</p>
            </div>
            <div className="centerClass">
              <Button
                buttonColor={"btn--orange"}
                onClick={() => {
                  !formValues.name || !formValues.password
                    ? setError("Fields are required")
                    : setError("");
                  formValues.name || formValues.password
                    ? addTravellers()
                    : null;
                }}
              >
                Add
              </Button>
              <Button
                buttonColor={"btn--orange"}
                // onClick={onSubmit}
              >
                {"Proceed->"}
              </Button>
            </div>
            {travellers.length > 0 && <ListTravelers />}
          </div>

          {/* end of form container */}
        </div>
        <div
          style={{ background: "var(--success)", width: "50%" }}
          className="centerClass"
        >
          dss
        </div>
      </div>
    </div>
  );
};

export default Book;

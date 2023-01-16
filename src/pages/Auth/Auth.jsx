import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import MyProgress from "../../components/MyProgress/MyProgress";
import { Helmet } from "react-helmet";
import Login from "./Login";
import Register from "./Register";
function Auth() {
  const location = useLocation();

  const initialValues = {
    firstname: "",
    secondname: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [responseError, setResponseError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useNavigate();
  const errors = {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trimLeft().trimRight() });

    console.log(formValues);
    // console.log(e.target)
  };

  const [showLogin, setShowLogin] = useState(false);

  const Form = () => {
    const initialValues = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const inputValues = [
      formValues.firstname,
      formValues.lastname,
      formValues.email,
      formValues.password,
    ];
    const inputNames = ["firstname", "lastname", "email", "password"];

    return showLogin ? <Login /> : <Register />;
  };

  return (
    <>
      <Helmet>
        <title>Conterize - Registration</title>
        <meta name="description" content="Conterize Registration Page" />
      </Helmet>
      {/* {loading ? (
        <Loader />
      ) : 
      ( */}
      <Link to="/" className="navbar-logo">
        <img
          src="images/conterize.png"
          style={{
            margin: window.innerWidth > 960 ? "30px" : "10px",
            marginLeft: "0",
            marginTop: window.innerWidth < 960 ? "4rem" : "1.3rem",
            height: 110,
            position: "absolute",
          }}
          alt=""
        />
      </Link>
      <div className="reg_section">
        {/* {showModal && (
            <Modal
              isSuccess={true}
              heading="User has been register successfully"
              setOpenModal={setShowModal}
              onClick={() => {
                history("/login");
              }}
            />
          )} */}

        <div
          className="reg-fsc-section "
          style={
            {
              // filter: "blur(1px)",
              // webkitFilter: "blur(8px)",
            }
          }
        >
          <MyProgress
            // progress={activeStep === 1 ? 33 : activeStep === 2 ? 66 : 100}
            progress={66}
            progressClass={showLogin ? "anim33" : "anim100"}
          />
        </div>
        <div
          className="reg-sec-section"
          style={{
            // background: "var(--grey)",
            textAlign: "left",
            padding: "1.5rem",
            height: "95vh",
          }}
        >
          {/* <Stepper hrColor={"hrColor"} activeStep={activeStep} />
          <h1 style={{ color: "var(--mypurple)" }}>{steps[activeStep - 1]}</h1>

          {activeStep === 3 ? (
            <Thankyou message={"You have successfully subscribe! thank you!"} />
          ) : (
            <Form />
          )} */}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default Auth;

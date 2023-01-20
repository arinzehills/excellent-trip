import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import MyProgress from "../../components/MyProgress/MyProgress";
import { Helmet } from "react-helmet";
import Login from "./Login";
import Register from "./Register";
import "./Auth.css";

function Auth() {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(true);

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
        <title>Excellent Trip - Authentication</title>
        <meta name="description" content="Excellent Trip Page" />
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
            progress={!showLogin ? 66 : 100}
            progressClass={!showLogin ? "anim33" : "anim100"}
          />
        </div>
        <div
          className="reg-sec-section"
          style={{
            background: "var(--grey)",
            textAlign: "left",
            height: "95vh",
          }}
        >
          <div
            className="auth-heading class_justify_contents_row"
            style={{ justifyContent: "space-between" }}
          >
            <div
              className={`centerClass ${showLogin && "auth-active"}`}
              onClick={() => setShowLogin(true)}
            >
              Login
            </div>
            <div
              className={`centerClass ${!showLogin && "auth-active"}`}
              onClick={() => setShowLogin(false)}
            >
              Registration
            </div>
          </div>
          {showLogin ? <Login /> : <Register />}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default Auth;

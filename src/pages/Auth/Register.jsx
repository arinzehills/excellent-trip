import React from "react";
import MyProgress from "../../components/MyProgress/MyProgress";
import "./Register.css";

const Register = () => {
  return (
    <div>
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
            progressClass={
              activeStep === 1
                ? "anim33"
                : activeStep === 2
                ? "anim66"
                : "anim100"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

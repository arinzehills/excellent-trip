import React from "react";
import Hero from "../../components/Hero/Hero";
import { homeData2 } from "../Homepage/Homepage";

const PackageDetails = () => {
  return (
    <div>
      <Hero {...homeData2} imgStart="start" />
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "auto 5rem",
        }}
      >
        <div>
          <h4>Activities Included:</h4>
          <div>
            <span>Day1:Eat food</span>
            <br />
            <span>Day1:Eat food</span>
            <br />
            <span>Day1:Eat food</span>
            <br />
            <span>Day1:Eat food</span>
            <br />
          </div>
        </div>
        <div>
          <h3>From our gallery</h3>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

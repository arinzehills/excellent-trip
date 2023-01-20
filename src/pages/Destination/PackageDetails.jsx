import React from "react";
import Hero from "../../components/Hero/Hero";
import { homeData2 } from "../Homepage/Homepage";

const PackageDetails = () => {
  return (
    <div>
      <Hero
        {...homeData2}
        imgStart="start"
        description={"fdjkdsakjdsak"}
        buttonLink="/book"
      />
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "0px 5rem",
        }}
      >
        <div>
          <h2>Activities Included:</h2>
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
          <h2>From our gallery</h2>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

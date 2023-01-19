import React from "react";
import { useParams } from "react-router-dom";

const Destination = () => {
  const { destination } = useParams();

  return (
    <div>
      <div style={{ marginTop: "5em", position: "relative" }}>
        <h2>Top Selling {destination} packages</h2>
        {destination}
      </div>
    </div>
  );
};

export default Destination;

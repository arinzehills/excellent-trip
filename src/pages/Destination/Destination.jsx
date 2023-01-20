import getSymbolFromCurrency from "currency-symbol-map";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Destination.css";

const Destination = () => {
  const { destination } = useParams();
  const navigate = useNavigate();
  const DestinationCard = () => {
    return (
      <Link to={"/destinations/package-details"}>
        <div className="destination-card">
          <figure className="card-img">
            <img src="/images/mumbai.jpg" alt="" />
          </figure>
          <div className="card-content">
            <p>
              Starting at <span>{getSymbolFromCurrency("INR")} 343</span>
            </p>
            <h3>Ultra Luxury Mumbai</h3>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <div
        style={{
          marginTop: "5em",
          position: "relative",
        }}
      >
        <h2>Top Selling {destination} packages</h2>
        {destination}
      </div>
      <div
        className="destination_list"
        style={{ marginBottom: "2rem", gap: "2rem", background: "#f3f3f3" }}
      >
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </div>
  );
};

export default Destination;

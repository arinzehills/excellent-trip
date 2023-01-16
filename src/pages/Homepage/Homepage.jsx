import React from "react";
import GradientHeaders from "../../components/GradientHeaders/GradientHeaders";
import Hero from "../../components/Hero/Hero";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Homepage.css";

const Homepage = () => {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  const slides = [
    {
      title: "Radiant Clothing ",
      description: "the best e-shop,makes u glow",
      image: "/images/mumbai.jpg",
    },
    {
      title: "Radiant Clothing ",
      description: "the best e-shop,makes u glow",
      image:
        "https://res.cloudinary.com/difxlvoq8/image/upload/v1665786717/cld-sample-2.jpg",
    },
    {
      title: "Radiant Clothing ",
      description: "the best e-shop,makes u glow",
      image: "/images/office-buildings.jpg",
    },
  ];

  const DestinationItem = () => {
    return (
      <div className="destination_container">
        <img src="/images/mumbai.jpeg" alt="" />
        <div className="destination_content">Mumbai</div>
      </div>
    );
  };
  const homeData2 = {
    headline: "Need a cab for  Local or Outstation?",
    description: "",
    descriptionFont: "f16px",
    img: "/images/mumbai.jpg",
    imgalt1: "Your Startup Content Partner",
    showButton: true,
    withBg: false,
    buttonLabel: "Book now",
    buttonColor: "btn--orange",
  };
  const homeData3 = {
    headline: "Who are we?",
    description:
      "We at excellent trip provide you some of the best memories of" +
      "of your life. With the best deals on both Domestic and international packaged tours" +
      ", we have a very tasteful selection of destinations with the choicest of itinerary" +
      " We also offer No Cost EMI on our packages deals. We provide our customers impeccable service and unmatchable hospitality. We invite you to experience some of the best trips of your life.",
    img: "/images/business.jpg",
    imgalt1: "consistent content creation and content marketing",
    withBg: true,
    showButton: true,
    buttonLabel: "Book now",
    imgStart: "start",
    buttonColor: "btn--orange",
  };
  const arr = ["", "", "", "", "", "", ""];
  return (
    <div>
      <ImageSlider slides={slides} />
      <div style={{ marginTop: "5em", position: "relative" }}>
        <GradientHeaders
          text={"Top Destination"}
          showSubHeader={true}
          subHeader="Uncover Places"
        />
        <div className="destination_list">
          {arr.map((dest, index) => (
            <DestinationItem key={index} />
          ))}
        </div>
        <Hero {...homeData2} withBg={true} />
        <div id="about">
          <Hero
            {...homeData3}
            bgheight="550px"
            bgColor="var(--green-gradient)"
            marginfrBg="-10rem"
            withBg={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

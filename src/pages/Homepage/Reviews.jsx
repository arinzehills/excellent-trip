import React, { useState } from "react";
import GradientHeaders from "../../components/GradientHeaders/GradientHeaders";
import Hero from "../../components/Hero/Hero";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
const Reviews = () => {
  const reviews = ["", ""];
  const [current, setCurrent] = useState(0);
  const length = reviews.length;

  const homeData3 = [
    {
      headline: "Shavez?",
      description:
        "Needless to say, this is my first choice when I am" +
        " looking for International as well as Special Packages. The best thing is everything is included in these packages. The money is definitely worth the experience",
      img: "/images/business.jpg",
      imgalt1: "consistent content creation and content marketing",
      showButton: true,
      buttonLabel: "Book now",
      imgStart: "start",
      buttonColor: "btn--orange",
    },
    {
      headline: "Arinze?",
      description:
        "Needless to say, this is my first choice when I am" +
        " looking for International as well as Special Packages. The best thing is everything is included in these packages. The money is definitely worth the experience",
      img: "/images/business.jpg",
      imgalt1: "consistent content creation and content marketing",
      showButton: true,
      buttonLabel: "Book now",
      imgStart: "start",
      buttonColor: "btn--orange",
    },
  ];
  const NextIcon = ({ children, onClick }) => (
    <div
      className="btn--green centerClass"
      style={{
        width: "60px",
        height: "60px",
        color: "white",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children ?? <SlArrowRight />}
    </div>
  );
  const nextSlide = () => {
    // if current is == the last value in d array set it back to zero(firstelement) else increase it
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    // if current is == the first value in d array set it last value else decrease it by one
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log("prev Slide is clicked");
  };

  return (
    <>
      <GradientHeaders text={"From our travellers Destination"} />

      {homeData3.map((homeData3, index) => (
        <div
          key={index}
          className={index === current ? "myslide myslide-active" : "myslide"}
        >
          {index === current && <Hero {...homeData3} withBg={false} />}
        </div>
      ))}
      <div
        style={{
          justifyContent: "flex-end",
          paddingRight: "2rem",
          marginTop: "-1rem",
          gap: "3rem",
        }}
        className="centerClass"
        onClick={() => console.log("somthinf")}
      >
        <NextIcon children={<SlArrowLeft />} onClick={prevSlide} />
        <NextIcon onClick={nextSlide} />
      </div>
    </>
  );
};

export default Reviews;

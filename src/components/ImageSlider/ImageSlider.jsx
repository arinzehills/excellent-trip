// import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Link as ScrollLink } from "react-scroll";

import "./ImageSlider.css";

const ImageSlider = ({ slides, isNotMap, style, imageStyle, iconSize }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const delay = 9500;
  const nextSlide = () => {
    // if current is == the last value in d array set it back to zero(firstelement) else increase it
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    // if current is == the first value in d array set it last value else decrease it by one
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    // if is not an array return null
    return null;
  }

  useEffect(() => {
    if (isNotMap) {
    } else {
      setTimeout(
        () =>
          setCurrent((prevIndex) =>
            prevIndex === length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {};
    }
  }, [current]);
  return (
    <section className="slider" style={style}>
      {/* <Icon
        icon="material-symbols:arrow-back-ios"
        className="slider-arrow-left"
        onClick={prevSlide}
      />
      <Icon
        icon="material-symbols:arrow-forward-ios-rounded"
        className="slider-arrow-right "
        onClick={nextSlide}
      /> */}
      <div className="slider-contents class_justify_contents_column">
        <h3>Explore the world</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga
        </p>
        <div>
          <ScrollLink
            to={"about"}
            smooth={true}
            spy={true}
            offset={160}
            duration={1500}
          >
            <Button buttonColor={"btn--green"} buttonStyle="btn--outline">
              Learn more
            </Button>{" "}
          </ScrollLink>
          <Button buttonColor={"btn--green"}>Book now</Button>
        </div>
      </div>
      {slides.map((slide, index) => (
        <div
          className={index === current ? "myslide myslide-active" : "myslide"}
          key={index}
        >
          {index === current && (
            <img
              src={isNotMap ? slide : slide.image}
              alt="slide image"
              style={imageStyle}
              className="slider-image"
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;

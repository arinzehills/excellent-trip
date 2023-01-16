import React from "react";
import "./Button.css";

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  style,
  rounded,
}) => {
  const COLOR = ["btn--green", "btn--orange"];
  const BUTTON_STYLE = ["btn--normal", "btn--outline"]; //either outline or normal
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;
  const checkButtonStyle = BUTTON_STYLE.includes(buttonStyle)
    ? buttonStyle
    : BUTTON_STYLE[0];
  return (
    <button
      style={{ ...style, borderRadius: rounded && "30px" }}
      className={`btn ${checkButtonStyle} 
     ${checkButtonColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

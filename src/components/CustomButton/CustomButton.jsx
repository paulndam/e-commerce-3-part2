import React from "react";
import { CustomButtonContainer } from "./CustomButtonStyles";
import "../../Sass/custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSigIn, inverted, ...otherProps }) => (
  <button
    className={` ${inverted ? "inverted" : ""} ${
      isGoogleSigIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

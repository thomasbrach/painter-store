import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, signInMethod, ...otherProps }) => {
  return (
    <button className={`${signInMethod}-sign-in custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;

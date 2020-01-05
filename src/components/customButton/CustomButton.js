import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles.js";
const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;

import React from "react";
import { Div } from "./styles";

function CustomContainer(props) {
  return <Div>{props.children}</Div>;
}

export default CustomContainer;

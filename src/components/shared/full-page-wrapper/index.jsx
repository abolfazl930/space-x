import React from "react";
import { Div } from "./styles";

function FullPageWrapper(props) {
  return <Div {...props}>{props.children}</Div>;
}

export default FullPageWrapper;

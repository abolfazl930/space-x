import React from "react";
import { Section } from "./styles";

function PageWrapper(props) {
  return <Section {...props}>{props.children}</Section>;
}

export default PageWrapper;

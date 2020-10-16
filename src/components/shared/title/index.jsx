import React from "react";
import { Text } from "./styles";
function Title(props) {
  return <Text {...props}>{props.children}</Text>;
}

export default Title;

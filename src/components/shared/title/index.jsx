import React from "react";
import { Text } from "./styles";
function Title(props) {
  return (
    <Text size={props.size} {...props}>
      {props.children}
    </Text>
  );
}

export default Title;

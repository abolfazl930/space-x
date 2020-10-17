import React, { useEffect, useState } from "react";
import CustomContainer from "../shared/custom-continer";

import TextField from "../shared/text-field";

import { TextFieldHlder } from "./styles";

function LaunchesSearch(props) {
  const [inputVal, setInputVal] = useState("");

  const handleChangeInput = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    props.onChange && props.onChange(inputVal);
  }, [inputVal]);

  return (
    <CustomContainer>
      <TextFieldHlder>
        <TextField
          placeholder="search by site name"
          value={inputVal}
          onChange={handleChangeInput}
        />
      </TextFieldHlder>
    </CustomContainer>
  );
}

export default LaunchesSearch;

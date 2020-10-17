import React, { useEffect, useState } from "react";
import CustomContainer from "../shared/custom-continer";
import RadioGroup from "../shared/radio-group";

import { RadioHolder, Text } from "./styles";

function LaunchesRadio(props) {
  const [radioData, setRadioData] = useState([
    {
      label: "past launches",
      value: "past",
      name: "launches time",
      checked: true,
    },
    {
      label: "upcoming launches",
      value: "upcoming",
      name: "launches time",
      checked: false,
    },
  ]);

  const handleRadioOnChange = (index) => (e) => {
    setRadioData((state) => {
      state.forEach((item, i) => {
        i !== index && (item.checked = false);
      });
      state[index].checked = true;
      return [...state];
    });
  };
  useEffect(() => {
    let findItem = radioData.find((item) => item.checked === true);
    props.onChange(findItem.value);
  }, [radioData]);
  return (
    <CustomContainer>
      <RadioHolder>
        <Text>select launces time:</Text>
        <RadioGroup data={radioData} onChange={handleRadioOnChange} />
      </RadioHolder>
    </CustomContainer>
  );
}

export default LaunchesRadio;

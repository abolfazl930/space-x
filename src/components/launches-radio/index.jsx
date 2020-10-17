import React, { useEffect, useState } from "react";
import CustomContainer from "../shared/custom-continer";
import Radios from "../shared/radios";

import { RadioHolder } from "./styles";

function LaunchesRadio(props) {
  const [radioData, setRadioData] = useState([
    {
      label: "past",
      value: "fa",
      name: "lang",
      checked: true,
    },
    {
      label: "upcoming",
      value: "en",
      name: "lang",
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

  return (
    <CustomContainer>
      <RadioHolder>
        <Radios
          data={radioData}
          onChange={handleRadioOnChange}
          changeDir={false}
        />
      </RadioHolder>
    </CustomContainer>
  );
}

export default LaunchesRadio;

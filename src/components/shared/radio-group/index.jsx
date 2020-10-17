import React from "react";
import styled from "styled-components";
import CoreRadio from "../radio";

function RadioGroup(props) {
  const { data, onChange } = props;
  return (
    <Wrapper>
      {data.map((item, index) => (
        <CoreRadio
          key={index}
          name={item.name}
          value={item.value}
          checked={item.checked}
          label={item.label}
          onChange={onChange(index)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  @media (min-width: 576px) {
    display: flex;
  }
`;

export default RadioGroup;

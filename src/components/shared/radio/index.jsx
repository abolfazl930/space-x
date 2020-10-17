import React from "react";
import styled from "styled-components";

function CoreRadio(props) {
  const { name, checked, label, value, onChange } = props;
  return (
    <Wrapper>
      <Label>
        <Radio
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <Checkmark />
        <LabelText>{label}</LabelText>
      </Label>
    </Wrapper>
  );
}

// const Wrapper = styled.div`
//   display: flex;
// `;
const Wrapper = styled.div`
  position: relative;
  margin-right: 36px;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const Label = styled.label`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Checkmark = styled.span`
  top: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
  ::after {
    content: "";
    display: none;
    top: 0px;
    left: 0px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #00dcff;
  }
`;

const LabelText = styled.span`
  display: inline-block;
  position: relative;
  font-size: 18px;
  color: ${(props) => props.theme.text.textColor1};
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked ~ ${Checkmark} {
    background-color: ${(props) => props.theme.bg.bgColor1};
  }
  &:checked ~ ${Checkmark}:after {
    display: block;
  }
`;

export default CoreRadio;

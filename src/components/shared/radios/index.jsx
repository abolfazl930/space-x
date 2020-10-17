import React from "react";
import styled from "styled-components";

function CoreRadios(props) {
  const { data, onChange } = props;
  return (
    <Wrapper>
      {data.map((item, index) => (
        <InnerWrapper key={index}>
          <Label>
            <Radio
              type="radio"
              name={item.name}
              value={item.value}
              checked={item.checked}
              onChange={onChange(index)}
            />
            <LabelText changeDir={props.changeDir}>{item.label}</LabelText>
            <Checkmark changeDir={props.changeDir}></Checkmark>
          </Label>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const InnerWrapper = styled.div`
  display: block;
  position: relative;
  /* padding-left: 24px; */
  margin-bottom: 9px;
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
`;
const Checkmark = styled.span`
  position: absolute;
  top: 0;
  /* ${(props) =>
    props.changeDir === false ? "right:0;" : `${props.theme.direction}: 0;`} */
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.bg.bgColor1};
  border: 1px solid ${(props) => props.theme.border.borderColor1};
  border-radius: 50%;
  ::after {
    content: "";
    position: absolute;
    display: none;
    top: 1px;
    left: 1px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bg.bgColor1};
  }
`;

const LabelText = styled.span`
  display: inline-block;
  position: relative;
  ${(props) =>
    props.changeDir === false
      ? "right:25px;"
      : `${props.theme.direction}: 25px;`}
  /* ${(props) => props.theme.direction}: 25px; */
  /* bottom: ${(props) =>
    props.theme.direction === "right" ? "16px" : " 6px"}; */
  /* bottom: 14px; */
  font-size: 16px;
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

export default CoreRadios;

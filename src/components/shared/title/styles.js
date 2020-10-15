import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.text.textColor1};
  font-size: ${(props) =>
    props.size === "normal"
      ? props.theme.font.size.firstTitle
      : props.theme.font.size.secondTitle};
`;

import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.text.textColor1};
  ${(props) => {
    if (props.size === "medium") {
      return ` font-size:${props.theme.font.size.firstTitle}
    `;
    }
    if (props.size === "large") {
      return ` font-size:${props.theme.font.size.secondTitle}
    `;
    }
    if (props.size === "xLarge") {
      return ` 
      font-size:50px;
      font-weight:${props.theme.font.weight.bold};
      @media (min-width:576px){
        font-size:${props.theme.font.size.xLarge};
      }
    `;
    }
  }}
`;

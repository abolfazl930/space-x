import styled from "styled-components";

export const Div = styled.div`
  color: white;
`;

export const List = styled.div``;
export const Row = styled.div``;
export const Col = styled.div`
  width: ${(props) => props.width && props.width};
`;

import React from "react";
import { useTheme } from "theming";

function Title(props) {
  const theme = useTheme();

  return (
    <>
      {props.size === "normal" ? (
        <p className="text-normal">{props.children}</p>
      ) : (
        <p className="text-large">{props.children}</p>
      )}
      <style jsx="true">
        {`
          .text {
            color: ${theme.text.textColor1};
            font-size: ${props.size === "normal"
              ? theme.font.size.firstTitle
              : theme.font.size.secondTitle};
          }
        `}
      </style>
    </>
  );
}

export default Title;

export function Theme() {
  const colors = {
    white: "#fff",
    black: "#000",
    gray: "#868686",
    darkGray: "#4d4d4d",
  };
  const font = {
    size: {
      small: "14px",
      firstTitle: "20px",
      secondTitle: "48px",
      btn: "18px",
      xLarge: "100px",
    },
    weight: {
      light: "300",
      regular: "normal",
      bold: "bold",
    },
  };
  const dimen = {
    small: "12px",
    medium: "24px",
    large: "36px",
    xLarge: "48px",
  };
  const dark = {
    mode: "dark",
    bg: {
      bgColor1: colors.black,
    },
    text: {
      textColor1: colors.white,
      textColor2: colors.gray,
    },
    border: {
      borderColor1: colors.white,
      borderColor2: colors.darkGray,
    },
  };
  // =============================================================
  const light = {
    mode: "light",
    bg: {},
    text: {},
    border: {},
  };

  return {
    ...dark,
    font,
    dimen,
  };
}

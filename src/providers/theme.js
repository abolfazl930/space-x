export function Theme() {
  const colors = {
    white: "#fff",
    black: "#000",
    gray: "#868686",
    darkGray: "#4d4d4d",
  };
  const font = {
    size: {
      firstTitle: "20px",
      secondTitle: "46px",
      btn: "14px",
    },
    weight: {
      light: "300",
      regular: "normal",
      bold: "bold",
    },
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
  };
}

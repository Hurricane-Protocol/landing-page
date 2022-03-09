const theme = (isDark) => {
  const breakpoints = ["550px", "770px", "990px", "1600px"];
  const colors = {
    footer: "rgb(20, 14, 56)",
    white: isDark ? "#ffffff" : "#152938",
    black: isDark ? "#152938" : "#ffffff",
    cyan: isDark ? "#54B7FF" : "#2487AF",
    gray: "#222833",
  };
  const genTheme = (length, type) => {
    const arr = [];
    if (type === "size") {
      for (let i = 0; i < length; i++) {
        if (i === 0) {
          arr.push(0 + "px");
          continue;
        } else arr.push(10 * i + Math.pow(2, i) + "px");
      }
    } else if (type === "space") {
      for (let i = 0; i < length; i++) {
        if (i > 16) {
          arr.push(Math.pow(2, i - 10) - Math.pow(2, i - 12) + "px");
          arr.push(Math.pow(2, i - 10) + "px");
          continue;
        }
        arr.push(4 * i + "px");
      }
    } else if (type === "font") {
      for (let i = 1; i < length + 1; i++) {
        arr.push(10 * i + 2 * i + "px");
        arr.push(10 * i + 2 * (i + 1) + "px");
        arr.push(10 * i + 2 * (i + 2) + "px");
      }
    }
    // console.log("=============", type, "=============");
    // console.log(arr);
    return arr;
  };
  // const lineHeights =
  return {
    breakpoints: breakpoints,
    colors: colors,
    sizes: genTheme(12, "size"),
    space: genTheme(20, "space"),
    fontSizes: genTheme(30, "font"),
    lineHeights: genTheme(30, "font"),
    fontWeights: [500, 600, 700, 800],
    transforms: ["translateX(50%)", "translateX(50%)", "translateX(50%)", "unset"],
    gradients: {
      main: "linear-gradient(180deg, #44C098 0%, #10956D 100%)",
    },
  };
};

export default theme;

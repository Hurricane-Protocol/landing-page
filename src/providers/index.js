import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "../components/base.jsx";
import theme from "./index.theme.js";

export const ThemeSet = createContext();

const AllProvider = ({ children }) => {
  const [isDark, setDark] = useState(true);
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.background = isDark ? "linear-gradient(#152938, black)" : "linear-gradient(white, #add6ed)";
    // theme(isDark).colors.black;
  }, [isDark]);
  return (
    <ThemeSet.Provider
      value={{
        isDark: isDark,
        setDark: setDark,
      }}
    >
      <ThemeProvider theme={theme(isDark)}>{children}</ThemeProvider>;
    </ThemeSet.Provider>
  );
};

export default AllProvider;

import React ,{ ReactChildren, ReactChild  }from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#FFFDF9",
    primary: "#4240e6"

  },
  fonts: {
      sans: "sans-serif", 
      quicksans: "Quicksand",
      roboto: "Roboto"
    },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  breakPoints: {
    mobileS: '300px',
    mobileM: '400px',
    mobileL: '500px'
  }
};

interface ThemeProps {
    children: ReactChild | ReactChildren;
  }
  
const Theme = ({ children }:ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

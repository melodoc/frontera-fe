import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    primary: {
      main: "#2D2B5C",
      light: purple[50],
    },
    secondary: {
      main: "#7fbc2b",
      light: green[50],
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
};

export const theme = createTheme(themeOptions);

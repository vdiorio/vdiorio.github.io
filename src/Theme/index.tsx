import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#0f172a", // Background color converted from "rgb(15 23 42)"
      paper: "#1e293b", // Slightly lighter for paper components, adjust as needed
    },
    primary: {
      main: "#64ffda", // Neon green for primary (buttons, etc.)
      contrastText: "#a8b2d1", // Light text on primary elements
    },
    secondary: {
      main: "#64ffda", // Neon green for secondary, adjust if needed
      contrastText: "#a8b2d1", // Light text on secondary elements
    },
    text: {
      primary: "#8892b0", // Very light text color for primary text
      secondary: "#ccd6f6", // Slightly lighter for secondary text
      disabled: "#9e9e9e", // Disabled text color
    },
  },
});

export default theme;

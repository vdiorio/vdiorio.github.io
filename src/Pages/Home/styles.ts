import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    main: {
      padding: theme.spacing(0, 6), // default padding for small screens
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(0, 12), // padding for small screens and up
      },
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0, 24), // padding for medium screens and up
      },
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(0, 36), // padding for large screens and up
      },
      [theme.breakpoints.up("xl")]: {
        padding: theme.spacing(0, 36), // padding for extra large screens and up
      },
    },
  };
};

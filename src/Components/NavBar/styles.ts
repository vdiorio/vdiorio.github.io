import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    nav: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  };
};

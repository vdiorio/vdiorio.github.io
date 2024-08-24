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
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  };
};

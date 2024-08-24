import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh",
      margin: "0 auto",
      maxWidth: "900px",
    },
    greeting: {
      color: theme.palette.primary.main,
      fontSize: "clamp(14px, 5vw, 16px)",
      fontWeight: 400,
    },
    name: {
      fontSize: "clamp(40px, 8vw, 80px)",
      lineHeight: 1,
      fontWeight: 700,
    },
    subtitle: {
      fontSize: "clamp(40px, 6.8vw, 70px)",
      lineHeight: 1,
      fontWeight: 700,
    },
    button: {
      width: "fit-content",
      marginTop: theme.spacing(3),
      padding: theme.spacing(1, 3),
    },
  };
};

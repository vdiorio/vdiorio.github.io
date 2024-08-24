import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      position: "fixed",
      width: "100%",
      height: "100px",
      transition: "all 0.2s ease-in-out",
      zIndex: 10,
    },
    logo: {
      color: theme.palette.primary.main,
      width: 60,
    },
  };
};

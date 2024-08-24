import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      display: "inline-block",
      fontSize: "clamp(26px, 5vw, 32px)",
    },
    number: {
      color: theme.palette.primary.main,
      marginRight: theme.spacing(1),
      fontSize: "clamp(16px, 3vw, 20px)",
    },
  };
};

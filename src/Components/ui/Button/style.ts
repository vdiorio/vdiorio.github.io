import { useTheme } from "@mui/material/styles";

export const useStyles = () => {
  const theme = useTheme();

  return {
    root: {
      color: "theme.palette.primary.main",
      border: `solid 1px ${theme.palette.primary.main}`,
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        boxShadow: `3px 3px 0 0 ${theme.palette.primary.main}`,
        transform: `translate(-4px, -4px)`,
      },
    },
  };
};

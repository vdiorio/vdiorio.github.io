import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    overlay: {
      display: "block",
      position: "absolute",
      width: "100%",
      aspectRatio: 1,
      backgroundColor: `${theme.palette.primary.main}`,
      zIndex: -1,
      maxWidth: 300,
      top: 0,
      borderRadius: "10px",
      transition: "transform 0.2s ease-in-out",
    },
    container: {
      height: "100%",
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    hover: {
      "&:hover": {
        ".overlay": {
          opacity: 0,
          transform: "translate(-6px, -6px)",
        },
        ".frame": {
          transform: "translate(20px, 20px)",
        },
        ".img": {
          transform: "translate(-6px, -6px)",
          mixBlendMode: "normal !important" as const,
        },
      },
    },
    photo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "100%",
      maxWidth: 300,
      mixBlendMode: "multiply" as const,
      borderRadius: "10px",
      transition: "transform 0.2s ease-in-out",
    },
    frame: {
      display: "block",
      position: "absolute",
      width: "100%",
      border: `2px solid ${theme.palette.primary.main}`,
      transform: "translate(14px, 14px)",
      zIndex: -1,
      maxWidth: 300,
      aspectRatio: 1,
      top: 0,
      borderRadius: "10px",
      transition: "transform 0.2s ease-in-out",
    },
  };
};

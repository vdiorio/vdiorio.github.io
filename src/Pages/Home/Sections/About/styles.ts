import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      height: "calc(100vh - 100px)",
      margin: "0 auto",
      maxWidth: "900px",
    },
    list: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        width: "50%",
        "&:before": {
          content: '"▹"',
          color: theme.palette.primary.main,
          fontSize: "13px",
          marginRight: theme.spacing(1),
        },
      },
    },
    container: {
      height: "100%",
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    photo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "100%",
      maxWidth: 300,
      borderRadius: "6px",
    },
    frame: {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      border: `2px solid ${theme.palette.primary.main}`,
      zIndex: -1,
      maxWidth: 300,
      aspectRatio: 1,
      top: 0,
    },
    text: {
      fontSize: "16px",
      color: theme.palette.text.primary,
    },
  };
};

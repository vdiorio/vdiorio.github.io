import { Box, BoxProps } from "@mui/material";
import { useStyles } from "./styles";

export default function Photo({ ...props }: BoxProps) {
  const style = useStyles();

  return (
    <Box sx={style.container} {...props}>
      <Box sx={style.hover}>
        <img
          className="img"
          src="/images/me.png"
          alt="Vitor Diorio"
          style={style.img}
        />
        <Box className="overlay" sx={{ ...style.overlay }} />
        <Box className="frame" sx={style.frame} />
      </Box>
    </Box>
  );
}

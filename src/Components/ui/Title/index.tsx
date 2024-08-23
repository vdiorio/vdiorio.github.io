import { Typography, TypographyProps } from "@mui/material";
import { useStyles } from "./styles";

export default function Title({ sx, ...props }: TypographyProps) {
  const style = useStyles();

  return <Typography sx={{ ...style.root, ...sx }} {...props} />;
}

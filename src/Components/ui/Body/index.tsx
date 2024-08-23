import { Typography, TypographyProps } from "@mui/material";
import { useStyles } from "./styles";

export default function Body({ sx, ...props }: TypographyProps) {
  const style = useStyles();

  return <Typography sx={{ ...style.root, ...sx }} {...props} />;
}

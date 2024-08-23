import { Typography, TypographyProps } from "@mui/material";
import { useStyles } from "./styles";

interface Props extends TypographyProps {
  type?: "primary" | "secondary";
}

export default function Heading({ sx, type = "primary", ...props }: Props) {
  const style = useStyles(type);

  return <Typography sx={{ ...style, ...sx }} {...props} />;
}

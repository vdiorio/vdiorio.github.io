import { Typography, TypographyProps } from "@mui/material";
import { useStyles } from "./styles";

interface Props extends TypographyProps {
  number: number;
}

export default function NumberedHeading({
  number,
  children,
  sx,
  ...props
}: Props) {
  const formattedNumber = number < 10 ? `0${number}` : number.toString();
  const style = useStyles();
  return (
    <Typography component="h2" sx={{ ...style.root, ...sx }} {...props}>
      <span style={style.number}>{formattedNumber}.</span>
      {children}
    </Typography>
  );
}

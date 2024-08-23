import { ButtonProps, Button as MuiButton } from "@mui/material";
import { useStyles } from "./style";

interface Props extends ButtonProps {}

export default function Button({ sx, ...props }: Props) {
  const style = useStyles();
  return <MuiButton sx={{ ...style.root, ...sx }} {...props} />;
}

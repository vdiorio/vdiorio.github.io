import { Box, BoxProps } from "@mui/material";
import { useStyles } from "./styles";

interface CustomBoxProps extends BoxProps {
  "data-testid"?: string;
}

interface Props extends CustomBoxProps {
  olProps?: CustomBoxProps;
}

export default function NavBar({ olProps = {}, ...props }: Props) {
  const style = useStyles();
  return (
    <Box component="nav" {...props}>
      <Box component="ol" sx={style.nav} {...olProps}>
        {props.children}
      </Box>
    </Box>
  );
}

interface ItemProps extends CustomBoxProps {
  linkProps?: CustomBoxProps;
}

function Item({ linkProps = {}, ...props }: ItemProps) {
  const style = useStyles();
  return (
    <Box component="li" sx={{ cursor: "pointer" }} {...props}>
      <Box component="a" sx={style.link} {...linkProps}>
        {props.children}
      </Box>
    </Box>
  );
}

NavBar.Item = Item;

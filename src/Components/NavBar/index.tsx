import { Box, BoxProps } from "@mui/material";
import { useStyles } from "./styles";

export default function NavBar(props: BoxProps) {
  const style = useStyles();
  return (
    <Box component="nav">
      <Box component="ol" sx={style.nav} {...props} />
    </Box>
  );
}

function Item(props: BoxProps) {
  const style = useStyles();
  return (
    <Box component="li" sx={{ cursor: "pointer" }}>
      <Box component="a" sx={style.link} {...props}>
        {props.children}
      </Box>
    </Box>
  );
}

NavBar.Item = Item;

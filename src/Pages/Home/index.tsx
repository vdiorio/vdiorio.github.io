import { Box } from "@mui/material";
import Header from "../../Components/Header";
import Hero from "./Sections/Hero";
import { useStyles } from "./styles";

export default function Home() {
  const style = useStyles();
  return (
    <Box>
      <Header />
      <Box component="main" id="content" data-testid="content" sx={style.main}>
        <Hero />
      </Box>
    </Box>
  );
}

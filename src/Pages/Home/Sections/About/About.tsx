import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import NumberedHeading from "../../../../Components/NumberedHeading";
import { useStyles } from "./styles";
import Body from "../../../../Components/ui/Body";
import Photo from "../../../../Components/Photo";

export default function About() {
  const { t } = useTranslation();

  const style = useStyles();

  return (
    <Box component="section" id="about" sx={style.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <NumberedHeading number={1}>{t("about-title")}</NumberedHeading>
        </Grid>
        <Grid item xs={12} sm={7}>
          {t("about-description")
            .split("\n")
            .map((t) => (
              <Body sx={style.text} key={t} marginBottom={2}>
                {t}
              </Body>
            ))}
          <Box component="ul" sx={{ ...style.list, ...style.text }}>
            <Box component="li">Javascript (ES6+)</Box>
            <Box component="li">Typescript</Box>
            <Box component="li">React</Box>
            <Box component="li">Node</Box>
            <Box component="li">Java</Box>
            <Box component="li">Springboot</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} sx={style.photo}>
          <Photo />
        </Grid>
      </Grid>
    </Box>
  );
}

import { Box } from "@mui/material";
import Body from "../../../../Components/ui/Body";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";
import Heading from "../../../../Components/ui/Heading";
import Button from "../../../../Components/ui/Button";

export default function Hero() {
  const { t } = useTranslation();

  const style = useStyles();

  return (
    <Box component="section" id="hero" sx={style.root}>
      <Body sx={style.greeting}>{t("hero-greeting")}</Body>
      <Heading sx={style.name}>Vitor Diorio</Heading>
      <Heading type="secondary" sx={style.subtitle}>
        {t("hero-subtitle")}
      </Heading>
      <Body maxWidth={540}>{t("hero-description")}</Body>
      <Button sx={style.button}>{t("hero-button")}</Button>
    </Box>
  );
}

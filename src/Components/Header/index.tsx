/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { useStyles } from "./styles";
import Logo from "../Logo";
import NavBar from "../NavBar";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const watchScroll = (handleScroll: () => void) => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export default function Header() {
  const { t } = useTranslation();

  const scrollRef = useRef(0);
  const [headerStyle, setHeaderStyle] = useState({});

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 50) {
      setHeaderStyle({});
    } else if (currentScrollY > scrollRef.current) {
      setHeaderStyle({
        transform: "translateY(-70px)",
        height: "70px",
        boxShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      });
    } else {
      setHeaderStyle({
        transform: "translateY(0px)",
        height: "70px",
        boxShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      });
    }

    scrollRef.current = currentScrollY;
  };

  useEffect(() => {
    const cleanup = watchScroll(handleScroll);
    return cleanup;
  }, []);

  const style = useStyles();
  return (
    <Box
      component="header"
      data-testid="header"
      sx={{ ...style.header, ...headerStyle }}
    >
      <Logo sx={style.logo} />
      <NavBar>
        <NavBar.Item>{t("about")}</NavBar.Item>
        <NavBar.Item>{t("experience")}</NavBar.Item>
        <NavBar.Item>{t("work")}</NavBar.Item>
        <NavBar.Item>{t("contact")}</NavBar.Item>
        <Button component="a">{t("resume")}</Button>
      </NavBar>
    </Box>
  );
}

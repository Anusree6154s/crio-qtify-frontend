import { Box, Typography } from "@mui/material";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/hero_headphones.svg";

function Hero() {
  return (
    <Box
      className={styles.hero}
      sx={{ display: "flex", gap: "45px", alignItems: "center" }}
    >
      <Box>
        <Typography
          variant="h6"
        >
          100 Thousand Songs, ad-free
        </Typography>
        <Typography
          variant="h6"
        >
          Over thousands podcast episodes
        </Typography>
      </Box>
      <Box component="img" src={HeroImg} width={160} alt="headphones" />
    </Box>
  );
}

export default Hero;

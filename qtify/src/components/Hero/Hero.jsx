import { Box, Typography } from "@mui/material";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/hero_headphones.svg";

function Hero() {
  return (
    <Box
      className={styles.hero}
      sx={{
        flexDirection: { sm: "row", xs: "column" },
        gap: { sm: "45px", xs: "0px" },
        paddingTop: { sm: "20px", xs: "40px !important"  },
      }}
    >
      <Box>
        <Typography variant="h6">100 Thousand Songs, ad-free</Typography>
        <Typography variant="h6">Over thousands podcast episodes</Typography>
      </Box>
      <Box component="img" src={HeroImg} width={160} alt="headphones" />
    </Box>
  );
}

export default Hero;

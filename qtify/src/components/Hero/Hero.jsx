import { Box, Typography } from "@mui/material";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <Box
      className={styles.hero}
      sx={{ display: "flex", gap: "45px", alignItems: "center" }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins ", fontWeight: "600" }}
        >
          100 Thousand Songs, ad-free
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins ", fontWeight: "600" }}
        >
          Over thousands podcast episodes
        </Typography>
      </Box>
      <Box>
        <Box
          component="img"
          src={require("../../assets/hero_headphones.png")}
          width={160}
          alt="headphones"
        />
      </Box>
    </Box>
  );
}

export default Hero;

import * as React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import { Box } from "@mui/material";

export default function Card({ image, follows }) {
  return (
    <Box className={styles.container}>
      <Box className={styles["img-container"]}>
        <Box component="img" src={image} alt="bird" className={styles.img} />
      </Box>

      <Box className={styles["chip-container"]}>
        <Chip
          label={`${follows} Follows`}
          style={{
            backgroundColor: "var(--color-black)",
            color: "white",
            fontSize: "12px",
            fontFamily: "Poppins"
          }}
        />
      </Box>
    </Box>
  );
}

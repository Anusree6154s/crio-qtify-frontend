import * as React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

export default function Card({ image, follows }) {
  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src={image} alt="bird" className={styles.img} />
      </div>

      <div className={styles["chip-container"]}>
        <Chip
          label={`${follows} Follows`}
          style={{
            backgroundColor: "var(--color-black)",
            color: "white",
            fontSize: "12px",
          }}
        />
      </div>
    </div>
  );
}

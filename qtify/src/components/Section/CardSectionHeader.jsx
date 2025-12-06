import { Button, Grid, Typography } from "@mui/material";
import styles from "./Section.module.css";

export default function CardSectionHeader({
  songs,
  title,
  albumType,
  setCollapse,
  collapsed,
}) {
  return (
    <Grid item xs={12} className={styles.header}>
      <Typography component="span" className={styles.title}>
        {songs ? title : `${title} Albums`}
      </Typography>

      {!songs && (
        <Button
          disableRipple
          className={styles.collapseButton}
          onClick={() => {
            if (albumType) {
              setCollapse((prev) => ({ ...prev, top: !prev[albumType] }));
            }
          }}
        >
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      )}
    </Grid>
  );
}

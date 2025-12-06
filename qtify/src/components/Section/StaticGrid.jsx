import { Grid, Typography } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { useNavigate } from "react-router-dom";

export default function StaticGrid({ data }) {
  const navigate = useNavigate();

  if (!data) return null;

  return data.map((group, index) => (
    <Grid
      item
      key={index}
      className={styles.cardContainer}
      onClick={() => navigate(`/albumdetails/${group.id}`)}
      sx={(theme) => ({
        [theme.breakpoints.down(320)]: { width: "100%" },
        [theme.breakpoints.between(321, 425)]: { width: "50%" },
        [theme.breakpoints.between(426, 667)]: { width: "33%" },
        [theme.breakpoints.between(668, 799)]: { width: "25%" },
        [theme.breakpoints.between(800, 1023)]: { width: "20%" },
        [theme.breakpoints.between(1024, 1439)]: { width: "16.66%" },
        [theme.breakpoints.between(1440, 1639)]: { width: "14.28%" },
        [theme.breakpoints.up(1640)]: { width: "12.5%" },
      })}
    >
      <Card image={group.image} follows={group.follows} />
      <Typography className={styles.cardTitle} component="span">
        {group.title}
      </Typography>
    </Grid>
  ));
}

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
      lg={12 / 7}
      md={12 / 5}
      sm={3}
      key={index}
      className={styles.cardContainer}
      onClick={() => navigate(`/albumdetails/${group.id}`)}
      sx={(theme) => ({
        [theme.breakpoints.down(320)]: { width: "100%" },
        [theme.breakpoints.between(321, 425)]: { width: "50%" },
        [theme.breakpoints.between(426, 565)]: { width: "33%" },
      })}
    >
      <Card image={group.image} follows={group.follows} />
      <Typography className={styles.cardTitle} component="span">
        {group.title}
      </Typography>
    </Grid>
  ));
}

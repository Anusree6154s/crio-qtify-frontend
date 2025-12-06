import { Grid } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import CardSectionHeader from "./CardSectionHeader";
import styles from "./Section.module.css";
import StaticGrid from "./StaticGrid";

export default function CardSection({
  songs,
  title,
  albumType,
  setCollapsed,
  collapsed,
  data,
  genres,
}) {
  return (
    <Grid container spacing={4} className={styles.container}>
      <CardSectionHeader
        songs={songs}
        title={title}
        albumType={albumType}
        setCollapsed={setCollapsed}
        collapsed={collapsed}
      />

      {collapsed ? (
        <Carousel data={data} songs={songs} genres={genres} />
      ) : (
        <StaticGrid data={data} />
      )}
    </Grid>
  );
}

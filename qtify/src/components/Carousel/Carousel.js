import Grid from "@mui/material/Grid";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

import CardSwiper from "./CardSwiper";
import SongsSection from "./SongsSection";

export default function Carousel({ data, songs = false, genres }) {
  const [value, setValue] = useState("all");

  return (
    <Grid item xs={12}>
      {!songs && <CardSwiper data={data} />}
      {songs && (
        <SongsSection
          value={value}
          handleChange={setValue}
          genres={genres}
          data={data}
        />
      )}
    </Grid>
  );
}

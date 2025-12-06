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
      {!songs && <CardSwiper data={data} songs={songs} />}
      {songs && (
        <SongsSection
          value={value}
          setValue={setValue}
          genres={genres}
          data={data}
          songs={songs}
        />
      )}
    </Grid>
  );
}

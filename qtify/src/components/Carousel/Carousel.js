import React, { useState, useMemo, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import { Typography } from "@mui/material";
import "./Carousel.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { MusicContext } from "../../MusicContext";
import { useNavigate } from "react-router-dom";

export default function Carousel({ data, songs = false, genres }) {
  const [value, setValue] = useState("all");
  const { selectedSong, setSelectedSong } = useContext(MusicContext);
  const navigate = useNavigate();

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Handle song selection
  const handleSelectSong = (group) => {
    setSelectedSong(group);
  };

  // Handle navigation to album details
  const handleNavigate = (id) => {
    navigate(`/albumdetails/${id}`);
  };

  // Memoize the Swiper component
  const memoizedSwiper = useMemo(() => {
    const renderSwiper = (filteredData) => (
      <Swiper
        slidesPerView={1}
        breakpoints={{
          280: { slidesPerView: 2, spaceBetween: 30 },
          400: { slidesPerView: 3, spaceBetween: 30 },
          668: { slidesPerView: 5, spaceBetween: 30 },
          1024: { slidesPerView: 7, spaceBetween: 30 },
        }}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {filteredData?.map((group, index) => (
          <SwiperSlide
            key={index}
            onClick={() =>
              !songs ? handleNavigate(group.id) : handleSelectSong(group)
            }
            style={{ cursor: "pointer" }}
          >
            <Card image={group.image} follows={group.follows} />
            <Typography sx={{ color: "white", textAlign: "left" }}>
              {group.title}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    );
    return renderSwiper;
  }, [songs]); // Add `songs` to dependencies to ensure memoization works correctly

  return (
    <Grid item xs={12}>
      {songs ? (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                TabIndicatorProps={{
                  style: { backgroundColor: "var(--color-primary)" },
                }}
              >
                <Tab label="All" value="all" style={{ color: "white" }} />
                {genres?.map((genre, index) => (
                  <Tab
                    key={index}
                    label={genre?.label}
                    value={genre?.key}
                    style={{ color: "white" }}
                  />
                ))}
              </TabList>
            </Box>
            <TabPanel value="all">{memoizedSwiper(data)}</TabPanel>
            {genres?.map((genre) => (
              <TabPanel key={genre.key} value={genre.key}>
                {memoizedSwiper(
                  data?.filter((item) => item.genre.key === genre.key)
                )}
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      ) : (
        memoizedSwiper(data)
      )}
    </Grid>
  );
}

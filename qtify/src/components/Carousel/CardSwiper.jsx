import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MusicContext } from "../../MusicContext";
import Card from "../Card/Card";
import "./Carousel.css";

function CardSwiper({ data, songs }) {
  const { selectedSong, setSelectedSong } = useContext(MusicContext);

  const navigate = useNavigate();

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        321: { slidesPerView: 2, spaceBetween: 30 },
        426: { slidesPerView: 3, spaceBetween: 30 },
        668: { slidesPerView: 4, spaceBetween: 30 },
        800: { slidesPerView: 5, spaceBetween: 30 },
        1024: { slidesPerView: 6, spaceBetween: 30 },
        1440: { slidesPerView: 7, spaceBetween: 30 },
        1640: { slidesPerView: 8  , spaceBetween: 30 },
      }}
      spaceBetween={10}   
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {data?.map((group, index) => (
        <SwiperSlide
          key={index}
          onClick={() =>
            !songs
              ? navigate(`/albumdetails/${group.id}`)
              : setSelectedSong(group)
          }
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <Card image={group.image} follows={group.follows} />
          <Typography
            component="span"
            sx={{
              color: "white",
              textAlign: "left",
              fontSize: "14px",
              fontFamily: "Poppins ",
            }}
          >
            {group.title}
          </Typography>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default React.memo(CardSwiper);

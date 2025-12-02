import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MusicBar from "../MusicBar/MusicBar";
import axios from "axios";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { MusicContext } from "../../MusicContext";

import styles from "./AlbumDetails.module.css";

function AlbumDetails({ data }) {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { selectedSong, setSelectedSong } = React.useContext(MusicContext);

  useEffect(() => {
    if (id && data) {
      const allData = [...data.new, ...data.top];
      const foundAlbum = allData.find((item) => item.id === id);
      setAlbum(foundAlbum);
    }
  }, [id, data]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const songsPerPage = 13;
  const startIndex = (page - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const currentSongs = album ? album.songs.slice(startIndex, endIndex) : [];

  if (!album) {
    return <div className={styles.loading}>Loading...</div>;
  }

  function totalDuration() {
    let durationInMillis = album.songs.reduce(
      (acc, curr) => curr.durationInMs + acc,
      0
    );
    const minutes = Math.floor(durationInMillis / 60000); // 1 minute = 60,000 milliseconds
    return `${minutes} min`;
  }

  return (
    <div className={styles.albumDetails}>
      <Stack className={styles.stack} spacing={2}>
        <div className={styles.header}>
          <ArrowCircleLeftOutlinedIcon onClick={() => navigate("/")} />
          <img src={album.image} alt={album.title} />
          <div>
            <h3>{album.title}</h3>
            <div>
              <p>{album.description}</p>
              <p>
                {album.songs.length} songs • {totalDuration()} • {album.follows}{" "}
                Follows
              </p>
            </div>
          </div>
        </div>

        <div className={styles.pagination}>
          <Pagination
            count={Math.ceil(album.songs.length / songsPerPage)}
            page={page}
            onChange={handleChange}
            size="small"
          />
        </div>

        <TableContainer component={Paper} className={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> Title </TableCell>
                <TableCell> Artist </TableCell>
                <TableCell sx={{ textAlign: "right !important" }}>
                  {" "}
                  Duration{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentSongs.map((song, index) => (
                <TableRow key={index} onClick={() => setSelectedSong(song)}>
                  <TableCell>
                    <img src={song.image} alt={song.title} />
                    {song.title}
                  </TableCell>
                  <TableCell>{song.artists.join(", ")}</TableCell>
                  <TableCell>
                    {Math.ceil(song.durationInMs / 60000)} min
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <MusicBar src="../../assets/music.mp3" />
    </div>
  );
}

export default AlbumDetails;

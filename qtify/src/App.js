import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { MusicContext } from "./MusicContext";
import { Backdrop, CircularProgress, Fade } from "@mui/material";

export const fetchData = async (path) => {
  try {
    let res = await axios.get("/api/" + path);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

function App() {
  const [data, setData] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    let arr = [
      { path: "albums/new", type: "new" },
      { path: "albums/top", type: "top" },
      { path: "songs", type: "songs" },
      { path: "genres", type: "genres" },
      { path: "faq", type: "faq" },
    ];
    let fetchedData = {};
    const fetchAllData = async () => {
      await Promise.all(
        arr.map(async (item) => {
          const data = await fetchData(item.path);
          fetchedData[item.type] = data;
        })
      );
      // After all states are set
      setData(fetchedData);
    };

    fetchAllData();
  }, []);

  return (
    <MusicContext.Provider value={{ selectedSong, setSelectedSong }}>
      <Fade in={!data} timeout={300}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 3 }}
          open={!data}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Fade>
      ;
      {data && (
        <div className="App">
          <Navbar data={data} />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route
              path="/albumdetails/:id"
              element={<AlbumDetails data={data} />}
            />
          </Routes>
        </div>
      )}
    </MusicContext.Provider>
  );
}

export default App;

import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { MusicContext } from "./MusicContext";

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
      setData(fetchedData);
    };

    fetchAllData();
  }, []);

  return (
    <MusicContext.Provider value={{ selectedSong, setSelectedSong }}>
      <Loader data={data} />
      {data && (
        <Box className="App">
          <Navbar data={data} />
          <AppRoutes data={data} />
        </Box>
      )}
    </MusicContext.Provider>
  );
}

export default App;

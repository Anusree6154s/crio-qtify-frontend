import styles from "./Home.module.css";

import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Hero from "../Hero/Hero";
import MusicBar from "../MusicBar/MusicBar";
import Albums from "./Albums";

export const fetchData = async (type) => {
  try {
    let res = await axios.get("/api/" + type);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
function Home({ data }) {
  const [collapsed, setCollapse] = useState({ top: true, new: true });

  return (
    <Box className={styles.home}>
      <Hero />
      <Albums data={data} setCollapse={setCollapse} collapsed={collapsed} />
      <MusicBar />
    </Box>
  );
}

export default Home;

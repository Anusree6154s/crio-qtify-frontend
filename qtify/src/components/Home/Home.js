import styles from "./Home.module.css";

import Hero from "../Hero/Hero";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import { Stack, Divider } from "@mui/material";
import MusicBar from "../MusicBar/MusicBar";

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
    <div className={styles.home}>
      <Hero />
      {data && (
        <Stack>
          <Section
            title="Top"
            data={{ data: data.top, type: "grid" }}
            setCollapse={setCollapse}
            collapsed={collapsed.top}
            albumType="top"
          />
          <Divider sx={{ display: collapsed?.top ? "none" : "block" }} />
          <Section
            title="New"
            data={{ data: data.new, type: "grid" }}
            setCollapse={setCollapse}
            collapsed={collapsed.new}
            albumType="new"
          />
          <Divider />
          <Section
            title="Songs"
            data={{ data: data.songs, type: "grid" }}
            songs={true}
            genres={data.genres?.data}
          />
          <Divider />
          <Section title="FAQs" data={{ data: data.faq?.data, type: "faq" }} />
        </Stack>
      )}
      <MusicBar />
    </div>
  );
}

export default Home;

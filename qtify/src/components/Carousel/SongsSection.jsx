import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab } from "@mui/material";
import CardSwiper from "./CardSwiper";

export default function SongsSection({ value, handleChange, genres, data }) {
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          TabIndicatorProps={{
            style: { backgroundColor: "var(--color-primary)" },
          }}
        >
          <Tab
            label="All"
            value="all"
            style={{ color: "white" }}
            // variant="scrollable"
            // scrollButtons
            // allowScrollButtonsMobile
          />
          {genres?.map((genre, index) => (
            <Tab
              key={index}
              label={genre?.label}
              value={genre?.key}
              style={{ color: "white" }}
              //   variant="scrollable"
              //   scrollButtons
              //   allowScrollButtonsMobile
            />
          ))}
        </TabList>

        <TabPanel value="all">
          <CardSwiper data={data} />
        </TabPanel>

        {genres?.map((genre) => (
          <TabPanel key={genre.key} value={genre.key}>
            <CardSwiper
              data={data?.filter((item) => item.genre.key === genre.key)}
            />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

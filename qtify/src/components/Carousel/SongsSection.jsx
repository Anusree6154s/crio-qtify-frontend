import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab } from "@mui/material";
import CardSwiper from "./CardSwiper";

export default function SongsSection({ value, setValue, genres, data, songs }) {
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList
          onChange={(_, newValue) => setValue(newValue)}
          TabIndicatorProps={{
            style: { backgroundColor: "var(--color-primary)" },
          }}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            // Scroll buttons (left/right arrows)
            "& .MuiTabs-scrollButtons": {
              color: "var(--color-primary)", // Default color
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)", // Hover bg
                color: "var(--color-primary)",
              },
            },
            // Disabled scroll buttons
            "& .MuiTabs-scrollButtons.Mui-disabled": {
              color: "rgba(255, 255, 255, 0.3)", // Semi-transparent white
            },
          }}
        >
          <Tab label="All" value="all" style={{ color: "white" }} />
          {genres?.map((genre) => (
            <Tab
              key={genre.key}
              label={genre?.label}
              value={genre?.key}
              style={{ color: "white" }}
            />
          ))}
        </TabList>

        <TabPanel value="all">
          <CardSwiper data={data} songs={songs} />
        </TabPanel>

        {genres?.map((genre) => (
          <TabPanel key={genre.key} value={genre.key}>
            <CardSwiper
              data={data?.filter((item) => item.genre.key === genre.key)}
              songs={songs}
            />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

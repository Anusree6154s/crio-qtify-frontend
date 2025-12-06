import { Divider, Stack } from "@mui/material";
import Section from "../Section/Section";

export default function Albums({ data, setCollapsed, collapsed }) {
  if (!data) return null;

  return (
    <Stack>
      <Section
        title="Top"
        data={{ data: data.top, type: "grid" }}
        setCollapsed={setCollapsed}
        collapsed={collapsed.top}
        albumType="top"
      />
      <Divider sx={{ display: collapsed?.top ? "none" : "block" }} />
      <Section
        title="New"
        data={{ data: data.new, type: "grid" }}
        setCollapsed={setCollapsed}
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
  );
}

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import { Typography, Stack, Button, Box } from "@mui/material";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

export default React.memo(function Section({
  title,
  data: { data, type },
  songs = false,
  genres,
  setCollapse,
  collapsed = true,
  albumType,
}) {
  const navigate = useNavigate();

  return (
    <>
      <Loader data={data} />;
      {type === "grid" ? (
        <Grid container spacing={4} className={styles.container}>
          <Grid item xs={12} className={styles.header}>
            <Typography
              component="span"
              className={styles.title}
              sx={{ fontFamily: "Poppins" }}
            >
              {songs ? title : `${title} Albums`}
            </Typography>
            {!songs && (
              <Button
                disableRipple
                sx={{ textTransform: "none", fontFamily: "Poppins" }}
                className={styles.collapseButton}
                onClick={() => {
                  if (albumType) {
                    setCollapse((prev) => ({ ...prev, top: !prev[albumType] }));
                  }
                }}
              >
                {collapsed ? "Show All" : "Collapse"}
              </Button>
            )}
          </Grid>
          {collapsed ? (
            <Carousel data={data} songs={songs} genres={genres} />
          ) : (
            data &&
            data.map((group, index) => (
              <Grid
                item
                xs={12 / 7}
                key={index}
                className={styles.cardContainer}
                onClick={() => navigate(`/albumdetails/${group.id}`)}
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <Card image={group.image} follows={group.follows} />
                <Typography
                  className={styles.cardTitle}
                  component="span"
                  sx={{ fontFamily: "Poppins !important" }}
                >
                  {group.title}
                </Typography>
              </Grid>
            ))
          )}
        </Grid>
      ) : (
        <Box>
          <Typography component="h2">{title}</Typography>
          <Stack className={styles.faqContainer} spacing={1}>
            {data?.map((faq, index) => (
              <Accordion key={index} className={styles.faqAccordion}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className={styles.faqAccordionSummary}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails className={styles.faqAccordionDetails}>
                  {faq.answer}
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>

          <br />
        </Box>
      )}
    </>
  );
});

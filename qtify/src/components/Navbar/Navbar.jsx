import { Box } from "@mui/material";
import React from "react";
import CustomButton from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import FeedbackModal from "./FeedbackModal";
import styles from "./Navbar.module.css";

function Navbar({ data }) {
  const [open, setOpen] = React.useState(false);

  if (!data) return null;

  return (
    <>
      <Box
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--color-primary)",
          paddingBottom: { xs: "8px", sm: "0px" },
        }}
      >
        <Box className={styles.navbar}>
          <Logo />
          <Search
            placeholder="Search an album of your choice"
            searchData={data.new.concat(data.top)}
            sx={{
              display: "flex",
              opacity: { sm: 1, xs: 0 },
              pointerEvents: { sm: "auto", xs: "none" },
              transition: "opacity 0.05s ease",
            }}
          />
          <CustomButton onClick={() => setOpen(true)}>
            Give Feedback
          </CustomButton>
        </Box>
        <Search
          placeholder="Search an album of your choice"
          searchData={data.new.concat(data.top)}
          sx={{ display: { sm: "none", xs: "flex" } }}
          maxWidth={{ maxWidth: "88%" }}
        />
      </Box>

      <FeedbackModal open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;

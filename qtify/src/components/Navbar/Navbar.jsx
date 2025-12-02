import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Button/Button"; // Correct import for your custom button
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Box, Stack, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Navbar({ data }) {
  const [open, setOpen] = React.useState(false);

  if(!data) return null

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>
        <Search
          placeholder="Search a song of your choice"
          searchData={data.new.concat(data.top)}
        />
        <CustomButton onClick={() => setOpen(true)}>Give Feedback</CustomButton>
      </nav>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box sx={style}>
          <button onClick={() => setOpen(false)}>x</button>
          <Stack spacing={2} alignItems="center" className={styles.stack}>
            <h3>Feedback</h3>
            <TextField
              id="name"
              label="Full Name"
              variant="outlined"
              size="small"
            />
            <TextField
              id="email"
              label="Email ID"
              variant="outlined"
              size="small"
            />
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              size="small"
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              size="small"
              multiline
            />
            <Button variant="contained">Submit Feedback</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default Navbar;

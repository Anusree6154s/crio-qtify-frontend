import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./Navbar.module.css";

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

export default function FeedbackModal({ open, setOpen }) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.modal}
    >
      <Box sx={style}>
        <Stack alignItems="center" className={styles.stack}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              Feedback
            </Typography>
            <Close
              onClick={() => setOpen(false)}
              sx={{ position: "absolute", right: 0, cursor: "pointer" }}
            />
          </Box>
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
            sx={{
              "& .MuiInputBase-input": {
                minHeight: "136px",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: "192",
              height: "53",
              borderRadius: "12px",
              px: "14px",
              py: "13px",
              boxShadow: "none",
              fontFamily: "Poppins",
              fontSize: "18px",
              textTransform: "none",
              fontWeight: "600 !important",
            }}
          >
            Submit Feedback
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

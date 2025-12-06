import { Feedback } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import styles from "./Button.module.css";

export default function CustomButton({ children, onClick }) {
  return (
    <>
      <Button
        variant="contained"
        onClick={onClick}
        className={styles.button}
        sx={{
          display: { xs: "none", md: "block" },
          color: "var(--color-primary)",
          bgcolor: "var(--color-black)",
          textTransform: "none",
          fontWeight: "600 !important",
          fontSize: "13px !important",
          flexShrink: 0,
          "&:hover": {
            color: "var(--color-primary)",
            bgcolor: "var(--color-black)",
          },
        }}
      >
        {children}
      </Button>
      <IconButton
        variant="contained"
        onClick={onClick}
        className={styles.button}
        sx={{
          display: { xs: "flex", md: "none" },
          color: "var(--color-primary)",
          bgcolor: "var(--color-black)",
          alignItems: "center",
          "&:hover": {
            color: "var(--color-primary)",
            bgcolor: "var(--color-black)",
          },
        }}
      >
        <Feedback />
      </IconButton>
    </>
  );
}

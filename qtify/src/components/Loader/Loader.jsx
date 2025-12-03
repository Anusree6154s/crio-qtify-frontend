import { Backdrop, CircularProgress, Fade } from "@mui/material";

export default function Loader(data) {
  return (
    <Fade in={!data} timeout={300}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 3 }}
        open={!data}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Fade>
  );
}

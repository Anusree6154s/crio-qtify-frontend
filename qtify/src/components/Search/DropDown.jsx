import { Box, ListItem, Stack, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { truncate } from "../../helpers/helpers";
import styles from "./Search.module.css";

const Listbox = styled("ul")({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  height: "max-content",
  maxHeight: "300px",
  zIndex: 10,
  overflowY: "auto",
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  color: "white",
  "& li.Mui-focused": {
    backgroundColor: "#2d2d2dff",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#363636ff",
    color: "white",
  },
  scrollbarWidth: "thin",
});

    export default function DropDown({
    getListboxProps,
    groupedOptions,
    getOptionProps,
    searchWidth,
    }) {
    const navigate = useNavigate();

    if (!groupedOptions) return null;

    return (
        <Listbox {...getListboxProps()} sx={{ width: searchWidth || 400 }}>
        {groupedOptions.map((option, index) => {
            const artists = option.songs.reduce((accumulator, currentValue) => {
            accumulator.push(...currentValue.artists);
            return accumulator;
            }, []);

            return (
            <ListItem
                key={option.slug}
                {...getOptionProps({ option, index })}
                onClick={() => navigate(`/albumdetails/${option.id}`)}
                className={styles.listElement}
            >
                <Stack sx={{ textAlign: "left", width: "100%" }}>
                <Box sx={{ display: "flex", gap: "16px" }}>
                    <Box
                    component="img"
                    src={option.image}
                    alt={option.title}
                    className={styles.image}
                    />
                    <Stack sx={{ justifyContent: "center", width: "100%" }}>
                    <Box
                        sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        }}
                    >
                        <Typography
                        component="span"
                        className={styles.albumTitle}
                        sx={{ fontFamily: "Poppins" }}
                        >
                        {option.title}
                        </Typography>
                        <Typography
                        component="span"
                        className={styles.albumTitle}
                        sx={{ fontFamily: "Poppins" }}
                        >
                        {option.follows} Follows
                        </Typography>
                    </Box>
                    <Typography
                        component="span"
                        className={styles.albumArtists}
                        sx={{ fontFamily: "Poppins" }}
                    >
                        {truncate(artists.join(", "), 40)}
                    </Typography>
                    </Stack>
                </Box>
                </Stack>
            </ListItem>
            );
        })}
        </Listbox>
    );
}

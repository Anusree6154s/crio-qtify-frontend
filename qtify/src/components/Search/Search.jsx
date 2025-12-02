import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { Box, fontFamily, styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { ListItem, Stack, Typography } from "@mui/material";

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

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    getInputLabelProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();
  const onSubmit = (e, value) => {
    e.preventDefault();
    navigate(`/album/${value.slug}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={(e) => onSubmit(e, value)}>
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
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
                      sx={{
                        width: "66px",
                        height: "71px",
                        borderRadius: "10px",
                        borderWidth: "5px",
                        border: "5px solid #1D1D1D",
                      }}
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
      )}
    </div>
  );
}

export default Search;

import { useAutocomplete } from "@mui/base/useAutocomplete";
import { IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/search-icon.svg";
import DropDown from "./DropDown";
import styles from "./Search.module.css";

function Search({ searchData, placeholder, sx, maxWidth }) {
  const searchRef = useRef(null);
  const [searchWidth, setSearchWidth] = useState(null);

  const {
    getRootProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
    getOptionKey: (option) => option.id,
  });

  const navigate = useNavigate();
  const onSubmit = (e, value) => {
    e.preventDefault();
    navigate(`/album/${value.slug}`);
  };

  useEffect(() => {
    if (searchRef.current) {
      setSearchWidth(searchRef.current.offsetWidth);
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          transition: "max-width 0.3s ease",
          ...maxWidth,
        }}
        ref={searchRef}
      >
        <Box {...getRootProps()}>
          <Box
            component="form"
            className={styles.wrapper}
            onSubmit={(e) => onSubmit(e, value)}
          >
            <InputBase
              name="album"
              className={styles.search}
              placeholder={placeholder}
              inputComponent="input"
              required
              inputProps={getInputProps()}
            />
            <IconButton type="submit" className={styles.searchButton}>
              <Box
                component="img"
                src={SearchIcon}
                alt="search-icon"
                sx={{ height: "18px" }}
              />
            </IconButton>
          </Box>

          <DropDown
            getListboxProps={getListboxProps}
            groupedOptions={groupedOptions}
            getOptionProps={getOptionProps}
            searchWidth={searchWidth}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Search;

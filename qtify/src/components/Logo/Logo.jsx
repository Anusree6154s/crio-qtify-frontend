import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";

export default function Logo() {
  return (
    <Link to="/">
      {" "}
      <Box component="img" src={LogoImage} alt="logo" width={67} />
    </Link>
  );
}

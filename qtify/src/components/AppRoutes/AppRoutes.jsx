import { Route, Routes } from "react-router-dom";
import AlbumDetails from "../AlbumDetails/AlbumDetails";
import Home from "../Home/Home";

export default function AppRoutes({ data }) {

  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/albumdetails/:id" element={<AlbumDetails data={data} />} />
    </Routes>
  );
}

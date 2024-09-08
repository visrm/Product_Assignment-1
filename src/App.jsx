import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProdForm from "./components/ProdForm";
import ViewProd from "./components/ViewProd";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ViewProd />} />
        <Route path="/add" element={<ProdForm />} />
      </Routes>
    </>
  );
}

export default App;

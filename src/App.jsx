// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import Project from "./pages/Project";
import "./App.css";
import "./css/Home.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectAaryn from "./pages/projects/Aaryn";
import ProjectBiddaroo from "./pages/projects/Biddaroo";
import ProjectHolidaze from "./pages/projects/Holidaze";
import ScrollToTop from "./components/ScrollToTop";
import "./css/style.css";
import "./css/mediaqueries.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/Aaryn" element={<ProjectAaryn />} />
        <Route path="/projects/Biddaroo" element={<ProjectBiddaroo />} />
        <Route path="/projects/Holidaze" element={<ProjectHolidaze />} />
      </Routes>
    </Router>
  </React.StrictMode>

);

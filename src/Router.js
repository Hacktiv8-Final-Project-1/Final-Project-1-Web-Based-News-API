import React from "react";
import { Route, Routes } from "react-router-dom";
import Covid19 from "./pages/Covid19";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Indonesia />} />
      <Route path="/Programming" element={<Programming />} />
      <Route path="/COVID-19" element={<Covid19 />} />
      <Route path="/Search/:title" element={<Search />} />
      <Route path="/Saved" element={<Saved />} />
    </Routes>
  );
}

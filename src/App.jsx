import React from "react";
import Navbar from "./Components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/blog" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

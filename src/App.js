import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { currentTheme } = useStateContext();

  return (
    <div
      className={`!scroll-smooth ${currentTheme === "dark" ? "dark" : "light"}`}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

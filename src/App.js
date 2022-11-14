import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";

import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router";

import Layout from "./layout/Layout";
import { InputYoutubePage } from "./pages/InputYoutubePage/InputYoutubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import VideoPage from "./pages/VideosPage/VideoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/authorization" element={<LoginPage />} />
        <Route path="/videos/:id" element={<VideoPage />} />
        <Route path="/youtube" element={<InputYoutubePage />} />
      </Route>
    </Routes>
  );
}

export default App;

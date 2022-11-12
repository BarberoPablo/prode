import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teams from "./teams";
import Login from "./Components/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import { QueryClientProvider, QueryClient } from "react-query";
import GroupStage from "./Components/Matches/GroupStage";
import Matches from "./Components/Matches/Matches";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<NavBar />} />
          <Route path="/partidos" element={<Matches />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

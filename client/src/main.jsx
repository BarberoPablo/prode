import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teams from "./teams";
import Login from "./Components/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import { QueryClientProvider, QueryClient } from "react-query";
import AllMatches from "./Components/Matches/AllMatches";
import Matches from "./Components/Matches/Matches";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/partidos" element={<AllMatches />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

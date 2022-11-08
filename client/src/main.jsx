import React from "react";
import ReactDOM from "react-dom/client";
import { Teams } from "./teams";
import { QueryClientProvider, QueryClient } from "react-query";
//import App from "./asd/App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div> Hola mundillo</div>
      <Teams />
      {/* <App /> */}
    </QueryClientProvider>
  </React.StrictMode>
);

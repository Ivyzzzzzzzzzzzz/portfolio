import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../globals.css";
import "../styleguide.css";
import "./styles/app.css";
import "./styles/portfolio-system.css";
import "./styles/case-study-emphasis.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ThemeContextProvider>
);

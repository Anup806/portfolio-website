import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

if (import.meta.env.PROD) {
  const blockedKeys = new Set(["c", "x", "s", "u", "p"]);

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  document.addEventListener("copy", (event) => {
    event.preventDefault();
  });

  document.addEventListener("cut", (event) => {
    event.preventDefault();
  });

  document.addEventListener("dragstart", (event) => {
    if (event.target instanceof HTMLImageElement) {
      event.preventDefault();
    }
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if ((event.ctrlKey || event.metaKey) && blockedKeys.has(key)) {
      event.preventDefault();
    }
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

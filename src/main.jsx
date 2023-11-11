import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReduxProvider from "./providers/ReduxProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider />
  </React.StrictMode>
);

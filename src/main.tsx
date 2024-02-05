import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ClockRoot from "./components/Clock/clock-root.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClockRoot>
      <App />
    </ClockRoot>
  </React.StrictMode>,
);

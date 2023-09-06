import React from "react";
import ReactDOM from "react-dom/client";
import { Tablero } from "./Tablero";
import "./index.css";
import { ClockProvider } from "./context/ClockProvider";
import { ScoreProvider } from "./context/ScoreProvider";
import { FoulsProvider } from "./context/FoulsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClockProvider>
    <ScoreProvider>
      <FoulsProvider>
        <React.StrictMode>
          <Tablero />
        </React.StrictMode>
      </FoulsProvider>
    </ScoreProvider>
  </ClockProvider>
);

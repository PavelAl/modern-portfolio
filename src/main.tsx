import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App/App.tsx";
import "./theme/theme.css";
import "./index.css";
import "./fontawesome";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

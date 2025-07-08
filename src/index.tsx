import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DakarCafeLanding } from "./components/DakarCafeLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DakarCafeLanding />
  </StrictMode>,
);

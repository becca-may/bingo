import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Bingo from "./components/Bingo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Bingo />
  </StrictMode>
);

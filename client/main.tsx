import "./global.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const root = document.getElementById("root")!;
const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, application);
} else {
  createRoot(root).render(application);
}

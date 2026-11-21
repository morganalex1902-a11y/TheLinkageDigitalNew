import "./global.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const root = document.getElementById("root")!;
const clerkPublishableKey = (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) throw new Error("VITE_CLERK_PUBLISHABLE_KEY is required");

const application = (
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, application);
} else {
  createRoot(root).render(application);
}

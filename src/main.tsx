import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.tsx";
import { QueryClientProvider } from "./components/QueryClientProvier";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CounterProvider from "./context/CounterProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);

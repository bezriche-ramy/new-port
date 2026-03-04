import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store.js";

if ("performance" in window && "mark" in window.performance) {
  performance.mark("app-start");
}

if (import.meta.env.PROD && typeof window !== "undefined") {
  if ("__REACT_DEVTOOLS_GLOBAL_HOOK__" in window) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

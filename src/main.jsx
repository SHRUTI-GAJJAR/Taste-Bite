import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApiProvider } from "./context/apiContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApiProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApiProvider>
  </BrowserRouter>
);

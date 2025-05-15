import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApiProvider } from "./context/apiContext.jsx";
import { ViewModeProvider } from "./context/viweModeContext.jsx";
import { FoodCategoryProvider } from "./context/FoodCategoryContext.jsx";
import FoodSortProvider from "./context/FoodSortContext.jsx";
import { BookmarkProvider } from "./context/BookmarkContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BookmarkProvider>
      <ApiProvider>
        <FoodCategoryProvider>
          <FoodSortProvider>
            <ThemeProvider>
              <ViewModeProvider>
                <App />
              </ViewModeProvider>
            </ThemeProvider>
          </FoodSortProvider>
        </FoodCategoryProvider>
      </ApiProvider>
    </BookmarkProvider>
  </BrowserRouter>
);

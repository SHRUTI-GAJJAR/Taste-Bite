import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { createRoot } from "react-dom/client";
import { ApiProvider } from "./context/apiContext.jsx";
import { ViewModeProvider } from "./context/viweModeContext.jsx";
import FoodSortProvider from "./context/FoodSortContext.jsx";
import { BookmarkProvider } from "./context/BookmarkContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FilterProvider>
      <BookmarkProvider>
        <ApiProvider>
          <FoodSortProvider>
            <ThemeProvider>
              <ViewModeProvider>
                <App />
              </ViewModeProvider>
            </ThemeProvider>
          </FoodSortProvider>
        </ApiProvider>
      </BookmarkProvider>
    </FilterProvider>
  </BrowserRouter>
);

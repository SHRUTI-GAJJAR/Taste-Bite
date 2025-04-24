import { useTheme } from "./context/ThemeContext";
import Home from "./page/Home";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Home></Home>
  );
}

export default App;

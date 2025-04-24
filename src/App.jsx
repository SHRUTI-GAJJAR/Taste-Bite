import { useTheme } from "./context/ThemeContext";
import Routing from "./services/router/Routing";
import Home from "./page/Home";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Routing>
        <Home></Home>
      </Routing>
    </>
  );
}

export default App;

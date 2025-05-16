import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import SearchBox from "../components/Navbar/SearchBox";
import AllRecipesDisplay from "../components/All-Recipes/AllRecipesDisplay";
import { Outlet } from "react-router";

const Recipe = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
        <NavBar />
      <main>
        <AllRecipesDisplay />
        <Outlet />
      </main>
    </div>
  );
};

export default Recipe;

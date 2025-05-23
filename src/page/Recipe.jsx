import NavBar from "../components/Navbar/NavBar";
import AllRecipesDisplay from "../components/All-Recipes/AllRecipesDisplay";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Recipe = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
      <NavBar />
      <main>
        <AllRecipesDisplay />
        <Outlet />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Recipe;

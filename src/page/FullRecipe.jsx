import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import FullRecipeDetails from "../components/Full-Recipe/FullRecipeDetails";

const FullRecipe = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
      <NavBar />
      <main>
        <FullRecipeDetails></FullRecipeDetails>
      </main>
    </div>
  );
};

export default FullRecipe;

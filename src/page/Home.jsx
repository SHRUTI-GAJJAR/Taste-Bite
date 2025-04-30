import NavBar from "../components/Navbar/NavBar";
import Carousel from "../components/Slider/Carousel";
import HomePageCategory from "../components/Famous-Category/HomePageCategory";
import SearchBox from "../components/Navbar/SearchBox";
import NewRecipes from "../components/New-Arrival-Recipes/NewRecipes";
import "../App.css";

const Home = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
        <NavBar />
        <SearchBox />
      <main className="pb-20 ">
        <Carousel />
        <HomePageCategory />
        <NewRecipes />
      </main>
    </div>
  );
};

export default Home;

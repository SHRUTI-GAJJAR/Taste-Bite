import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import SearchBox from "../components/Navbar/SearchBox";

const Home = () => {
  return (
    <div className="w-full relative h-full bg-main dark:bg-main-dark transition-colors">
      <header>
        <NavBar />
        <SearchBox />
      </header>

      <main>
        
      </main>
    </div>
  );
};

export default Home;

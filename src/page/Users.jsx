import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import "../App.css";
import UserModule from "../components/User/UserModule";

const Users = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
        <NavBar />
      <main>
        <UserModule></UserModule>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Users;

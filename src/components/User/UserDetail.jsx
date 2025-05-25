import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import UserDetailPage from "./UserDetailPage";

const UserDetail = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
      <NavBar />
      <main>
        <UserDetailPage />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default UserDetail;

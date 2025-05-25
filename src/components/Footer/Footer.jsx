import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import testBiteLogo from "../../assets/svg/testBiteLogo.svg";

const Footer = () => {
  return (
    <section className="footer dark:bg-[#1e1e1e] bg-[#f0f2f5]">
      <div className="mt-4 text-gray-700 dark:text-gray-300 p-2 flex items-center flex-col justify-center m-auto md:max-w-[75vw] w-[97vw]">
        <div className="logoSideAndLink flex lg:w-full items-start justify-center lg:flex-row lg:justify-between my-6 lg:items-center flex-col lg:my-10 gap-4">
          <div className="logo w-full flex flex-col my-2 items-start justify-center gap-3">
            <div className="logo h-12">
              <img src={testBiteLogo} className="h-full w-full" alt="logo" />
            </div>
            <div className="text lg:w-70 text-sm">
              <p>
                "Discover delicious recipes crafted with love and fresh
                ingredients. From quick bites to hearty meals, there's something
                for every taste. Made for food lovers, by food lovers - all in
                one place."
              </p>
            </div>
          </div>
          <div className="link grid grid-cols-2 w-full lg:gap-5 items-start lg:w-fit ">
            <div className="tasteBiteLinks flex flex-col items-start justify-center lg:gap-2">
              <h2 className="text-black/80 dark:text-white/90 font-semibold text-[1.2rem]">
                Tastebite
              </h2>
              <ul>
                <Link
                  className="hover:underline cursor-pointer text-sm"
                  to={`/`}
                >
                  <li>Home</li>
                </Link>
                <Link
                  className="hover:underline cursor-pointer text-sm"
                  to={`/Recipe/All`}
                >
                  <li>Recipes</li>
                </Link>
                <Link
                  className="hover:underline cursor-pointer text-sm"
                  to={`/Categories`}
                >
                  <li>Categorise</li>
                </Link>
                <Link
                  className="hover:underline cursor-pointer text-sm"
                  to={`/BookmarkedRecipes`}
                >
                  <li>Bookmarked Recipes</li>
                </Link>
              </ul>
            </div>
            <div className="socialMedia flex flex-col items-start justify-center lg:gap-2">
              <h2 className="text-black/80 dark:text-white/90 font-semibold text-[1.2rem]">
                Follow
              </h2>
              <ul>
                <Link
                  className="hover:underline cursor-pointer text-sm"
                  to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
                >
                  <li>Linkedin</li>
                </Link>
                <Link
                  className="hover:underline cursor-pointer text-sm"
                  to={`https://github.com/hardikdevaliya2006`}
                >
                  <li>Github</li>
                </Link>
                <Link
                  className="hover:underline cursor-pointer text-sm"
                  to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
                >
                  <li>Instagram</li>
                </Link>
                <Link
                  className="hover:underline cursor-pointer text-sm"
                  to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
                >
                  <li>Facebook</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="line border-gray-400 dark:border-[#2d2d2d] dark:border-b-[0.125rem] h-1 w-full border-b-1 my-1 "></div>
        <div className="redirectLinks w-full flex items-center justify-between">
          <div className="made">
            <p>Made for you, with 💙</p>
          </div>
          <div className="socialMedia flex items-center justify-center gap-4">
            <Link
              className="cursor-pointer"
              to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
            >
              <FaLinkedin className="text-[1.2rem]" />
            </Link>
            <Link
              className="cursor-pointer"
              to={`https://github.com/hardikdevaliya2006`}
            >
              <FaGithub className="text-[1.2rem]" />
            </Link>
            <Link
              className="cursor-pointer"
              to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
            >
              <FaInstagram className="text-[1.2rem]" />
            </Link>
            <Link
              className="cursor-pointer"
              to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
            >
              <FaFacebook className="text-[1.2rem]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

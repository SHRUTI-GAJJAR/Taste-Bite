import React from "react";
import { useTheme } from "../../context/ThemeContext";
import pizza from "../../assets/svg/pizza.svg";

const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <ul className="flex items-center justify-center">
      <li className="h-fit w-fit flex justify-center items-center">
        <button
          onClick={toggleTheme}
          className={`relative cursor-pointer md:w-14 md:h-8 w-10 h-6 rounded-full bg-[linear-gradient(to_right,#dc2e0bcc,#d75d45cc)] dark:bg-transperent-dark`}
        >
          <span>
            <img
              src={pizza}
              className={`md:h-8 h-6 absolute top-0 transition-transform ${
                theme === "dark"
                  ? "md:translate-x-6 translate-x-4"
                  : "translate-x-0"
              }`}
              alt="pizzaIcon"
            />
          </span>
        </button>
      </li>
    </ul>
  );
};

export default ThemeToggle;

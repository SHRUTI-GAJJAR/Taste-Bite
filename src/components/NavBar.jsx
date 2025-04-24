import React from "react";
import testBiteLogo from "../assets/svg/testBiteLogo.svg";
import { NavLink } from "react-router";
import Navigations from "./Navigations";

const NavBar = () => {
  return (
    <nav>
      <div className="logoWrap flex ">
        <NavLink to="/">
          <img src={testBiteLogo} alt="logoIcon" />
        </NavLink>
      </div>
      <div className="navigation-wrap">
        <ul className="dark:text-font-dark">
          <Navigations></Navigations>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

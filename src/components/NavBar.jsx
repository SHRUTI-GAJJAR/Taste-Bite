import React from "react";
import testBiteLogo from "../assets/svg/testBiteLogo.svg";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <div className="logoWrap">
        <NavLink to="/">
          <img src={testBiteLogo} alt="logoIcon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

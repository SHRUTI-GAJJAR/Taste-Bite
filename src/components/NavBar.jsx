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
        <p>uyuyuyu Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia odit beatae nobis itaque incidunt obcaecati pariatur quisquam voluptas quos sequi iure aspernatur, nam rem debitis inventore. Accusantium, itaque culpa.</p>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

const Navigations = () => {
  return (
    <>
      <li>Home</li>
      <li>Recipe</li>
      <li>Categories</li>
      <li>
        <p>Navigation</p>
        <FaChevronDown />
      </li>
      <li>
        <IoSearchOutline />
      </li>
    </>
  );
};

export default Navigations;

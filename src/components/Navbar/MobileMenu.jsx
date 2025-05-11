import React from "react";
import menuIcon from "../../assets/svg/scrollText.svg";
import { MdArrowOutward } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router";
import { MdFavoriteBorder } from "react-icons/md";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSubMenu, setSubMenuToggle] = useState(false);

  const handelMenu = () => {
    setToggle((prev) => !prev);
  };

  const handelSubMenu = () => {
    setSubMenuToggle((prev) => !prev);
  };

  return (
    <>
      <div className="mobileMegaMenu sm:hidden flex">
        <div
          onClick={handelMenu}
          className={`menuIco ${
            toggle ? "bg-transparent" : "bg-transperent-border-dark"
          } transition ease-in-out h-8 w-8 rounded-sm border-1 border-theme-light flex items-center justify-center`}
        >
          <img
            src={menuIcon}
            className="text-theme-light h-5 w-5"
            alt="menuIco"
          />
        </div>
        <div
          className={`menuItemsWrap transition-all duration-300 ease-in-out overflow-hidden ${
            toggle ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top absolute z-50 h-fit w-full bg-theme-light rounded-md top-[3rem]`}
        >
          <ul className="w-full bg-theme-light flex flex-col px-1.5 text-[1rem] text-white">
            <li className="flex p-2 w-full cursor-pointer items-center justify-between">
              <span>
                <NavLink to={"/"}>Home</NavLink>
              </span>
              <MdArrowOutward size={"1.3em"} />
            </li>
            <i className="line h-fit w-full border-0.1 border-b border-dashed border-white"></i>
            <li
              onClick={handelSubMenu}
              className="flex p-2 w-full cursor-pointer items-center justify-between"
            >
              <span>Navigation</span>
              <FaChevronDown
                size={"1em"}
                className="mr-1 transition-transform duration-300"
                style={{
                  transform: toggleSubMenu ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />{" "}
            </li>
            <div
              className={`subMenuWrap overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${
                toggleSubMenu ? "max-h-40 pb-1.5 " : "max-h-0"
              }`}
            >
              <ul className="m-w-[90%] ml-5 pl-1 flex flex-col bg-white border-gray-200 border-1 text-black rounded-md">
                <NavLink to={"/AddProduct"}>
                  <li className="m-0.5 w-full h-8 flex items-center gap-2">
                    <span className="bg-green-200 border-1 border-green-400 flex items-center justify-center h-6 w-6 rounded-full">
                      <IoAdd />
                    </span>
                    <span>Add Product</span>
                  </li>
                </NavLink>
                <NavLink to={"/DeleteProduct"}>
                  <li className="m-0.5 w-full h-8 flex items-center gap-2">
                    <span className="bg-red-200 border-1 border-red-400 flex items-center justify-center h-6 w-6 rounded-full">
                      <IoIosRemoveCircleOutline />
                    </span>
                    <span>Delete Product</span>
                  </li>
                </NavLink>
                <NavLink to={"/UpdateProduct"}>
                  <li className="m-0. w-full h-8 flex items-center gap-2">
                    <span className="border-yellow-400 border-1 bg-yellow-200 flex items-center justify-center h-6 w-6 rounded-full">
                      <MdEdit />
                    </span>
                    <span>Edit Product</span>
                  </li>
                </NavLink>
                <NavLink to={"/FavoriteRecipes"}>
                  <li className="m-0. w-full h-8 flex items-center gap-2">
                    <span className="border-orange-400 border-1 bg-orange-200 flex items-center justify-center h-6 w-6 rounded-full">
                      <MdFavoriteBorder />
                    </span>
                    <span>Bookmarked Recipes</span>
                  </li>
                </NavLink>
              </ul>
            </div>
            <i className="line h-fit w-full border-0.1 border-b border-dashed border-white"></i>
            <li className="flex p-2 w-full cursor-pointer items-center justify-between">
              <span>
                <NavLink to={"/Recipe"}>Recipe</NavLink>
              </span>
              <MdArrowOutward size={"1.3em"} />
            </li>
            <i className="line h-fit w-full border-0.1 border-b border-dashed border-white"></i>
            <li className="flex p-2 w-full cursor-pointer items-center justify-between">
              <span>
                <NavLink to={"/Categories"}>Categories</NavLink>
              </span>
              <MdArrowOutward size={"1.3em"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

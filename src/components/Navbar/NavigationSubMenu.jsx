import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router";
import { IoAdd } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const NavigationSubMenu = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const locationPath = useLocation();

  const activePath = [
    "/AddProduct",
    "/DeleteProduct",
    "/UpdateProduct",
    "/BookmarkedRecipes",
  ];
  const isSubMenuActive = activePath.includes(locationPath.pathname);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };
  return (
    <>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <li
          className={`cursor-pointer ${
            isSubMenuActive
              ? "bg-transperent-dark transition-all border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded dark:text-white border-transperent-border-dark"
              : "bg-transparent border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded border-transparent transition-all"
          }
          }cursor-pointer flex items-center justify-center pt gap-0.5 hover:text-gray-800 dark:hover:text-white transition-colors`}
        >
          <p>Navigation</p>
          <FaChevronDown className="md:h-3 h-2.5 md:mt-1 mt-0.5" />
        </li>

        {open && (
          <ul className="absolute text-black dark:text-white text-sm md:text-[1.2rem] md:top-[3rem] top-[2.5rem] left-0 md:min-w-50 min-w-20 max-w-xs border-2 rounded-md border-border-light dark:border-border-dark bg-white dark:bg-sub-black py-2 z-50 overflow-hidden">
            <li className="whitespace-nowrap overflow-hidden text-ellipsis md:mx-1 mx-0.5 rounded-sm md:px-2 px-1 py-0.5 md:min-w-40 min-w-25 hover:bg-hover-light dark:hover:bg-hover-dark transition">
              <NavLink className="flex gap-1.5 items-center" to={"/AddProduct"}>
                <span className="flex items-center justify-center h-6 w-6 border-1 bg-green-200 border-green-400 rounded-full">
                  <IoAdd className="text-black h-4 w-4" />
                </span>
                <span>Add Product</span>
              </NavLink>
            </li>
            <li className="whitespace-nowrap overflow-hidden text-ellipsis md:mx-1 mx-0.5 rounded-sm md:px-2 px-1 py-0.5 md:min-w-40 min-w-25 hover:bg-hover-light dark:hover:bg-hover-dark transition">
              <NavLink
                className="flex gap-1.5 items-center"
                to={"/DeleteProduct"}
              >
                <span className="flex items-center justify-center h-6 w-6 border-1 bg-red-200 border-red-400 rounded-full">
                  <IoIosRemoveCircleOutline className="text-black h-4 w-4" />
                </span>
                <span>Delete Product</span>
              </NavLink>
            </li>
            <li className="whitespace-nowrap overflow-hidden text-ellipsis md:mx-1 mx-0.5 rounded-sm md:px-2 px-1 py-0.5 md:min-w-40 min-w-25 hover:bg-hover-light dark:hover:bg-hover-dark transition">
              <NavLink
                className="flex gap-1.5 items-center"
                to={"/UpdateProduct"}
              >
                <span className="flex items-center justify-center h-6 w-6 border-1 bg-yellow-200 border-yellow-400 rounded-full">
                  <MdEdit className="text-black h-4 w-4" />
                </span>
                <span>Update Product</span>
              </NavLink>
            </li>
            <li className="whitespace-nowrap overflow-hidden text-ellipsis md:mx-1 mx-0.5 rounded-sm md:px-2 px-1 py-0.5 md:min-w-40 min-w-25 hover:bg-hover-light dark:hover:bg-hover-dark transition">
              <NavLink
                className="flex gap-1.5 items-center"
                to={"/BookmarkedRecipes"}
              >
                <span className="flex items-center justify-center h-6 w-6 border-1 bg-orange-200 border-orange-400 rounded-full">
                  <MdFavoriteBorder className="text-black h-4 w-4" />
                </span>
                <span>Bookmark Recipes</span>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavigationSubMenu;

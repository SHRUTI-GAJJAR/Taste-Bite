import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router";

const NavigationSubMenu = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const locationPath = useLocation();

  const activePath = ["/AddProduct", "/DeleteProduct", "/UpdateProduct"];
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
          className={`${
            isSubMenuActive
              ? "bg-transperent-dark transition-all border-1 px-2.5 py-0.5 rounded dark:text-white border-transperent-border-dark"
              : "bg-transparent border-1 px-2.5 py-0.5 rounded border-transparent transition-all"}
          }cursor-pointer flex items-center justify-center pt gap-0.5 hover:text-gray-800 dark:hover:text-white transition-colors`}
        >
          <p>Navigation</p>
          <FaChevronDown className="md:h-3 h-2.5 md:mt-1 mt-0.5" />
        </li>

        {open && (
          <ul className="absolute text-black dark:text-white text-sm md:text-[1.2rem] md:top-[3rem] top-[2.5rem] left-0 md:min-w-50 min-w-20 max-w-xs border-2 rounded-md border-border-light dark:border-border-dark bg-white dark:bg-sub-black py-2 z-50 overflow-hidden">
            <li className="whitespace-nowrap overflow-hidden text-ellipsis md:mx-1 mx-0.5 rounded-sm md:px-4 px-2 py-0.5 md:min-w-40 min-w-20 hover:bg-hover-light dark:hover:bg-hover-dark transition">
              <NavLink to={"/AddProduct"}>Add Product</NavLink>
            </li>
            <li className="whitespace-nowrap overflow-hidden text-ellipsis md:mx-1 mx-0.5 rounded-sm md:px-4 px-2 py-0.5 md:min-w-40 min-w-20 hover:bg-hover-light dark:hover:bg-hover-dark transition">
              <NavLink to={"/DeleteProduct"}>Delete Product</NavLink>
            </li>
            <li className="whitespace-nowrap overflow-hidden text-ellipsis md:mx-1 mx-0.5 rounded-sm md:px-4 px-2 py-0.5 md:min-w-40 min-w-20 hover:bg-hover-light dark:hover:bg-hover-dark transition">
              <NavLink to={"/UpdateProduct"}>Update Product</NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavigationSubMenu;

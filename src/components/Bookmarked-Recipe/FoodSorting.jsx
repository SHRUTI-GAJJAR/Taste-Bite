import React, { useState, useContext, useRef, useEffect } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { FoodSortContext } from "../../context/FoodSortContext";

const sortingOptions = [
  { label: "5 To 0", value: "rating-desc", icon: <BiSortDown /> },
  { label: "0 To 5", value: "rating-asc", icon: <BiSortUp /> },
  { label: "A To Z", value: "az", icon: <AiOutlineSortAscending /> },
  { label: "Z To A", value: "za", icon: <AiOutlineSortDescending /> },
]

const FoodSorting = () => {
  const { handleSort } = useContext(FoodSortContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    setSelected(option);
    handleSort(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex h-fit w-fit">
      <div
        className="cursor-pointer font-semibold text-sm px-3 text-white h-9 rounded-md bg-[linear-gradient(to_right,#e53935,#e35d5b)] flex items-center justify-center"
        onClick={toggleDropdown}
      >
        {selected ? (
          <span className="flex items-center gap-2">
            {selected.icon} {selected.label}
          </span>
        ) : (
          <span>Select Sort</span>
        )}
        <span className="inline-block">
          <RiArrowDropDownLine className="h-7 w-fit" />
        </span>
      </div>

      {isOpen && (
        <div className="absolute text-black dark:text-white top-8 mt-2 w-full dark:bg-[#1e1e1e] bg-white dark:border-2 dark:border-[#2d2d2d] border-theme-light border rounded z-10">
          {sortingOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className="flex items-center justify-between gap-2 px-4 py-2 cursor-pointer"
            >
              {option.icon}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodSorting;

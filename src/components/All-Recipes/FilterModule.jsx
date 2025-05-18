import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import FilterSheet from "./FilterSheet";
import { useFilter } from "../../context/FilterContext";

const FilterModule = () => {
  const [openFilterModule, setOpenFilterModule] = useState(false);

  const toggleDrawer = () => {
    setOpenFilterModule((prev) => !prev);
  };

  const { appliedFilterCount } = useFilter();

  return (
    <div className="w-full h-fit">
      <div className="w-full relative flex items-center justify-end">
        <div
          onClick={toggleDrawer}
          className="h-10 w-10 rounded-sm border bg-transperent-dark border-theme-light flex items-center justify-center cursor-pointer"
        >
          <LuFilter className="text-theme-light text-[1.2rem]" />
        </div>
        {appliedFilterCount === 0 ? (
          ""
        ) : (
          <div className="bage h-5 text-sm w-5 flex text-white rounded-full bg-theme-light items-center justify-center font-semibold absolute -top-1.5 -right-1.5">
            <p>{appliedFilterCount}</p>
          </div>
        )}
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 
        transform transition-transform duration-300 ease-in-out
        ${openFilterModule ? "translate-y-0" : "translate-y-full"}
        bg-[#f3f3f7] dark:bg-[#1e1e1e] rounded-t-3xl p-4 
        w-full md:max-w-[75vw] mx-auto 
        max-h-[66vh] overflow-y-hidden`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold dark:text-gray-200 text-[1.5rem]">
              Recipe Filter
            </h2>
            <button
              className="bg-gray-200 dark:bg-[#2d2d2d] p-1 rounded-full"
              onClick={toggleDrawer}
            >
              <IoClose className="text-gray-800  dark:text-gray-200 text-[1.5rem]" />
            </button>
          </div>

          <div className="border-b border-dashed dark:border-gray-500 border-gray-400 mb-4" />

          <div className="filterData noScrollBar overflow-y-auto h-[46vh] scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
            <div className="flex flex-col gap-2">
              <FilterSheet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModule;

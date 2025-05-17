import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const FilterModule = () => {
  const [openFilterModule, setOpenFilterModule] = useState(false);

  const toggleDrawer = () => {
    setOpenFilterModule((prev) => !prev);
  };

  return (
    <div className="w-full h-fit">
      {/* Filter Button */}
      <div className="w-full relative flex items-center justify-end"> 
        <div
          onClick={toggleDrawer}
          className="h-10 w-10 rounded-sm border bg-transperent-dark border-theme-light flex items-center justify-center cursor-pointer"
        >
          <LuFilter className="text-theme-light text-[1.2rem]" />
        </div>
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 
        transform transition-transform duration-300 ease-in-out
        ${openFilterModule ? "translate-y-0" : "translate-y-full"}
        bg-gray-50 rounded-t-3xl p-4 
        w-full md:max-w-[75vw] mx-auto 
        max-h-[66vh] overflow-y-auto`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-xl">Recipe Filter</h2>
            <button
              className="bg-gray-200 p-1 rounded-full"
              onClick={toggleDrawer}
            >
              <IoClose className="text-gray-800 text-xl" />
            </button>
          </div>

          <div className="border-b border-dashed border-gray-400 mb-4" />

          <div className="filterData space-y-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum, voluptates voluptatem debitis sint nihil illo molestiae architecto commodi magni blanditiis aperiam aut voluptate voluptatibus velit placeat maxime quis ex?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModule;

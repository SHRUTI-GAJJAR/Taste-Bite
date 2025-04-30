import React from "react";
import { useViewMode } from "../../context/viweModeContext";
import ViweMode from "./ViweMode";
import ListCategory from "./ListCategory";
import GridCategory from "./GridCategory";

const HomePageCategory = () => {
  const { viewMode } = useViewMode();

  return (
    <section className="m-auto relative h-fit my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
      <div className="gap-2 flex bg-white dark:bg-main-dark py-1.5 sm:top-[6rem] z-10">
        <div className="w-full">
          <h2 className="rounded-md bg-[linear-gradient(to_right,#e53935,#e35d5b)] px-3 py-1 text-xl font-semibold text-white sm:rounded-xl sm:px-4 sm:py-1.5 sm:text-2xl md:font-semibold">
            Explore Categories
          </h2>
        </div>
        <ViweMode></ViweMode>
      </div>
      <div className="displayCategory my-2">
        {viewMode === "list" ? <ListCategory /> : <GridCategory />}
      </div>
    </section>
  );
};

export default HomePageCategory;

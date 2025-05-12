import React from "react";
import { useViewMode } from "../../context/viweModeContext";
import ViweMode from "../Utils/ViweMode";
import ListCategory from "./ListCategory";
import GridCategory from "./GridCategory";
import "../../App.css";
import HeaderTitle from "../Utils/HeaderTitle";

const HomePageCategory = () => {
  const { viewMode } = useViewMode();

  return (
    <section className="m-auto relative h-fit my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
      <div className="gap-2 flex sm:top-[6rem] z-10">
        <HeaderTitle title={"Explore Categories"} />
        <ViweMode></ViweMode>
      </div>
      <div className="displayCategory my-2">
        {viewMode === "list" ? <ListCategory /> : <GridCategory />}
      </div>
    </section>
  );
};

export default HomePageCategory;

import React from "react";
import { useViewMode } from "../../context/viweModeContext";
import ViweMode from "../Utils/ViweMode";
import ListCategory from "./ListCategory";
import GridCategory from "./GridCategory";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import HeaderTitle from "../Utils/HeaderTitle";
import { NavLink } from "react-router";

const HomePageCategory = () => {
  const { viewMode } = useViewMode();

  return (
    <section className="m-auto relative h-fit my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
      <div className="gap-2 flex sm:top-[6rem] z-10">
        <HeaderTitle title={"Explore Categories"} />
        <ViweMode></ViweMode>
      </div>
      <div className="displayCategory mt-2 sm:mb-2 mb-0">
        {viewMode === "list" ? <ListCategory /> : <GridCategory />}
      </div>
      <div className="epxploreMore cursor-pointer">
        <NavLink to="/Categories">
          <div className="redirect mt-0.5 sm:mt-0 flex items-center justify-start font-semibold gap-0.5">
            <p className="text-theme-light">Viwe All Categories</p>
            <MdOutlineArrowForwardIos className="text-theme-light text-sm" />
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default HomePageCategory;

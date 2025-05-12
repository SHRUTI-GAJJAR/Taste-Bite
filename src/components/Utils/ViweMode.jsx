import { useViewMode } from "../../context/viweModeContext";
import list from "../../../src/assets/svg/listMode.svg";
import grid from "../../../src/assets/svg/gridMode.svg";
import "../../App.css"

const ViweMode = () => {
  const { viewMode, toggleMode } = useViewMode();

  return (
    <>
      <div className="flex w-fit rounded-md bg-[#f0f3f5] dark:bg-[#282931] sm:rounded-xl">
        <span
          onClick={toggleMode}
          className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition sm:h-11 sm:w-11 sm:rounded-xl ${
            viewMode === "list"
              ? "border-theme-light bg-transperent-dark"
              : "border-transparent bg-transparent"
          }`}
        >
          <img src={list} className="h-5 sm:h-7" alt="List View" />
        </span>

        <span
          onClick={toggleMode}
          className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition sm:h-11 sm:w-11 sm:rounded-xl ${
            viewMode === "grid"
              ? "border-theme-light bg-transperent-dark"
              : "border-transparent bg-transparent"
          }`}
        >
          <img src={grid} className="h-5 sm:h-7" alt="Grid View" />
        </span>
      </div>
    </>
  );
};

export default ViweMode;

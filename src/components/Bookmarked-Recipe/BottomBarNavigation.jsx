import { useContext } from "react";
import { BookmarkContext } from "../../context/BookmarkContext";

const BottomBarNavigation = () => {
  const { clearBookmarks } = useContext(BookmarkContext);
  return (
    <div className="px-3 py-1 rounded-md sm:pr-1.5 sm:py-1.5 sm:text-xl md:font-semibold fixed md:max-w-[75vw] w-[97vw] text-black/70 font-semibold flex items-center justify-between h-10 backdrop-blur-2xl dark:text-white dark:bg-white/10 bg-black/10 bottom-[0.5%]">
      <div className="totalItems">
        {JSON.parse(localStorage.getItem("bookmarksItem")).length} Items
        Bookmarked
      </div>
      <div
        onClick={clearBookmarks}
        className="deleteAllItems cursor-pointer flex items-center dark:bg-white/20 bg-black/70 p-1 rounded-md justify-center gap-1"
      >
        <lord-icon
          src="https://cdn.lordicon.com/qnhhgmwn.json"
          trigger="click"
          state="morph-trash-out"
          colors="primary:#646e78,secondary:#ffffff,tertiary:#1e2939,quaternary:#3a3347"
          style={{ width: "22px", height: "22px" }}
        ></lord-icon>
      </div>
    </div>
  );
};

export default BottomBarNavigation;

import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import axiosInstance from "../../services/script/axios";
import { motion, AnimatePresence } from "framer-motion";
import NotFound from "../../assets/image/NOTFOUND!.png";
import { Link } from "react-router";

const SearchBox = () => {
  const [serachText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (result.length > 0 || loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [result, loading]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (serachText.trim()) {
        fetchResult(serachText);
      } else {
        setResult([]);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [serachText]);

  const fetchResult = async (query) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `https://taste-bite-api.onrender.com/items/search/${query}`
      );
      setResult(response.data);
    } catch (err) {
      console.log(err);
      setResult([]);
    } finally {
      setLoading(false);
    }
  };

  const handelSearchText = () => {
    setSearchText("");
    setResult([]);
  };

  return (
    <div className="searchWrap relative flex flex-col h-fit mt-3 mb-1 sm:mt-6 w-full items-center justify-center">
      <div className="gap-1.5 mt-1.5 w-[98%] md:w-[75.5%] h-[2rem] rounded-md md:h-[2.5rem] pl-1 md:rounded-xl border-theme-light text-black border-1 flex items-center my-1 bg-transperent-dark">
        <div className="serachIconWrap">
          <IoIosSearch size={"1.5em"} className="text-theme-light" />
        </div>
        <div className="searchInputWrap w-full">
          <input
            type="text"
            value={serachText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full text-[1rem] sm:text-xl dark:placeholder-white/50 placeholder-gray-500/50 text-theme-light outline-0"
            placeholder="Search Recipe"
          />
        </div>
        {serachText && (
          <div
            onClick={handelSearchText}
            className="close justify-self-end w-[2.4rem] cursor-pointer"
          >
            <IoCloseOutline size={"1.6em"} className="text-theme-light" />
          </div>
        )}
      </div>

      {loading && (
        <p className="text-sm absolute top-full mt-1 text-gray-400">
          Loading...
        </p>
      )}
      {!loading && result.length > 0 && (
        <AnimatePresence>
          <ul className="absolute top-full z-50 text-black md:rounded-xl border border-theme-light w-[98%] md:w-[75.5%] max-h-[40vh] md:max-h-[60vh] noScrollBar overflow-y-auto dark:border-2 dark:border-[#2d2d2d] bg-[#f0f3f5] dark:bg[#1e1e1e] rounded-lg flex flex-col items-center">
            {result.map((item, index) => (
              <React.Fragment key={index}>
                <motion.li
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.3 },
                  }}
                  layout
                  className="my-1.5 flex w-full items-center justify-between px-1.5"
                >
                  <Link
                    to={`/Recipe/${
                      item.categories === "Dessert"
                        ? "Dessart"
                        : item.categories.replace(/\s+/g, "-")
                    }/${item._id}`}
                    className="imgAndText flex w-full items-center gap-2"
                  >
                    <img
                      src={`${`https://taste-bite-api.onrender.com/${item.Thumbnail_img}`}`}
                      onError={(requstedImage) => {
                        requstedImage.target.onerror = null;
                        requstedImage.target.src = NotFound;
                      }}
                      className="h-15 rounded-md object-cover md:rounded-xl"
                      alt="Categoriesimg"
                    />
                    <div className="subText w-full md:w-full">
                      <p className="mt-1 mb-1.5 text-[1.1rem] font-semibold dark:text-white md:text-xl">
                        {item.name}
                      </p>
                    </div>
                  </Link>
                </motion.li>
                <div className="line border-gray-400 dark:border-[#2d2d2d] dark:border-b-[0.125rem] h-1 w-[99%] border-b-1  border-dashed"></div>
              </React.Fragment>
            ))}
          </ul>
        </AnimatePresence>
      )}
    </div>
  );
};

export default SearchBox;

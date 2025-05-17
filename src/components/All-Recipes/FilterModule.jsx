import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

const FilterModule = () => {
  const [openFilterModule, setOpenFilterModule] = useState(false);
  const y = useMotionValue(0);

  const openFilterMenu = () => {
    setOpenFilterModule((prev) => !prev);
    y.set(0); // reset position when opened or closed
  };

  return (
    <div className="w-full h-fit">
      {/* Top Icon */}
      <div className="w-full flex items-center justify-end">
        <div
          onClick={openFilterMenu}
          className="relative bg-transperent-dark h-10 w-10 rounded-sm border border-theme-light flex items-center justify-center cursor-pointer"
        >
          <LuFilter className="text-theme-light text-[1.2rem]" />
          <div className="hidden absolute -top-1.5 -right-1.5 text-sm font-semibold text-white bg-theme-light h-5.5 w-5.5 items-center justify-center rounded-full">
            <p>3</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openFilterModule && (
          <motion.div
            className="min-h-[70vh] fixed left-0 right-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-xl p-4 border-t-2 border-dashed border-orange-600"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: "easeInOut",
            }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={false}
            dragMomentum={false}
            style={{ y }}
            onDragEnd={(event, info) => {
              if (info.offset.y > 100) {
                setOpenFilterModule(false);
              } else {
                y.set(0);
              }
            }}
          >
            <div className="w-full overflow-auto flex flex-col">
              <div className="w-12 h-1.5 bg-theme-light rounded-full mx-auto mb-2 cursor-pointer" />
              <div className="filterName w-full flex items-center justify-center">
                <h2 className="font-semibold mb-2 text-xl">Recipe Filter</h2>
                <div className="justify-end">
                  <button onClick={openFilterMenu}>
                    <IoClose size={24} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterModule;

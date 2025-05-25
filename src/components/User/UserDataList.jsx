import NotFound from "../../assets/image/NOTFOUND!.png";
import { motion } from "framer-motion";

const UserDataList = ({ userName, userEmail, userPhoto, totalRecipe }) => {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className="userDataListItem cursor-pointer rounded-md md:rounded-xl border dark:border-2 dark:border-[#2d2d2d] dark:bg-[#1e1e1e] border-theme-light flex justify-between items-center gap-2 p-2 bg-[#f0f3f5]"
    >
      <article className="userData flex items-center gap-2">
        <figure className="userImgWrap rounded-md md:rounded-xl h-10 bg-white overflow-hidden">
          <img
            src={`https://taste-bite-api.onrender.com${userPhoto}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = NotFound;
            }}
            alt="useimg"
            className="h-full w-full rounded-full object-cover"
          />
        </figure>
        <div className="userInfo">
          <div className="userName hover:underline font-semibold text-black dark:text-white/90 dark:">
            <p>{userName}</p>
          </div>
          <div className="userEmail dark:text-white/60 text-gray-600">
            <p>{userEmail}</p>
          </div>
        </div>
      </article>
      <div className="totalRecipe bg-transperent-dark px-1.5 rounded-full text-theme-light border-transperent-border-dark border  ">
        <p>{totalRecipe} Recipes</p>
      </div>
    </motion.li>
  );
};

export default UserDataList;

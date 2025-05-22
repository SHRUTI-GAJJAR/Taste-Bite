import { FaCalendar } from "react-icons/fa6";
import { getPostDate } from "../Utils/PostDate";

const UserData = ({ recipeData, userDetails }) => {
  const postDate = getPostDate(recipeData.date);
  const userDetailData = userDetails.find(
    (user) => user.id?.toString() === recipeData.user?.toString()
  );
  return (
    <div className="userDetailsDate flex flex-col dark:bg-[#1e1e1e] dark:border-2 dark:border-[#2d2d2d] bg-[#fff] border gap-1 border-theme-light pl-2 px-2 py-2 rounded-md md:rounded-xl">
      <div className="userPhotoAndName flex items-center justify-start gap-1">
        <div className="profilePhoto rounded-full overflow-hidden bg-white flex items-center justify-center h-5.5 w-5.5">
          <img
            src={`https://taste-bite-api.onrender.com${userDetailData.profilePhoto}`}
            alt="ii"
            className="object-cover object-center"
          />
        </div>
        <p className="text-[1.1rem] text-black dark:text-white font-semibold cursor-pointer hover:underline">
          By {userDetailData?.name || "Unknown"}
        </p>
      </div>
      <div className="date text-[0.9rem] flex gap-1 dark:text-gray-400 text-black/70 items-center justify-start">
        <FaCalendar className="text-[0.9rem]" />
        <p>{postDate}</p>
      </div>
    </div>
  );
};

export default UserData;

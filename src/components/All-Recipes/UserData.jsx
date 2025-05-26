import { FaCalendar } from "react-icons/fa6";
import { useApi } from "../../context/apiContext";
import { getPostDate } from "../Utils/PostDate";
import { Link } from "react-router";

const UserData = ({ recipeData, userDetails }) => {
  const postDate = getPostDate(recipeData.date);
  const userDetailData = userDetails.find(
    (user) => user.id?.toString() === recipeData.user?.toString()
  );

  return (
    <div className="userDetailsDate flex flex-col dark:bg-black dark:border-2 dark:border-[#2d2d2d] bg-white border gap-1 border-gray-400 pl-2 px-2 py-2 rounded-md md:rounded-xl">
      <div className="userPhotoAndName flex items-center justify-start gap-1">
        <div className="profilePhoto rounded-full overflow-hidden bg-white flex items-center justify-center h-4.5 w-4.5">
          <img
            src={`https://taste-bite-api.onrender.com${userDetailData.profilePhoto}`}
            alt="ii"
            className="object-cover object-center"
          />
        </div>
        <Link
          to={`/Users/${userDetailData?.id}`}
          className="text-sm text-black dark:text-white font-semibold cursor-pointer hover:underline"
        >
          By {userDetailData?.name || "Unknown"}
        </Link>
      </div>
      <div className="date text-sm flex gap-1 dark:text-gray-400 text-black/70 items-center justify-start">
        <FaCalendar className="text-sm" />
        <p>{postDate}</p>
      </div>
    </div>
  );
};

export default UserData;

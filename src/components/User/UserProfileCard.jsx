import { useParams } from "react-router";
import { useApi } from "../../context/apiContext";
import { useEffect } from "react";
import chillyFlex from "../../assets/svg/chillyFlex.svg";
import NotFound from "../../assets/image/NOTFOUND!.png";
import { MdShare } from "react-icons/md";

const UserProfileCard = () => {
  const { userId } = useParams();
  const {
    fetchRecipe,
    userData,
    detailRecipeData,
    detailRecipeDataLoading,
    userLoading,
    fetchUserData,
  } = useApi();

  useEffect(() => {
    fetchUserData();
    fetchRecipe();
  }, []);

  if (userLoading || detailRecipeDataLoading) {
    return (
      <li className="w-full gap-2 p-2 rounded-md items-center dark:bg-[#1a1a1a] flex bg-[#f0f3f5]">
        <div className="imgLoading animate-shimmer dark:bg-[#2a2e32] min-h-20 rounded-md min-w-20 bg-[#d8dee2]"></div>
        <div className="w-full textLoadng flex flex-col gap-2">
          <p className="w-[40%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-5 bg-[#d8dee2]"></p>
          <p className="w-[80%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-5 bg-[#d8dee2]"></p>
          <div className="otherinfo flex items-center justify-start gap-2">
            <p className="w-[20%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-5 bg-[#d8dee2]"></p>
            <p className="w-[20%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-5 bg-[#d8dee2]"></p>
          </div>
        </div>
      </li>
    );
  }

  const userProfileData = userData.find((user) => user.id === userId);

  const totalRecipe = detailRecipeData.filter(
    (recipe) => recipe.user === userId
  ).length;

  return (
    <div className="profileBase w-full relative p-2 border border-theme-light dark:border-2 dark:bg-[#1e1e1e] dark:border-[#2d2d2d] rounded-md md:rounded-xl overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full z-0 bg-center bg-contain opacity-30 dark:opacity-10"
        style={{
          backgroundImage: `url(${chillyFlex})`,
          backgroundSize: "100%",
        }}
      ></div>
      <div className="profileData w-full relative flex items-center justify-start gap-4 z-10">
        <div className="profilePhoto w-18 h-18 bg-white flex items-center justify-center rounded-md md:rounded-xl overflow-hidden">
          <figure className="w-19 h-19 overflow-hidden">
            <img
              src={`https://taste-bite-api.onrender.com${userProfileData.profilePhoto}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = NotFound;
              }}
              alt="User Profile"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
        <div className="userInformation flex flex-col items-start justify-center gap-1">
          <div className="font-semibold text-xl dark:text-white">
            <h2>{userProfileData.name}</h2>
          </div>
          <div className="dark:text-white/60 text-sm text-gray-600">
            <p>{userProfileData.email}</p>
          </div>
          <div className="flex items-center text-sm gap-2 justify-center">
            <div
              onClick={() => {
                const fullURL = window.location.href;
                navigator.clipboard.writeText(fullURL);
                alert("Recipe link copied to clipboard!");
              }}
              className="share cursor-pointer bg-transperent-dark px-1.5 rounded-full text-theme-light border-transperent-border-dark border flex gap-1 items-center justify-center"
            >
              <MdShare className="text-theme-light" />
              <button className="cursor-pointer">Share Profile</button>
            </div>
            <div className="totalRecipe bg-transperent-dark px-1.5 rounded-full text-theme-light border-transperent-border-dark border">
              <p>{totalRecipe} Recipe Uploded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

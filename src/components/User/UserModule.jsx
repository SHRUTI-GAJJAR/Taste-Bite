import { useEffect } from "react";
import { useApi } from "../../context/apiContext";
import HeaderTitle from "../Utils/HeaderTitle";
import ViweMode from "../Utils/ViweMode";
import UserDataList from "./UserDataList";
import { useViewMode } from "../../context/viweModeContext";
import UserDataGrid from "./UserDataGrid";
import { AnimatePresence } from "framer-motion";
import UserDataGridLoading from "./UserDataGridLoading";
import UserDataListLoading from "./UserDataListLoading";

const UserModule = () => {
  const {
    fetchRecipe,
    userData,
    detailRecipeData,
    fetchUserData,
    detailRecipeDataLoading,
    userLoading,
  } = useApi();

  const { viewMode } = useViewMode();

  useEffect(() => {
    fetchUserData();
    fetchRecipe();
  }, []);

  return (
    <section>
      <div className="userWrap pb-10 h-fit m-auto md:max-w-[75vw] w-[97vw]">
        <div className="titleAndModeWrap flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={"All Shafe"} />
          <ViweMode />
        </div>
        <div className="userData w-full">
          <AnimatePresence>
            {detailRecipeDataLoading || userLoading ? (
              viewMode === "list" ? (
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <UserDataListLoading />
                </ul>
              ) : (
                <ul className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
                  <UserDataGridLoading />
                </ul>
              )
            ) : viewMode === "list" ? (
              <ul className="userDataList grid grid-cols-1 lg:grid-cols-2 gap-2">
                {userData.map((user, index) => {
                  const totalRecipe = detailRecipeData.filter(
                    (recipe) => recipe.user === user.id
                  ).length;
                  return (
                    <UserDataList
                      key={index}
                      userName={user.name}
                      userEmail={user.email}
                      userPhoto={user.profilePhoto}
                      userId={user.id}
                      totalRecipe={totalRecipe}
                    />
                  );
                })}
              </ul>
            ) : (
              <ul className="userDataList grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
                {userData.map((user, index) => {
                  const totalRecipe = detailRecipeData.filter(
                    (recipe) => recipe.user === user.id
                  ).length;
                  return (
                    <UserDataGrid
                      key={index}
                      userName={user.name}
                      userEmail={user.email}
                      userPhoto={user.profilePhoto}
                      userId={user.id}
                      totalRecipe={totalRecipe}
                    />
                  );
                })}
              </ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UserModule;

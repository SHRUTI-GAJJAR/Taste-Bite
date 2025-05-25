import { useParams } from "react-router";
import HeaderTitle from "../Utils/HeaderTitle"
import UserProfileCard from "./UserProfileCard";
import UplodedRecipes from "./UplodedRecipes";

const UserDetailPage = () => {
  const { userId } = useParams();
  return (
    <section>
      <div className="userWrap pb-10 h-fit m-auto md:max-w-[75vw] w-[97vw]">
        <div className="titleAndModeWrap flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={"Testbite Shafe"} />
        </div>
        <div className="mainContant flex flex-col items-center justify-start gap-2">
          <UserProfileCard></UserProfileCard>
          <UplodedRecipes></UplodedRecipes>
        </div>
      </div>
    </section>
  );
};

export default UserDetailPage;

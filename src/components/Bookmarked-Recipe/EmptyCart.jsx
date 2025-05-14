import HeaderTitle from "../Utils/HeaderTitle";
import chillyFlex from "../../assets/svg/chillyFlex.svg";
import textPiza from "../../assets/svg/textPiza.svg";
import eptycartAfiv from "../../assets/image/eptycart.avif";
import { NavLink } from "react-router";

const EmptyCart = () => {
  return (
    <section className="w-full">
      <div className="emptyCartWrap m-auto md:max-w-[75vw] w-[97vw]">
        <div className="headerTitleWrap flex gap-2 mt-3 mb-1 sm:mt-6">
          <HeaderTitle title={"Bookmarked Recipes"} />
          {/* <ViweMode /> */}
        </div>

        <div className="emptyContant rounded-md  sm:rounded-2xl my-2 overflow-hidden border border-theme-light dark:border-2 dark:border-[#2d2d2d] bg-[#f0f3f5] dark:bg-[#1e1e1e] w-full h-fit flex items-center justify-center">
          <div className="contant relative overflow-hidden w-full md:h-[70vh] sm:h-[76vh] h-[78vh] flex flex-col items-center justify-between">
            <div
              className="absolute top-0 left-0 w-full h-full z-0 bg-center bg-contain opacity-30 dark:opacity-10"
              style={{
                backgroundImage: `url(${chillyFlex})`,
                backgroundSize: "100%",
              }}
            ></div>
            <div className="emptyConatantWraper z-10 flex flex-col lg:flex-row w-full md:h-[70vh] sm:h-[76vh] h-[78vh]">
              <div
                className="textContantWrap flex 
              items-center justify-center lg:w-[50%] lg:h-full w-full h-[40%]"
              >
                <div className="textWrap w-[95%] h-full flex items-center justify-center">
                  <p className="text-3xl md:text-4xl 2xl:text-6xl lg:text-5xl text-center lg:ml-2 lg:text-start leading-tight tracking-wide text-[#1f2937] dark:text-gray-200 font-bold">
                    N
                    <span className="inline-flex">
                      <img
                        src={textPiza}
                        alt="textPiza"
                        className="ml-0.5 h-[1.5rem] md:h-[1.8rem] lg:h-[2.4rem] 2xl:h-[3rem]"
                      />
                    </span>{" "}
                    RECIPE SAVED YET. FIND SOMETHING TASTY TO TRY.
                  </p>
                </div>
              </div>
              <div className="emptyCartWrap flex items-center justify-center overflow-hidden lg:w-[50%] lg:h-full">
                <div className="emptyCart flex gap-5 py-5 flex-col justify-center items-center h-fit px-4 max-w-[90%] sm:rounded-xl rounded-md bg-white dark:border-2 dark:border-[#2d2d2d]">
                  <div className="imgWraper h-[60%] w-[80%] flex items-center justify-center">
                    <img
                      src={eptycartAfiv}
                      className="h-50 2xl:h-72"
                      alt="emptyCart"
                    />
                  </div>
                  <div className="buttonWraper">
                    <div className="redirectButton flex items-center justify-center w-full">
                      <NavLink to="/Recipe">
                        <button className="px-4 2xl:text-[1.3rem] cursor-pointer w-fit py-1.5 text-[1rem] text-white font-semibold rounded-full bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                          <span>Explore Recipes</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;

import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sliderData from "../../services/script/carousel";
import "../../App.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainTextKey, setMainTextKey] = useState(
    `${Date.now()}-${Math.random()}`
  );
  const [subTextKey, setSubTextKey] = useState(
    `${Date.now()}-${Math.random()}`
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  useEffect(() => {
    setMainTextKey(`${Date.now()}-${Math.random()}`);
    setSubTextKey(`${Date.now()}-${Math.random()}`);
  }, [currentIndex]);

  return (
    <>
      <section className="relative overflow-hidden md:max-w-[75vw] w-[97vw] lg:h-[28rem] md:h-[21rem] rounded-2xl m-auto flex items-center justify-center">
        <div className="sliderWrap bg-red-500 h-fit w-fit overflow-hidden rounded-2xl flex items-center justify-start">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderData.map((slide, index) => (
              <div
                key={index}
                className="h- relative sm:h-full min-w-full overflow-hidden flex items-center justify-center"
              >
                <img
                  src={slide.url}
                  alt={`Slide ${index}`}
                  className="h-full object-cover overflow-hidden object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

        <div className="absolute w-fit flex flex-col h-[82%] xl:h-[91%] justify-between bottom-5 left-5 z-30 text-white font-semibold">
          <div className="emoji&CatagorisWrap xl:text-sm md:text-[0.825rem] flex gap-1.5  bg-bage-blur backdrop-blur-3xl w-fit text-white py-1 px-3 rounded-full">
            <div className="emojiWrap">
              {sliderData[currentIndex].emoji.map((emoji,_) => {
                return <span key={_}>{emoji}</span>
              })}
            </div>
            <div className="catagroisWrap">
              <span>{sliderData[currentIndex].categoriy}</span>
            </div>
          </div>
          <div className="textWrap w-full flex flex-col gap-2">
            <p
              key={mainTextKey}
              className="opacity-0 w-[90%] text-xl md:text-4xl xl:text-5xl animate-fadeIn"
            >
              {sliderData[currentIndex].mainText}
            </p>
            <p
              key={subTextKey}
              className="opacity-0 text-sm text-gray-300 animate-fadeIn"
            >
              {sliderData[currentIndex].subText}
            </p>
          </div>
        </div>

        <div className="absolute z-40 h-fit w-[99%] flex items-center justify-between">
          <span
            onClick={handlePrev}
            className="h-[3rem] w-[2rem] bg-transperent-button hover:bg-transperent-button-hover transition-colors cursor-pointer flex items-center justify-center rounded-md"
          >
            <IoIosArrowBack className="text-white" size={"1.5em"} />
          </span>
          <span
            onClick={handleNext}
            className="h-[3rem] w-[2rem] bg-transperent-button hover:bg-transperent-button-hover transition-colors cursor-pointer flex items-center justify-center rounded-md"
          >
            <IoIosArrowForward className="text-white" size={"1.5em"} />
          </span>
        </div>
      </section>
    </>
  );
};

export default Carousel;

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sliderData from "../../services/script/carousel";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <>
      <section className="relative overflow-hidden md:max-w-[75vw] w-[97vw] md:h-[40vh] h-[25vh] rounded-2xl m-auto flex items-center justify-center">
        <div className="sliderWrap bg-red-500 h-fit w-fit overflow-hidden rounded-2xl flex items-center justify-start">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderData.map((slide, index) => (
              <div
                key={index}
                className="h-full sm:h-full min-w-full overflow-hidden  flex items-center justify-center"
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
        
        <div className="absolute z-20 h-fit w-[95%] flex items-center justify-between">
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

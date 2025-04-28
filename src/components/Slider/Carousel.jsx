import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sliderData from "../../services/script/carousel";
import "../../App.css";

// Slide image component
const SlideImage = ({ url, index }) => (
  <div
    key={index}
    className="relative min-w-full h-full overflow-hidden flex items-center justify-center"
  >
    <img
      src={url}
      alt={`Slide ${index}`}
      className="h-full w-full object-cover object-center"
    />
  </div>
);

// Emoji and Category component
const EmojiAndCategory = ({ emojis, category }) => (
  <div className="flex gap-1.5 text-[0.825rem] xl:text-sm md:text-[0.825rem] bg-bage-blur backdrop-blur-3xl w-fit text-white py-1 px-3 rounded-full">
    <div className="flex gap-1">
      {emojis.map((emoji, idx) => (
        <span key={idx}>{emoji}</span>
      ))}
    </div>
    <div>
      <span>{category}</span>
    </div>
  </div>
);

// Arrow Button component
const ArrowButton = ({ direction, onClick }) => {
  const Icon = direction === "left" ? IoIosArrowBack : IoIosArrowForward;
  return (
    <span
      onClick={onClick}
      className="xl:h-[3rem] xl:w-[2rem] h-[2rem] w-[1.2rem] bg-transperent-button hover:bg-transperent-button-hover transition-colors cursor-pointer flex items-center justify-center rounded-md"
    >
      <Icon className="text-white h-[1.5rem] sm:h-[2rem] lg:h-[3rem]" />
    </span>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainTextKey, setMainTextKey] = useState(`${Date.now()}-${Math.random()}`);
  const [subTextKey, setSubTextKey] = useState(`${Date.now()}-${Math.random()}`);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    setMainTextKey(`${Date.now()}-${Math.random()}`);
    setSubTextKey(`${Date.now()}-${Math.random()}`);
  }, [currentIndex]);

  return (
    <section className="relative overflow-hidden md:max-w-[75vw] w-[97vw] lg:h-[28rem] md:h-[21rem] rounded-2xl m-auto flex items-center justify-center">
      {/* Slide Images */}
      <div className="sliderWrap bg-red-500 rounded-2xl overflow-hidden flex items-center justify-start">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderData.map((slide, index) => (
            <SlideImage key={index} url={slide.url} index={index} />
          ))}
        </div>
      </div>

      {/* Black to Transparent Background */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Text Content */}
      <div className="absolute w-fit flex flex-col h-[88%] xl:h-[91%] justify-between bottom-5 left-5 z-30 text-white font-semibold">
        
        {/* Emoji and Category */}
        <EmojiAndCategory
          emojis={sliderData[currentIndex].emoji}
          category={sliderData[currentIndex].categoriy}
        />

        {/* Main and Sub Text */}
        <div className="flex flex-col gap-2">
          <p
            key={mainTextKey}
            className="opacity-0 w-[90%] text-[1.5rem] sm:text-3xl md:text-[2.5rem] xl:text-5xl animate-fadeIn"
          >
            {sliderData[currentIndex].mainText}
          </p>

          <p
            key={subTextKey}
            className="opacity-0 text-[0.825rem] lg:text-sm text-gray-300 animate-fadeIn w-[50%] sm:w-[65%] md:w-[80%] lg:w-[95%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip transition-all duration-300"
          >
            {sliderData[currentIndex].subText}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-40 h-fit w-[95%] xl:w-[99%] flex items-center justify-between">
        <ArrowButton direction="left" onClick={handlePrev} />
        <ArrowButton direction="right" onClick={handleNext} />
      </div>
    </section>
  );
};

export default Carousel;

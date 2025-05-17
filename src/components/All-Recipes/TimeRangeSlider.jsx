import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const TimeRangeSlider = () => {
  const [range, setRange] = useState([10, 90]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const formatTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h > 0 ? `${h}h ` : ""}${m > 0 ? `${m}m` : ""}`.trim();
  };

  return (
    <div className="pt-4 max-w-full mx-auto">
      <Slider
        range
        min={1}
        max={120}
        value={range}
        onChange={setRange}
        onBeforeChange={(_, index) => setDraggingIndex(index)}
        onAfterChange={() => setDraggingIndex(null)}
        handleRender={(node, props) => {
          const isDragging = props.index === draggingIndex;
          return React.cloneElement(node, {
            style: {
              ...node.props.style,
              backgroundColor: isDragging ? "#ff642f" : "#ff642f",
              borderColor: isDragging ? "#ff642f" : "#ff642f",
              boxShadow: isDragging ? "0 0 0 5px rgba(255, 100, 47, 0.3)" : "",
            },
          });
        }}
        trackStyle={[{ backgroundColor: "#ff642f" }]}
      />

      <div className="flex justify-between mt-4 text-gray-800">
        <div className="p-1 border-dashed border border-theme-light rounded-md min-w-20 flex items-center justify-center text-theme-light bg-transperent-dark">
          <strong>{formatTime(range[0])}</strong>
        </div>
        <div className="p-1 border-dashed border border-theme-light rounded-md min-w-20 flex items-center justify-center text-theme-light bg-transperent-dark">
          <strong>{formatTime(range[1])}</strong>
        </div>
      </div>
    </div>
  );
};

export default TimeRangeSlider;

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
    <div className="w-full px-4 pt-4">
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
              backgroundColor: "#ff642f",
              borderColor: "#ff642f",
              boxShadow: isDragging
                ? "0 0 0 5px rgba(255, 100, 47, 0.3)"
                : "",
            },
          });
        }}
        trackStyle={[{ backgroundColor: "#ff642f" }]}
      />

      <div className="flex justify-between mt-4 gap-4">
        <div className="px-3 py-1 border-dashed border border-transperent-border-dark rounded-md min-w-[80px] text-center text-orange-500 dark:bg-transperent-dark bg-orange-50 font-medium">
          {formatTime(range[0])}
        </div>
        <div className="px-3 py-1 border-dashed border border-transperent-border-dark rounded-md min-w-[80px] text-center text-orange-500 dark:bg-transperent-dark bg-orange-50 font-medium">
          {formatTime(range[1])}
        </div>
      </div>
    </div>
  );
};

export default TimeRangeSlider;

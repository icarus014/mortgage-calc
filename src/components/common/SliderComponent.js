import React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = ({defaultValue, min, max}) => {
  return (
    <div>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default SliderComponent;

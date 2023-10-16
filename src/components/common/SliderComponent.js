import React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = ({defaultValue, min, max, step, onChange, value}) => {
  return (
    <div>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks 
        step={step} 
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SliderComponent;

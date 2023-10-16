import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {
  return (
    <div>
      <Typography variant="subtitle1">Home Value</Typography>
      <Typography variant="h5">$3000</Typography>
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
      <Typography variant="h5">$1000</Typography>
    </div>
  );
};

export default SliderComponent;

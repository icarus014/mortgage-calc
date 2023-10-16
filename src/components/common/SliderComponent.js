import React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = () => {
  return (
    <div>
      <Slider
        defaultValue={150}
        min={100}
        max={300}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default SliderComponent;

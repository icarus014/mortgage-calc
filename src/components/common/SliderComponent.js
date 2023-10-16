import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <div>
      <Stack gap={1}>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant="h5">{unit}{amount}</Typography>
      </Stack>
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
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary" variant="h8">
          {unit} {min}
        </Typography>
        <Typography color="text.secondary" variant="h8">
          {unit} {max}
        </Typography>
      </Stack>
    </div>
  );
};

export default SliderComponent;

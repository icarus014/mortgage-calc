import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";

const SliderSelect = () => {
  return (
    <Stack my={1.4}>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={10000}
        defaultValue={20}
        step={5}
        onChange={(e, value) => {
          console.log(value);
        }}
        unit='$'
        amount={3000}
      />
      <SliderComponent
        label="Down Payment"
        min={50}
        max={150}
        defaultValue={20}
        step={5}
        onChange={(e, value) => {
          console.log(value);
        }}
        unit='$'
        amount={500}
      />
      <SliderComponent
        label="Loan Amount"
        min={150}
        max={1250}
        defaultValue={20}
        step={5}
        onChange={(e, value) => {
          console.log(value);
        }}
        unit='$'
        amount={700}
      />
    </Stack>
  );
};

export default SliderSelect;

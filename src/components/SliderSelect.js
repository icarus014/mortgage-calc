import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <Fragment>
      <SliderComponent
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => {
          console.log(value);
        }}
      />
    </Fragment>
  );
};

export default SliderSelect;

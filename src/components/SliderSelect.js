import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";

const SliderSelect = ({ data, setData }) => {
  console.log(data);

  const bank_limit = 10000;
  return (
    <Stack my={1.4}>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        step={100}
        onChange={(e, value) => {
          setData({ ...data, homeValue: value });
        }}
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) => setData({ ...data, downPayment: value })}
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => setData({ ...data, loanAmount: value })}
        unit="$"
        amount={700}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.1}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
        unit="%"
        amount={data.interestRate}
      />
    </Stack>
  );
};

export default SliderSelect;

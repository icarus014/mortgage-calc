import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

const totalLoanMonths = loanTerm * 12 //60 months = 5 yrs

const interestPerMonth = interestRate /100 /12; //100@12% for 1 year

const monthlyPayment = (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) /
(((1+interestPerMonth)**totalLoanMonths - 1));

const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

const pieChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return <Stack>
    <Typography textAlign='center' variant="h5">
      Monthly Payment: ${monthlyPayment.toFixed(2)}
    </Typography>
    <Pie data={pieChartData} />
  </Stack>
};

export default Result;

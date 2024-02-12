import React from "react";
import ReactApexChart from "react-apexcharts";

const Progress = ({ data, xAxis }) => {
  const state = {
    series: [
      {
        data: data,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 250,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        colors: ["#003366"], // Dark blue color
      },
      xaxis: {
        categories: xAxis,
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Progress;

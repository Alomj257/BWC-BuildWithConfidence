import React from "react";
import ReactApexChart from "react-apexcharts";

const Budget = ({ data }) => {
  const state = {
    series: [data],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 0,
            },
            value: {
              offsetY: 0,
              fontSize: "22px",
              color: undefined,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "solid",
        colors: ["#003366"], // Dark blue color
      },

      labels: [""],
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Budget;

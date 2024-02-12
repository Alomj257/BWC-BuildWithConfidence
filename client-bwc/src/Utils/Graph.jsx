import React from "react";
import ReactApexChart from "react-apexcharts";

const Graph = ({ data, angle }) => {
  const series = [data];
  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -1 * angle,
        endAngle: angle,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "21px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "solid",
      colors: ["#003366"], // Dark blue color
    },
    labels: [""],
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Graph;

import React from "react";
import { Bar } from "@ant-design/plots";

const Chart = ({ data, xField, yField, title, isMobile }) => {
  const titleTransform = (title) => {
    const words = title.split("_");
    const capitalizedWords = words.map((word) => word.toUpperCase());
    return capitalizedWords.join(" ");
  };

  const configHuman = {
    data,
    xField,
    yField,
    seriesField: "",
    style: {
      height: "800px",
    },
    yAxis: {
      label: {
        autoHide: false,
        autoRotate: true,
      },
    },
    legend: {
      position: "top-left",
    },
  };

  if (data?.length === 0) return null;
  return (
    <div className="chart">
      <div className={isMobile ? "mobile-title" : "title"}>
        {title + " - " + titleTransform(xField)}
      </div>
      <Bar {...configHuman} />
    </div>
  );
};

export default Chart;

import React from "react";
import heart from "../assets/img/heartTransparent.svg";

function ChartItem({ chart }) {
  return (
    <div className="min-h-8 min-w-[90%]">
      <div className="relative h-full rounded-xl py-3 px-2 bg-dark">
        <div className="w-28 h-24">
          <img
            className="block rounded pointer-events-none cursor-pointer"
            src={chart.img}
            alt={chart.desc}
          />
        </div>
        <div className="py-3 text-white">
          <h4 className="mt-2">{chart.artist}</h4>
          <p className="mb-4 text-gray-600"> {chart.desc}</p>
          <p> {chart.duration}</p>
        </div>
        <div className="absolute top-3 right-4">
          <div className="border border-white rounded-full p-1">
            <img src={heart} alt="heart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartItem;

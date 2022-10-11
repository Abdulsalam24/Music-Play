import ChartItem from "./ChartItem";
import datas from "./data/data";

function Charts() {
  return (
    <div className="mt-10">
      <h3 className="text-white font-bold">Top charts</h3>

      <div className="m-auto my-5">
        <div className="cursor-grab overflow-scroll flex gap-4">
          {datas.chartData.map((chart) => (
            <ChartItem key={chart.id} chart={chart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Charts;

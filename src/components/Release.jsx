import ChartItem from "./ChartItem";
import datas from "./data/data";

function Release() {
  //chartItem
  //release

  return (
    <div className="mt-5">
      <h3 className="text-white font-bold">New release</h3>
      <div className="m-auto my-5">
        <div className="cursor-grab overflow-scroll flex gap-4">
          {datas.release.map((chart) => (
            <ChartItem key={chart.id} chart={chart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Release;

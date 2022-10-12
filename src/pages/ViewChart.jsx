import datas from "../components/data/data";
import { useParams } from "react-router-dom";

import { ReactComponent as Play } from "../assets/img/playChart.svg";
import { ReactComponent as Playlist } from "../assets/img/playListChart.svg";
import { ReactComponent as Heart } from "../assets/img/heart.svg";
import ChartList from "../components/viewChart/ChartList";

function ViewChart() {
  const { id: currentChartId } = useParams();

  const viewChar = datas.chartData.filter((data) => data.id === currentChartId);

  const [{ id, artist, desc, duration, img }] = viewChar;

  return (
    <section
      className="chart-view relative lg:pl-[50px] text-white bg-center"

      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "195vh 317vw",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-6">
        <div className=" flex flex-col lg:flex-row items-center gap-6 pb-6">
          <div className="img max-w-[320px] m-auto">
            <img src={img} alt={artist} width="357px" height="289px" />
          </div>
          <div>
            <h1>Tomorrow’s tunes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <p className="my-2">64 songs ~ 16 hrs+</p>
            <div className="info-control flex flex-wrap items-center gap-2">
              <li>
                <Play className="inline" />
                <i>Play all</i>
              </li>
              <li>
                <Playlist className="inline" />
                <i> Add to collection</i>
              </li>
              <li>
                <Heart />
              </li>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {datas.chartInfo.map((chart) => (
            <ChartList key={chart.id} chart={chart} />
          ))}
        </div>
      </div>

      <div className="thumbnail absolute top-0 right-0 left-0 bottom-0 z-[-1px]"></div>
    </section>
  );
}

export default ViewChart;

import datas from "../components/data/data";
import { useParams } from "react-router-dom";

function ViewChart() {
  const { id: currentChartId } = useParams();

  const viewChar = datas.chartData.filter((data) => data.id === currentChartId);

  const [{ id, artist, desc, duration, img }] = viewChar;
  console.log(img, "wffffffffffffff");
  return (
    <section
      className="relative z-10"
      style={{
        height: "100vh",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPostion: "cover",
      }}
    >
      <div className="lead z-10">
        <div className="img">
          <img src={img} alt={artist} />
        </div>
      </div>
      <div className="thumbnail absolute top-0 right-0 left-0 bottom-0 z--10"></div>
    </section>
  );
}

export default ViewChart;

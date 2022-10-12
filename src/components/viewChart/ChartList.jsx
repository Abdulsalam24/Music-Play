import { ReactComponent as Info } from "../../assets/img/info.svg";


function ChartList({chart}) {

  return (
    <div className="flex items-center gap-3">
        <img src={chart.img} alt={chart.artist} />
        <div className="info flex-1">
            <h5>{chart.info}</h5>
            <span>{chart.type}</span>
        </div>
        <div className="control flex flex-col gap-1">
            <Info/>
            <h5>{chart.duration}</h5>
        </div>
    </div>
  )
}

export default ChartList
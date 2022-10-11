import chartImg4 from "../assets/img/chartImg4.svg";

import { ReactComponent as Play } from "../assets/img/play.svg";
import { ReactComponent as Next } from "../assets/img/next.svg";

function BottomNav() {
  return (
    <div className="nav-2 py-5 fixed bottom-0 left-0 right-0 z-10">
      <div className="flex w-11/12 m-auto gap-2 items-center">
        <img className="w-20 h-20 block" src={chartImg4} alt="chartImg1" />
        <div className="flex-1">
          <h3>Seasons In</h3>
          <p>James</p>
        </div>
        <Play />
        <Next />
      </div>
    </div>
  );
}

export default BottomNav;

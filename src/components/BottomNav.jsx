import chartImg4 from "../assets/img/chartImg4.svg";

import { ReactComponent as Play } from "../assets/img/play.svg";
import { ReactComponent as Next } from "../assets/img/next.svg";
import { ReactComponent as Shuffle } from "../assets/img/shuffle.svg";
import { ReactComponent as Repeat } from "../assets/img/repeat.svg";
import { ReactComponent as VolumeIcon } from "../assets/img/volumeIcon.svg";
import { FaPauseCircle } from "react-icons/fa";

import { useContext } from "react";
import MusicContext from "../context/MusicContext";

function BottomNav() {
  const { currentPlay, play, audio, handlePlay, handlePause } =
    useContext(MusicContext);

  const { img, artist, desc, song } = currentPlay;

  // console.log(song , 'songsongsongsong')

  return (
    <div className="nav-2 py-5 lg:py-2 fixed bottom-0 left-0 right-0 z-40 text-white">
      <div className="flex w-11/12 m-auto gap-2 items-center lg:hidden">
        <img className="w-20 h-20 block" src={img} alt="chartImg1" />
        <div className="flex-1">
          <h3>{artist}</h3>
          <p>{desc}</p>
        </div>
        <Play />
        <Next />
      </div>

      <div className="lg:flex justify-between w-11/12 m-auto gap-2 items-center hidden">
        <div className="flex items-center gap-5">
          <img className="w-20 h-20 block" src={img} alt="chartImg1" />
          <div>
            <h3>{artist}</h3>
            <p>{desc}</p>
          </div>
        </div>

        <div className="control flex flex-1 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-8">
              <Shuffle />
              <Next />

              {play ? (
                <FaPauseCircle
                  fill="#FACD66"
                  className="w-[50px] h-[35px]"
                  onClick={handlePause}
                />
              ) : (
                <Play onClick={handlePlay} />
              )}

              <Next className="rotate-180" />
              <Repeat />

              <audio ref={audio} preload="none" className="block">
                <source src={song} type="audio/mpeg" />
              </audio>
            </div>

            <div className="playing w-[50vw]">
              <input
                className="w-full"
                type="range"
                name="playing"
                id="playing"
              />
            </div>
          </div>
        </div>
        <div className="volume flex gap-2 items-center">
          <VolumeIcon />
          <input type="range" name="volume" id="volume" />
        </div>
      </div>
    </div>
  );
}

export default BottomNav;

import { createContext, useRef, useState } from "react";
import datas from "../components/data/data";

const MusicContext = createContext();


export const MusicProvider = ({ children }) => {

  const audio = useRef();
  const [topChart, setTopChart] = useState(datas.topChart)
  const [play, setPlay] = useState(false);
  const [currentPlay, setCurrentPlay] = useState(topChart[0])

  console.log(audio.current ,'currentPlaycurrentPlaycurrentPlaycurrentPlay')


  const handlePlay = () => {
    audio.current.play();
    setPlay((play) => !play);
  };

  const handlePause = () => {
    audio.current.pause();
    setPlay((play) => !play);
  };



  return <MusicContext.Provider value={{
    topChart,
    handlePlay, currentPlay ,setPlay,play,audio,handlePlay,handlePause,setCurrentPlay
  }}>{children}</MusicContext.Provider>;
};

export default MusicContext;

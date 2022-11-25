import { createContext, useEffect, useRef, useState } from "react";
import datas from "../components/data/data";

const MusicContext = createContext();


export const MusicProvider = ({ children }) => {

  const audio = useRef();

  const [topChart, setTopChart] = useState(datas.topChart)
  const [play, setPlay] = useState(false);

  const [currentPlay, setCurrentPlay] = useState(topChart[0].songs[0])
  
  const handlePausePlay = () => {
    if(play){
      setPlay((play) => !play);
      audio.current.pause();
    }else{
      setPlay((play) => !play);
       audio.current.play();
     }
  };

  useEffect(() => {
   if(play){
    audio.current.play();
   }else{
    audio.current.pause();
   }
  }, [play])

  const type = topChart.filter((chart) => chart.type === currentPlay.type)

  
  // const data = datas.release.filter((char) => char.id === currentPlay.id)
  
  
  const handlePrev = () => {

    if(type.length === 0){
      const index = datas.release.findIndex( x => x.id === currentPlay.id);
  
      if(index=== 0){
        setCurrentPlay(datas.release[datas.release.length - 1])
      }
      else{
        setCurrentPlay(datas.release[index - 1])
      }
    }

    else{
      const index = type[0].songs.findIndex( x => x.id === currentPlay.id);
      if(index=== 0){
        setCurrentPlay(type[0].songs[type[0].songs.length - 1])
      }
      else{
        setCurrentPlay(type[0].songs[index - 1])
      }
    }

    setPlay(true)

    audio.current.load(); 
    audio.current.play();
    audio.current.currentTime = 0;
  };

  const handleNext = () => {
    if(type.length === 0){
      const index = datas.release.findIndex( x => x.id === currentPlay.id);
  
      if(index=== datas.release.length - 1){
        setCurrentPlay(datas.release[index - (datas.release.length - 1)])
      }
      else{
        setCurrentPlay(datas.release[index + 1])
      }
    }


    else{
      const index = type[0].songs.findIndex(x=> x.id === currentPlay.id);

      if(index === type[0].songs.length - 1){
        setCurrentPlay(type[0].songs[index - (type[0].songs.length - 1)])
      }
      else{
        setCurrentPlay(type[0].songs[index + 1])
      }

    }


    setPlay(true)
    audio.current.load(); 
    audio.current.play();
    audio.current.currentTime = 0;
  };



  const handlePlayed = (song) => {
    console.log(song , 'songsongsongsong')
    setCurrentPlay(song);
    setPlay(true)
    audio.current.load(); 
    audio.current.play();
  };


  return <MusicContext.Provider value={{
    topChart,
    currentPlay, 
    play,
    audio,
    setPlay,
    handleNext,
    handlePrev,
    handlePausePlay,
    setCurrentPlay,
    handlePlayed
  }}>{children}</MusicContext.Provider>;
};

export default MusicContext;

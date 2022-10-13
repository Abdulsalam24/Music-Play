import { createContext, useState } from "react";
import datas from "../components/data/data";

const MusicContext = createContext();


export const MusicProvider = ({ children }) => {

  const [music, setMusic] = useState(datas.topChart)



  return <MusicContext.Provider value={{

  }}>{children}</MusicContext.Provider>;
};

export default MusicContext;

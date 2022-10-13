import './App.scss';
import NavBar from './components/nav/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections';
import Home from './pages/Home';
import ViewChart from './pages/ViewChart';
import BottomNav from './components/BottomNav';
import { useEffect, useRef, useState } from 'react';
import SideNav from './components/nav/SideNav';

import { setClientToken } from "./components/data/spotify";

import { MusicProvider } from './context/MusicContext'
import Login from './components/auth/Login';

function App() {
  const body = useRef()

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, [])


  return !token ? (
    <Login />
  ) : (
    <MusicProvider>
      <div ref={body} className="App relative">

        <Router>
          <NavBar body={body} />
          <SideNav />

          <Routes>
            <Route exact path='/' element={<Home />} />

            <Route exact path='/viewChart/:id' element={<ViewChart />} />
            <Route exact path='/collections' element={<Collections />} />
          </Routes>
        </Router>
        <BottomNav />
      </div>
    </MusicProvider>
  );
}

export default App;

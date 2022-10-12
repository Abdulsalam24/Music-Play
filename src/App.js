import './App.scss';
import NavBar from './components/nav/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections';
import Home from './pages/Home';
import ViewChart from './pages/ViewChart';
import BottomNav from './components/BottomNav';
import { useRef } from 'react';
import SideNav from './components/nav/SideNav';

function App() {
  const body = useRef()

  return (
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
  );
}

export default App;

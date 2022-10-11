import './App.scss';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections';
import Home from './pages/Home';
import ViewChart from './pages/ViewChart';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/viewChart' element={<ViewChart />} />
          <Route path='/collections' element={<Collections />} />
        </Routes>
      </Router>
      <BottomNav />
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import Dashboard from './pages/DashBoard/Dashboard';
import TradePerson from './pages/TradePerson/TradePerson';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/tradeperson' element={<TradePerson />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

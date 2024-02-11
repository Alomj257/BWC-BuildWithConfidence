import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Sidebar />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Nav/Navbar';
import Layout from './utils/Layout';

function App() {
  return (
    <BrowserRouter>
      <>
        {/* <Navbar />
        <Routes>
          <Route path="/" element={<Sidebar />} />
        </Routes> */}
        <Layout />
      </>
    </BrowserRouter>
  );
}

export default App;

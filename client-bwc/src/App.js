import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import Dashboard from "./pages/DashBoard/Dashboard";
import TradePerson from "./pages/TradePerson/TradePerson";
import CreateJob from "./pages/CreateJob/CreateJob";
import JobHistory from "./pages/JobHistory/JobHistory";
import DashboardPanel from "./pages/DashBoard/DashboardPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPanel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="tradeperson" element={<TradePerson />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="job-history" element={<JobHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

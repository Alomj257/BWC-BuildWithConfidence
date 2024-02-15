import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import Dashboard from "./pages/DashBoard/Dashboard";
import TradePerson from "./pages/TradePerson/TradePerson";
import CreateJob from "./pages/CreateJob/CreateJob";
import JobHistory from "./pages/JobHistory/JobHistory";
import DashboardPanel from "./pages/DashBoard/DashboardPanel";
import TradesPersonNearby from "./pages/TradesPersonNearby/TradesPersonNearby";
import Supplier from "./pages/Supplier/Supplier";
import Profile from "./components/Profile/Profile";
import PostJob from "./pages/PostJob/PostJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPanel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="tradeperson" element={<TradePerson />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="job-history" element={<JobHistory />} />
          <Route path="profile" element={<Profile />} />
          <Route path="post-job" element={<PostJob />} />
        </Route>
        <Route path="/tradespern/nearby" element={<TradesPersonNearby />} />
        <Route path="/supplier" element={<Supplier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import Dashboard from "./Consumer/pages/DashBoard/Dashboard";
import TradePerson from "./Consumer/pages/TradePerson/TradePerson";
import CreateJob from "./Consumer/pages/CreateJob/CreateJob";
import JobHistory from "./Consumer/pages/JobHistory/JobHistory";
import DashboardPanel from "./Consumer/pages/DashBoard/DashboardPanel";
import TradesPersonNearby from "./Consumer/pages/TradesPersonNearby/TradesPersonNearby";
import Supplier from "./Consumer/pages/Supplier/Supplier";
import Profile from "./Consumer/components/Profile/Profile";
import PostJob from "./Consumer/pages/PostJob/PostJob";
import Home from "./PublicView/Pages/Home";
import TradeDashboardPanel from "./Tradeperson/Pages/DashBoard/DashboardPanel";
import TradeDashboard from "./Tradeperson/Pages/DashBoard/Dashboard";
import Consumer from "./Tradeperson/Pages/Consumer";
import PostJobCom from "./Consumer/components/JobPost/PostJob/PostJobCom";
import PostJobHome from "./Consumer/components/JobPost/PostJob/PostJobHome/PostJobHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consumer" element={<DashboardPanel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="tradeperson" element={<TradePerson />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="job-history" element={<JobHistory />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="post-job" element={<PostJob />} /> */}
          <Route path="post-job" element={<PostJobHome />} />
          <Route path="post-job/post" element={<PostJobCom />} />
        </Route>
        <Route
          path="/consumer/tradespern/nearby"
          element={<TradesPersonNearby />}
        />
        <Route path="/consumer/supplier" element={<Supplier />} />
        <Route path="/tradeperson" element={<TradeDashboardPanel />}>
          <Route path="" element={<TradeDashboard />} />
          <Route path="consumer" element={<Consumer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

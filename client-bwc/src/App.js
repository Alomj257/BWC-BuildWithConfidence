import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "boxicons/css/boxicons.min.css";
import Dashboard from "./Consumer/pages/DashBoard/Dashboard";
import TradePerson from "./Consumer/pages/TradePerson/TradePerson";
import CreateJob from "./Consumer/pages/CreateJob/CreateJob";
import JobHistory from "./Consumer/pages/JobHistory/JobHistory";
import DashboardPanel from "./Consumer/pages/DashBoard/DashboardPanel";
import TradesPersonNearby from "./Consumer/pages/TradesPersonNearby/TradesPersonNearby";
import Supplier from "./Consumer/pages/Supplier/Supplier";
import Profile from "./Consumer/components/Profile/Profile";
import Home from "./PublicView/Pages/Home";
import TradeDashboardPanel from "./Tradeperson/Pages/DashBoard/DashboardPanel";
import TradeDashboard from "./Tradeperson/Pages/DashBoard/Dashboard";
import Consumer from "./Tradeperson/Pages/Consumer";
import PostJobCom from "./Consumer/components/JobPost/PostJob/PostJobCom";
import PostJobHome from "./Consumer/components/JobPost/PostJob/PostJobHome/PostJobHome";
import Chat from "./Chat/Page/Chat";
// import AiChatBoat from "s./PublicView/AiChatBot/AiChatBoat";
import AuthPage from "./PublicView/Auth/AuthPage";
import NearByConsumer from "./Tradeperson/Pages/NearByConsumer";
import Jobs from "./Tradeperson/Pages/Jobs";
import TradeJobHistory from "./Tradeperson/Pages/JobHistory";
import AppliedUsersPage from "./Consumer/pages/AppliedUsers/AppliedUsersPage";
import { useAuth } from "./context/AuthContext";
import AboutUs from "./PublicView/Pages/AboutUs";
import RequestsPage from "./Tradeperson/Pages/RequestsPage";
import TradeJobDetails from "./Tradeperson/Components/TradeJobDetails/TradeJobDetails";
import JobDetails from "./Tradeperson/Components/JobDetails/JobDetails";
import {
  ConsumerProtect,
  TraderPersonProtect,
} from "./ProtectRoutes/ProtectRoutes";
import FaqPage from "./PublicView/Pages/FaqPage";
import ArticlePage from "./PublicView/Pages/ArticlePage";
import ContactPage from "./PublicView/Pages/ContactPage";

function App() {
  const [auth] = useAuth();
  return (
    <>
      <ToastContainer />
      {/* <AiChatBoat /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/consumer" element={<ConsumerProtect />}>
            <Route path="" element={<DashboardPanel />}>
              <Route path="" element={<Dashboard />} />
              <Route path="tradeperson" element={<TradePerson />} />
              <Route path="digital-contract" element={<CreateJob />} />
              <Route path="job-portal" element={<JobHistory />} />
              <Route path="overview" element={<TradeJobDetails />} />
              <Route path="job/details" element={<JobDetails />} />
              <Route
                path="job-history/applied/users"
                element={<AppliedUsersPage />}
              />
              <Route
                path="profile"
                element={<Profile id={auth?.user?._id} />}
              />
              {/* <Route path="post-job" element={<PostJob />} /> */}
              <Route path="post-job" element={<PostJobHome />} />
              <Route path="post-job/post" element={<PostJobCom />} />
              <Route path="chat" element={<Chat />} />
            </Route>
            <Route path="tradespern/nearby" element={<TradesPersonNearby />} />
            <Route path="supplier" element={<Supplier />} />
          </Route>
          {/* Tradeperson */}
          <Route path="/tradeperson" element={<TraderPersonProtect />}>
            <Route path="" element={<TradeDashboardPanel />}>
              <Route path="" element={<TradeDashboard />} />
              <Route path="consumer" element={<Consumer />} />
              <Route path="message" element={<Chat />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="job-portal" element={<TradeJobHistory />} />
              <Route path="requests" element={<RequestsPage />} />
              <Route path="overview" element={<TradeJobDetails />} />
              <Route path="job-details" element={<JobDetails />} />
              {/* <Route path="supplier" element={<Suppl />} /> */}
            </Route>
            <Route path="consumer/nearby" element={<NearByConsumer />} />
            {/* <Route path="supplier" element={<Supplier />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

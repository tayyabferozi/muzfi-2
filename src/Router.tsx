import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Community from "./components/pages/Community";
import CommunityPage from "./components/pages/Community/Community-Page";
import MainLayout from "./layouts/MainLayout";
import Listing from "./components/pages/Create-Post/Listing";
import Topic from "./components/pages/Create-Post/Topic";
import NewGear from "./components/pages/Create-Post/NewGear";
import Polls from "./components/pages/Create-Post/Polls";
import TabsWrapper from "./layouts/MainLayout/tabs-wrapper";

import Auth from "./components/auth/Auth";
import { useAppSelector } from "./redux/hooks";
import ForSale from "./components/pages/Market";

const AppRouter = () => {
  const hidden = useAppSelector((state) => state.authPopup);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/browse" element={<Community />} />
          <Route path="/browse/single" element={<CommunityPage />} />
          
          <Route path="/for-sale" element={<ForSale />} />
          <Route path="/my-gearroom" element={<TabsWrapper />}>
            <Route path="/my-gearroom/listing" element={<Listing />} />
            <Route path="/my-gearroom/topic" element={<Topic />} />
            <Route path="/my-gearroom/new-gear" element={<NewGear />} />
            <Route path="/my-gearroom/polls" element={<Polls />} />
          </Route>

          {/* <Route path="/auth" element={<Auth isModalActive={hidden.value} />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

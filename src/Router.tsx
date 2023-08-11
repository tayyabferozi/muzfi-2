import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Community from './components/pages/Community';
import CommunityPage from './components/pages/Community/Community-Page';
import Listing from './components/pages/Create-Post/Listing';
import NewGear from './components/pages/Create-Post/NewGear';
import Polls from './components/pages/Create-Post/Polls';
import Topic from './components/pages/Create-Post/Topic';
import Home from './components/pages/Home/Home';
import MainLayout from './layouts/MainLayout';
import TabsWrapper from './layouts/MainLayout/tabs-wrapper';


import ForSale from "./components/pages/Market";
import GearCatalog from "./components/pages/Gear-Catalog";
import Subscription from "./components/pages/Subscription";
import Newsletter from "./components/pages/Newsletter";
import Connect from "./components/pages/Connect";
import Ads from "./components/pages/Advertise";
import Policy from "./components/pages/Policy";
import About from "./components/pages/About";
import Help from "./components/pages/Help-Center";
import MyGearRoom from "./components/pages/My-Gear-Room";
import NewGearPage from "./components/pages/Single-Page/New-Gear";
import PollsPage from "./components/pages/Single-Page/Poll";
import TopicPage from "./components/pages/Single-Page/Topic";
import ListingPage from "./components/pages/Single-Page/Listing";
import Messages from "./components/pages/Messages";
import Notifications from "./components/pages/Notifications";
import Checkout from "./components/pages/Checkout";
import MiniLayout from "./layouts/MinLayout";
import SettingsLayout from "./components/pages/Settings/SettingsLayout";
import Account from "./components/pages/Settings/Account";
import NotificationsSettings from "./components/pages/Settings/Notifications";
import Chat from "./components/pages/Settings/Chat";
import Safety from "./components/pages/Settings/Safety";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route path='/auth' element={<Auth isModalActive={hidden.value} type={type.value} />}/> */}
          <Route index element={<Home />} />

          <Route path="/single/listing" element={<ListingPage />} />
          <Route path="/single/new-gear" element={<NewGearPage />} />
          <Route path="/single/poll" element={<PollsPage />} />
          <Route path="/single/topic" element={<TopicPage />} />

          <Route path="/browse" element={<Community />} />
          <Route path="/browse/single" element={<CommunityPage />} />

          <Route path="/my-gearroom" element={<MyGearRoom />} />
          <Route path="/for-sale" element={<ForSale />} />
          <Route path="user/for-sale" element={<ForSale />} />
          <Route path="/gear-catalog" element={<GearCatalog />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/careers" element={<GearCatalog />} />
          <Route path="/create" element={<TabsWrapper />}>
            <Route path="/create/listing" element={<Listing />} />
            <Route path="/create/topic" element={<Topic />} />
            <Route path="/create/new-gear" element={<NewGear />} />
            <Route path="/create/polls" element={<Polls />} />
          </Route>
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/settings" element={<SettingsLayout />}>
            <Route path="account" element={<Account />} />
            <Route path="notifications" element={<NotificationsSettings />} />
            <Route path="chat" element={<Chat />} />
            <Route path="safety" element={<Safety />} />
          </Route>
          {/* <Route path="/auth" element={<Auth isModalActive={hidden.value} />} /> */}
        </Route>
        <Route path="/" element={<MiniLayout />}>
          <Route path="checkout" element={<Checkout />} />
          <Route path="settings" element={<SettingsLayout />}>
            <Route path="account" element={<Account />} />
            <Route path="notifications" element={<NotificationsSettings />} />
            <Route path="chat" element={<Chat />} />
            <Route path="safety" element={<Safety />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

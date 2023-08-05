import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Community from './components/pages/Community';
import CommunityPage from './components/pages/Community/Community-Page';
import MainLayout from './layouts/MainLayout';
import Listing from './components/pages/Create-Post/Listing';
import Topic from './components/pages/Create-Post/Topic';
import NewGear from './components/pages/Create-Post/NewGear';
import Polls from './components/pages/Create-Post/Polls';
import TabsWrapper from './layouts/MainLayout/tabs-wrapper';

import ForSale from './components/pages/Market';
import GearCatalog from './components/pages/Gear-Catalog';
import Subscription from './components/pages/Subscription';
import Newsletter from './components/pages/Newsletter';
import Connect from './components/pages/Connect';
import Ads from './components/pages/Advertise';
import Policy from './components/pages/Policy';
import About from './components/pages/About';
import Help from './components/pages/Help-Center';
import MyGearRoom from './components/pages/my-gearroom';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {/* <Route path='/auth' element={<Auth isModalActive={hidden.value} type={type.value} />}/> */}
          <Route index element={<Home />} />
          <Route path='/browse' element={<Community />} />
          <Route path='/browse/single' element={<CommunityPage />} />
          <Route path='/my-gearroom' element={<MyGearRoom />} />
          <Route path='/for-sale' element={<ForSale />} />
          <Route path='user/for-sale' element={<ForSale />} />
          <Route path='/gear-catalog' element={<GearCatalog />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path='/subscribe' element={<Subscription />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/ads' element={<Ads />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/about' element={<About />} />
          <Route path='/help' element={<Help />} />
          <Route path='/careers' element={<GearCatalog />} />
          <Route path='/create' element={<TabsWrapper />}>
            <Route path='/create/listing' element={<Listing />} />
            <Route path='/create/topic' element={<Topic />} />
            <Route path='/create/new-gear' element={<NewGear />} />
            <Route path='/create/polls' element={<Polls />} />
          </Route>

          {/* <Route path="/auth" element={<Auth isModalActive={hidden.value} />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

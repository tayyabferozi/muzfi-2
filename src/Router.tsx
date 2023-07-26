import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Community from './components/pages/Community';
import ForSale from './components/pages/For-Sale';
import MainLayout from './layouts/MainLayout';
import Listing from './components/pages/Create-Post/Listing';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/browse' element={<Community />} />
          <Route path='/for-sale' element={<ForSale />} />
          <Route path='/my-gearroom/listing' element={<Listing />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

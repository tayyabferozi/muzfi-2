import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import MainLayout from 'layouts/MainLayout';
import Community from 'components/pages/Community';
import ForSale from 'components/pages/For-Sale';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/browse' element={<Community />} />
          <Route path='/for-sale' element={<ForSale />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

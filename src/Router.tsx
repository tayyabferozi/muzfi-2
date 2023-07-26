import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Community from './components/pages/Community';
import ForSale from './components/pages/For-Sale';
import MainLayout from './layouts/MainLayout';
import Auth from './components/auth/Auth';
import { useAppSelector } from "./redux/hooks";

const AppRouter = () => {
  const hidden = useAppSelector((state) => state.authPopup);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/auth" element={<Auth isModalActive={hidden.value} />} /> */}
          <Route path="/browse" element={<Community />} />
          <Route path="/for-sale" element={<ForSale />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

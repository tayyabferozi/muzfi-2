import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import MainLayout from "layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

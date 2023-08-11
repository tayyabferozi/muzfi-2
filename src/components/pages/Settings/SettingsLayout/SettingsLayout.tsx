import { Outlet } from "react-router-dom";
import Jumbo from "./Jumbo";
import Tabs from "./Tabs";

const SettingsLayout = () => {
  return (
    <>
      <Jumbo />
      <Tabs />

      <Outlet />
    </>
  );
};

export default SettingsLayout;

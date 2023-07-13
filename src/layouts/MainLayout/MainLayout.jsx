import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "components/common/Sidebar";
import Navbar from "components/common/Navbar";
import Explore from "components/common/Explore";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="bg-accentGray-500 w-screen overflow-hidden flex lg:flex-row flex-col p-6 pt-28 ">
        <Sidebar

          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex-grow xl:pl-6 pl-0 pb-0 px-[10px] lg:mr-[rem] xl:mr-[1rem] 2xl:mr-[-5rem]">
          <Outlet />
        </div>

        <div className="2xl:w-[330px] xl:w-[300px] lg:w-[320px]  mx-auto lg:mr-[3rem] xl:mr-[3rem]">
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

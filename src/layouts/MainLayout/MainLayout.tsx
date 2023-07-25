import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Explore from '../../components/common/Explore';
import Ad from '../../components/common/Explore/ad';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="overflow-hidden ">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="container flex flex-col w-screen p-6 overflow-hidden bg-accentGray-500 lg:flex-row pt-28 ">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex-grow xl:pl-6 pl-0 pb-0 px-[10px] lg:mr-[rem] xl:mr-[1rem] 2xl:mr-[-5rem]">
          <div className="gap-6 lg:flex">
            <div className="flex-grow min-[1700px]:max-w-[850px] 2xl:max-w-[700px] min-[1350px]:max-w-[675px] xl:max-w-[585px] min-[1150px]:max-w-[675px] lg:max-w-[600px] sm:w-[calc(100vw-48px)] w-[calc(100vw-48px)]  mx-auto">
              {/* <div className='mb-5 lg:hidden'>
          <Search />
        </div> */}
              <Outlet />
            </div>
          </div>
        </div>

        <div className="2xl:w-[330px] xl:w-[300px] lg:w-[320px]  mx-auto lg:mr-[3rem] xl:mr-[3rem]">
          <Ad />
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

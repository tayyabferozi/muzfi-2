import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Explore from '../../components/common/Explore';
import Ad from '../../components/common/Explore/ad';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='overflow-hidden '>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className='container flex flex-col w-screen p-6 overflow-hidden bg-accentGray-500 lg:flex-row pt-28 '>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className='flex-grow xl:pl-6 pl-0 pb-0 px-[10px] lg:mr-[rem] xl:mr-[1rem] 2xl:mr-[-5rem]'>
          <Outlet />
        </div>

        <div className='2xl:w-[330px] xl:w-[300px] lg:w-[320px]  mx-auto lg:mr-[3rem] xl:mr-[3rem]'>
          <Ad />
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

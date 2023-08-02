import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Explore from '../../components/common/Explore';
import Ad from '../../components/common/Explore/ad';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import Auth from '../../components/auth/Auth';
import { useAppSelector } from '../../redux/hooks';
import { cn } from '../../helpers/utils';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const hidden = useAppSelector((state) => state.authPopup);
  const type = useAppSelector((state) => state.authType);
  console.log(hidden);

  return (
    <div className="">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Auth isModalActive={hidden.value} type={type.value} />
      <div className="container flex flex-col p-6 bg-accentGray-500 lg:flex-row pt-28 ">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="overflow-hidden flex-grow xl:pl-6 pl-0 pb-0 px-[10px] lg:mr-[rem] ">
          <div className="gap-6 lg:flex">
            <div
              className={cn({
                "flex-grow min-[1700px]:max-w-[850px] 2xl:max-w-[700px] min-[1350px]:max-w-[675px] xl:max-w-[585px] min-[1150px]:max-w-[675px] lg:max-w-[600px] sm:w-[calc(100vw-48px)] w-[calc(100vw-48px)]  ":
                  !pathname.includes("for-sale") && !pathname.includes("about"),
              })}
            >
              {/* <div className='mb-5 lg:hidden'>
          <Search />
        </div> */}
              <Outlet />
            </div>
          </div>
        </div>

        {!pathname.includes("for-sale") && !pathname.includes("about") && (
          <div className="2xl:w-[330px] xl:w-[300px] lg:w-[320px]  mx-auto lg:mr-[3rem] xl:mr-[3rem]">
            <Ad /> <Explore />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;

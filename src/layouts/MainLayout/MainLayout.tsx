import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Auth from '../../components/auth/Auth';
import Explore from '../../components/common/Explore';
import Ad from '../../components/common/Explore/ad';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { cn } from '../../helpers/utils';
import { useAppSelector } from '../../redux/hooks';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const hidden = useAppSelector((state) => state.authPopup);
  const type = useAppSelector((state) => state.authType);
  console.log(hidden);

  return (
    <div className=''>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Auth isModalActive={hidden.value} type={type.value} />
      <div className='container [&>*]:overflow-auto pb-0 [&>*]:h-[calc(100vh-111px)] [&>*]:pb-6 flex flex-col gap-4 p-6 2xl:gap-5 bg-accentGray-500 lg:flex-row pt-28'>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className=' flex-grow pl-0 pb-0 lg:mr-[rem] scrollbar-hide'>
          <div className='gap-6 lg:flex'>
            <div
              className={cn({
                'w-full  ':
                  !pathname.includes('for-sale') && !pathname.includes('about'),
              })}
            >
              {/* <div className='mb-5 lg:hidden'>
          <Search />
        </div> */}
              <Outlet />
            </div>
          </div>
        </div>

        {!pathname.includes('for-sale') && !pathname.includes('about') && (
          <div className='lg:min-w-[300px] bg-white rounded-lg scrollbar-hide 2xl:max-w-[330px] lg:max-w-[320px]   '>
            <Ad /> <Explore />{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;

import { Link, NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import './Sidebar.css';
import GradientBtn from '../../buttons/GradientBtn';
import { cn } from '../../../helpers/utils';
import Resources from './Resources';
import SidebarItems from './SidebarItems';

import SidebarPanel from './SidebarPanel';




const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: Partial<{
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}>) => {
  const { pathname } = useLocation();
  return (
    <div
      className={clsx(
        'fixed bg-accentGray-500 top-[70px] xl:static xl:h-[unset] h-[calc(100vh-70px)] w-[210px] overflow-auto flex-shrink-0 ',
        isSidebarOpen ? 'left-0' : '-left-[300px]'
      )}
      id='main-layout-sidebar'
    >
      <div className=''>
        <div
          className='absolute block text-5xl text-white pb-9 xl:hidden top-2 right-3'
          onClick={() => setIsSidebarOpen((prevState: any) => !prevState)}
        >
          &times;
        </div>
            <SidebarPanel/>
        <div className='px-6 mt-4 rounded-lg py-3 bg-primary'>
          <Resources/>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;

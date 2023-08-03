import clsx from 'clsx';

import Resources from './Resources';
import './Sidebar.css';

import SidebarPanel from './SidebarPanel';

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: Partial<{
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}>) => {
  return (
    <div
      className={clsx(
        'fixed bg-accentGray-500 top-[70px] xl:static xl:h-[unset] h-[calc(100vh-70px)] z-10 min-w-[210px] lg:min-w-[280px] overflow-auto flex-shrink-0 ',
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
        <SidebarPanel />
        <div className='px-6 py-3 mt-4 rounded-lg bg-primary'>
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

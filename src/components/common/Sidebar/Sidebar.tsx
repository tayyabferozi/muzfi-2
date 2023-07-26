import { Link, NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import './Sidebar.css';
import GradientBtn from '../../buttons/GradientBtn';
import { cn } from '../../../helpers/utils';

const navItems = [
  { to: '/', icon: '/assets/imgs/home/home.png', label: 'Home' },
  {
    to: '/my-gearroom',
    icon: '/assets/imgs/home/gearroom.svg',
    label: 'My GearRoom',
  },
  {
    to: '/browse',
    icon: '/assets/imgs/home/singers.png',
    label: 'Communities',
  },
  {
    to: '/for-sale',
    icon: '/assets/imgs/home/market.png',
    label: 'For Sale',
  },
  {
    to: '/subscribe',
    icon: '/assets/imgs/home/policy.png',
    label: 'Subscribe',
  },
  {
    to: '/gear-catalog',
    icon: '/assets/imgs/home/gear.png',
    label: 'Gear Catalog',
  },
  {
    to: '/about-us',
    icon: '/assets/imgs/home/about.png',
    label: 'About us',
  },
  {
    to: '/policy',
    icon: '/assets/imgs/home/options.png',
    label: 'Policy',
  },
];

const topics = [
  {
    to: '/',
    icon: '/assets/vectors/sidebar/music.svg',
    label: 'Keyboard / Piano',
  },
  { to: '/', icon: '/assets/vectors/sidebar/music.svg', label: 'Guitar' },
  { to: '/', icon: '/assets/vectors/sidebar/music.svg', label: 'Bass Guitar' },
  { to: '/', icon: '/assets/vectors/sidebar/music.svg', label: 'Drums' },
  { to: '/', icon: '/assets/vectors/sidebar/music.svg', label: 'Horns / Wind' },
  { to: '/', icon: '/assets/vectors/sidebar/music.svg', label: 'Live Sound' },
  { to: '/', icon: '/assets/vectors/sidebar/music.svg', label: 'Recording' },
];

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
        'fixed bg-accentGray-500 top-[70px] xl:static xl:h-[unset] h-[calc(100vh-70px)] w-[270px] overflow-auto flex-shrink-0 z-10',
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

        <div className='px-6 rounded-lg py-7 bg-primary'>
          <Link className='block mb-6 xl:hidden' to='/'>
            <img
              className='mx-auto'
              src='/assets/imgs/common/logo.png'
              alt='logo'
            />
          </Link>

          <div>
            {navItems.map((el, idx) => {
              return (
                <NavLink
                  className='flex items-center gap-5 mb-[18px] p-3 relative transition-colors rounded-lg hover:bg-primary-700'
                  to={el.to}
                  key={'sidebar-nav-item' + idx}
                >
                  <img
                    className='absolute transition-opacity right-arrow -right-2'
                    src='/assets/vectors/sidebar/right-arrow.svg'
                    alt='right-arrow'
                  />
                  <div className=''>
                    <img
                      className={cn('w-[30px] h-[30px] ', {
                        invert:
                          pathname.includes('gearroom') &&
                          el.label.includes('GearRoom'),
                      })}
                      src={el.icon}
                      alt={el.label}
                    />
                  </div>
                  <div className='font-semibold text-white transition-colors'>
                    {el.label}
                  </div>
                </NavLink>
              );
            })}
          </div>

          <div className='mt-[30px]'>
            <button className='bg-transparent rounded-lg border-2 border-solid border-accentYellow-300 hover:bg-accentYellow-100 transition-colors w-full flex justify-center items-center gap-[14px] h-[52px]'>
              <img src='/assets/vectors/sidebar/add.svg' alt='add' />
              <div className='text-lg text-accentYellow-500'>Invite Users</div>
            </button>
          </div>

          <div className='mt-[40px]'>
            <p className='text-sm font-light text-center text-white'>
              Create an account to follow your favorite communities and start
              taking part in conversations.
            </p>

            <div className='mt-[20px]'>
              <GradientBtn className='w-full' lg label='Sell Gear' />
            </div>
          </div>
        </div>

        <div className='px-6 mt-10 rounded-lg py-7 bg-primary'>
          <h4 className='mb-3 text-white'>Topics</h4>
          {topics.map((el, idx) => {
            return (
              <Link
                to={el.to}
                className='flex items-center gap-[14px] p-3 rounded-lg transition-colors hover:bg-primary-700'
                key={'sidebar-topic-item' + idx}
              >
                <div>
                  <img src={el.icon} alt={el.label} />
                </div>
                <div className='text-base font-semibold text-white'>
                  {el.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div className='px-6 mt-10 rounded-lg py-7 bg-primary'>
          <div>
            <img
              className='w-full'
              src='/assets/imgs/home/ad-1.png'
              alt='instrument'
            />
          </div>
          <div className='mt-4'>
            <img
              className='w-full'
              src='/assets/imgs/home/ad-2.png'
              alt='instrument'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

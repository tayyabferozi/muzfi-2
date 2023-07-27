import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
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
    label: 'Newsletters',
  },
  {
    to: '/policy',
    icon: '/assets/imgs/home/options.png',
    label: 'Releases',
  },
];
const SidebarItems = () => {
const { pathname } = useLocation();
  return (
     <div>
            {navItems.map((el, idx) => {
              return (
                <NavLink
                  className='flex items-center gap-5 mb-[10px] p-2 relative transition-colors rounded-lg hover:bg-primary-700'
                  to={el.to}
                  key={'sidebar-nav-item' + idx}
                >
                  <img
                    className='absolute transition-opacity right-arrow -right-1.5'
                    src='/assets/vectors/sidebar/right-arrow.svg'
                    alt='right-arrow'
                  />
                  <div className=''>
                    <img
                      className={cn('w-[20px] h-[20px] ', {
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
          </div>)
}

export default SidebarItems
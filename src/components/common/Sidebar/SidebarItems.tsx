import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../../helpers/utils';

const navItems = [
  { to: "/", icon: "/assets/imgs/home/home.png", label: "Home" },
  {
    to: "/browse",
    icon: "/assets/imgs/home/singers.png",
    label: "Communities",
  },
  {
    to: "/for-sale",
    icon: "/assets/imgs/home/market.png",
    label: "For Sale",
  },
  {
    to: "/gear-catalog",
    icon: "/assets/imgs/home/setting.png",
    label: "Gear Catalog",
  },
  {
    to: "/subscribe",
    icon: "/assets/imgs/home/subscription-2.png",
    label: "Muzfi Premium",
  },

  {
    to: "/newsletter",
    icon: "/assets/imgs/home/newsletter.png",
    label: "Newsletters",
  },
  {
    to: "/connect",
    icon: "/assets/imgs/home/connection.png",
    label: "Connect", //Until We grow will be "Releases"
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
                      className='w-6 h-6 '
              
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
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const resources = [
  {
    to: '/ads',
    icon: '/assets/imgs/home/advertising-3.png',
    label: 'Advertise',
  },
  { to: '/help', icon: '/assets/imgs/home/help.png', label: 'Help' },
  {
    to: '/careers',
    icon: '/assets/imgs/home/career-growth-2.png',
    label: 'Careers',
  },
  {
    to: '/about',
    icon: '/assets/imgs/home/about.png',
    label: 'About Muzfi',
  },
  { to: '/policy', icon: '/assets/imgs/home/policy.png', label: 'Policy' },
];
const Resources = () => {
  return (
    <div>
      {' '}
      <h5 className='mb-3 text-white'>Resources</h5>
      {resources.map((el, idx) => {
        return (
          <NavLink
            to={el.to}
            className='flex items-center gap-[14px] p-3 rounded-lg transition-colors hover:bg-primary-700'
            key={'sidebar-nav-item' + idx}
          >
            <div>
              <img className='h-6' src={el.icon} alt={el.label} />
            </div>
            <div className='text-base font-semibold text-white text-sm'>
              {el.label}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Resources;

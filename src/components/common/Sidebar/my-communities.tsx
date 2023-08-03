import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MyCommunities = () => {
  return (
    <div>
      {' '}
      <h5 className='mb-3 text-lg font-semibold text-white'>My Communities</h5>
      <div className='space-y-3'>
        {Array.from(Array(8)).map((_) => {
          return (
            <div key={_} className='flex items-center gap-2'>
              <img
                src='https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='w-10 h-10 rounded-full ring-1 ring-white'
              />
              <div className='grow'>
                <p className='text-xs font-semibold text-white'>NordGang</p>
                <p className='text-yellow-500 text-[10px]'>
                  Latest activity 20m ago
                </p>
              </div>
              <p className='text-neutral-400 text-[8px] font-medium'>
                2.3k Members
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCommunities;

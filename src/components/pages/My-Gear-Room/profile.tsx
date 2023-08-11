import { Icon } from '@iconify/react';
import YellowBtn from '../../buttons/YellowBtn/YellowBtn';
import Card from '../../common/Card/Card';
import { RatingStars } from '../Single-Page/Listing/details';
import About from './about';
import { Stat } from './stat';

export default function GearRoomProfile() {
  return (
    <Card>
      <p className=' text-[22px] font-semibold'>Pierre’s Gear Room</p>
      <div className='flex gap-4 mt-4'>
        <img
          className='w-32 rounded-lg md:w-44 aspect-square'
          src='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <div className='flex flex-wrap items-center grow'>
          <div className='mr-3'>
            <p className='text-lg font-semibold '>PBASS003</p>
            <p className='flex items-center gap-1 text-xs font-medium text-neutral-400'>
              <Icon icon={'fluent:location-12-regular'} className='text-base' />{' '}
              Hartford, CT, USA
            </p>
          </div>
          <YellowBtn className='px-4 ' label={'Follow'} />
          <Stat className='px-3 mt-3 basis-full max-md:hidden' />
        </div>
      </div>
      <Stat className='mt-6 md:hidden' />
      <div className='grid grid-cols-2 gap-1 md:grid-cols-4'>
        {data.map((_) => (
          <div key={_.label} className='flex flex-col items-center gap-1 my-4'>
            <div className='text-xs font-medium text-zinc-500'>{_.label}</div>
            <_.Comp />
          </div>
        ))}
      </div>
      <div className='flex justify-center my-3 gap-7 max-sm:hidden'>
        {action.map((_) => (
          <button
            key={_.label}
            className='flex items-center border text-zinc-600 hover:bg-zinc-600/5 rounded-md border-zinc-600 p-2.5 justify-center gap-2.5 w-fit'
          >
            <Icon icon={_.icon} className='text-xl' />
            <p className='font-bold '>{_.label}</p>
          </button>
        ))}
      </div>
      <hr />
      <About />
    </Card>
  );
}

const data = [
  {
    label: 'MuzPoints',
    Comp: () => (
      <div className='flex items-center gap-1'>
        <img src='/assets/vectors/common/flower.svg' alt='' />
        <div className='text-[11px] font-medium '>1,65,201</div>
      </div>
    ),
  },
  {
    label: 'Calendar',
    Comp: () => (
      <div className='flex items-center gap-1'>
        <img src='/assets/vectors/common/calendar.svg' alt='' />
        <div className='text-[11px] font-medium '>October 23, 2017</div>
      </div>
    ),
  },
  {
    label: 'Seller Rating',
    Comp: () => <RatingStars />,
  },
  {
    label: 'Buyer Rating ',
    Comp: () => <RatingStars />,
  },
];

const action = [
  {
    icon: 'ri:message-2-line',
    label: 'Send Message',
  },
  {
    icon: 'mdi:user-block-outline',
    label: 'Block User',
  },
  {
    icon: 'ic:outline-report',
    label: 'Report User',
  },
];

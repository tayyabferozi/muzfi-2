import { Icon } from '@iconify/react';
import { useState } from 'react';
import GradientBtn from '../../buttons/GradientBtn/GradientBtn';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className='mt-4'>
      <p className='text-lg font-semibold text-black'>About us</p>
      <div className='mt-3 text-base font-normal'>
        {isExpanded ? (
          <>
            {text}
            {text.length > 220 && (
              <span
                className='cursor-pointer text-accentYellow-500'
                onClick={() => setIsExpanded(false)}
              >
                {' '}
                Read less
              </span>
            )}
          </>
        ) : (
          <>
            {text.slice(0, 220)}
            {text.length > 220 && (
              <>
                ...{' '}
                <span
                  className='cursor-pointer text-accentYellow-500'
                  onClick={() => setIsExpanded(true)}
                >
                  Read more
                </span>
              </>
            )}
          </>
        )}
      </div>
      <div className='flex justify-center gap-5 my-3'>
        {action.map((_) => (
          <GradientBtn
            label={
              <span className='flex items-center gap-1.5'>
                <Icon icon={_.icon} className='text-xl' />
                <p className='font-bold '>{_.label}</p>
              </span>
            }
            key={_.label}
            className='flex '
          />
        ))}
      </div>
    </section>
  );
}

const text =
  "Hi folks I'm Matthew,  matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly. Hi folks I'm Matthew, matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly. Hi folks I'm Matthew, matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly.";

const action = [
  {
    icon: 'ri:star-line',
    label: 'Reviews',
  },
  {
    icon: 'mdi:cart-percent',
    label: 'For Sale',
  },
  {
    icon: 'tabler:needle-thread',
    label: 'Threads',
  },
  {
    icon: 'mdi:comments-outline',
    label: 'Comments',
  },
];

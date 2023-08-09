import { Icon } from '@iconify/react';
import React from 'react';

export default function Details() {
  return (
    <section className='max-lg:py-4'>
      <div className='text-lg font-semibold '>
        Kadence Frontier Jumbo Semi Acoustic Guitar With Die Cast Keys, Jumbo
        Semi Super Combo
      </div>
      <div>
        <RatingStars
          extra={
            <div className='text-sm ml-2.5 font-normal '>
              4.8 | 13,557 Votes
            </div>
          }
        />
        <div className='flex items-center gap-4 py-2'>
          <img
            src='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-12 rounded-full aspect-square'
          />
          <div>
            <div className='text-lg font-semibold '>Mr.keys121</div>
            <p className='flex items-center gap-1 text-xs font-medium text-neutral-400'>
              <Icon icon={'fluent:location-12-regular'} className='text-base' />{' '}
              Damascus, OR, United States3
            </p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-medium text-zinc-500'>MuzPoints</p>{' '}
            <img src='/assets/vectors/home/flower.svg' alt='flower' />
            <p className='text-xs font-medium '>1,65,201</p>
          </div>
          <div className='flex gap-2'>
            <p className='text-sm font-medium text-zinc-500'>Seller Rating</p>
            <RatingStars />
          </div>
        </div>
      </div>
    </section>
  );
}
export function RatingStars({ extra }: { extra?: React.ReactNode }) {
  return (
    <div className='flex items-center'>
      {Array.from(Array(5)).map((_) => (
        <Icon
          key={_}
          className='text-accentYellow-500'
          icon={'ic:outline-star'}
        />
      ))}
      {extra}
    </div>
  );
}

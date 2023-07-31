import { Icon } from '@iconify/react';
import Select from '../../../common/select';
import { cn } from '../../../../helpers/utils';

export default function Pricing() {
  return (
    <section>
      <div className='flex items-center text-sm gap-2.5'>
        <p>Your Listings</p>{' '}
        <Icon icon={'ri:arrow-right-s-line'} className='text-xs' />
        <p>Fender Jazz Bass 2010</p>
      </div>
      <p className='font-semibold  mb-2.5'>Pricing </p>
      <Select
        options={options}
        placeholder='USD'
        className='w-full bg-zinc-100'
      />
      <div className='grid grid-cols-[3fr_5fr] text-sm gap-x-3 py-2 gap-y-2 '>
        {data.map((_) => (
          <>
            <div className={cn('flex items-center gap-2', _.cn)}>
              {Object.keys(_)[0]} <Icon icon={'ri:question-line'} />
            </div>
            <p className={cn('', _.cn)}>{Object.values(_)[0]}</p>
          </>
        ))}
      </div>
      <div className='flex items-start gap-2.5 py-4'>
        <input type='radio' name='shipping' id='flat' className='mt-0.5' />
        <label htmlFor='flat' className=''>
          <p className='text-sm font-bold '>
            3% of final selling price (including shipping) *
          </p>
          <div className='text-[10px]'>
            This gives your listing the best chance for more views based on the
            Reverb Bump rates of similar listings.
          </div>
        </label>
      </div>
    </section>
  );
}
const options = [{ label: 'hello' }, { label: 'world' }];
const data = [
  { 'Selling fee': '$23.25' },
  { 'Processing fee': '$15.32', cn: 'text-neutral-500' },
  { 'Estimated Earnings': '$426.43', cn: 'font-bold' },
];

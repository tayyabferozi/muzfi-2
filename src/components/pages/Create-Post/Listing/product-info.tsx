import YellowBtn from '../../../buttons/YellowBtn/YellowBtn';
import { Input } from '../../../common/input';

export function ProductInfo() {
  return (
    <>
      <p className='font-semibold leading-tight'>Tell us about your gear</p>
      <div>
        {data.map((_) => (
          <Input {..._} />
        ))}
        <p className='text-black text-[11px] font-semibold'>
          Is this handmade?
        </p>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <input
            type='checkbox'
            id='check'
            className='checked:accent-zinc-100'
          />
          <label
            htmlFor='check'
            className='text-sm font-normal text-black cursor-pointer'
          >
            I handmade this item
          </label>
        </div>
      </div>
      <YellowBtn className='px-6 my-8 w-max' label={'Continue'} />
    </>
  );
}

const data = [
  { placeholder: 'Brand', 'aria-required': true },
  { placeholder: 'Model', 'aria-required': true },
  {
    placeholder: 'Year',
    'aria-details':
      'If you don\'t know the exact year, use a fuzzy date like "mid-90s" or "1953-1957."',
  },
  { placeholder: 'Finish' },
  {
    placeholder: 'Model',
    'aria-label': 'Listing Title',
    'aria-required': true,
  },
];

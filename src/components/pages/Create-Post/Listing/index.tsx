import YellowBtn from '../../../buttons/YellowBtn/YellowBtn';
import { Input } from '../../../common/input';

const Listing = () => {
  // ADD Create Listing Page Sequence Here (7. Create Thread: LISTING)

  return (
    <>
      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
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
        </div>
      </div>
      <div className=' flex items-center p-2.5 bg-zinc-100 rounded-lg justify-between'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <input
            type='checkbox'
            defaultChecked
            id='notifications'
            className='checked:accent-blue-500'
          />
          <label
            htmlFor='notifications'
            className='text-sm font-normal text-black cursor-pointer'
          >
            Send me post reply notifications
          </label>
        </div>
        <a
          href='/'
          className='flex items-center gap-2 text-sm font-medium text-right text-blue-700'
        >
          Connect accounts to share your post{' '}
          <img src='/assets/vectors/common/info.svg' alt='' />
        </a>
      </div>
    </>
  );
};

export default Listing;

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

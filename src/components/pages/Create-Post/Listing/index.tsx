import React from 'react';
import Select from '../../../common/select';
import Tabs from '../../../common/tabs';

const Listing = () => {
  // ADD Create Listing Page Sequence Here (7. Create Thread: LISTING)

  return (
    <div>
      <p className='text-black text-[22px] font-semibold'>Create a post</p>
      <div className='flex justify-between my-3'>
        <Select options={options} placeholder='Choose a Category' />
        <Select options={options} placeholder='Choose  Sub Category' />
        <Select options={options} placeholder='Choose Community' />
      </div>
      <div className='bg-white border rounded-lg  border-slate-400 border-opacity-20 p-2.5'>
        <Tabs />
      </div>
    </div>
  );
};

export default Listing;

const options = [
  { label: 'one', action: '' },
  { label: 'two', action: '' },
  { label: 'three', action: '' },
];

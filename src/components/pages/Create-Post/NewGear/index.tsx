import React, { useRef } from 'react';
import GreyBtn from '../../../buttons/GreyBtn/GreyBtn';

const NewGear = () => {
  // ADD Create New GearPost Page Sequence Here (FIGMA: 7. Create Thread: NEWGEAR)
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className=''>
      <div className='flex text-sm font-medium border rounded-md bg-stone-50 px-3.5  items-center border-slate-400 '>
        <input
          placeholder='Search for Gear '
          className={
            'w-full pt-3 pb-[13px] outline-none placeholder:text-neutral-400 text-sm font-medium bg-stone-50 rounded-md  h-10'
          }
        />
        <div className='ml-4 text-sm font-semibold text-right text-neutral-400'>
          0/300
        </div>
      </div>
      <p className='text-[10px] py-0.5'>
        Cant find your gear Add yours and help grow our database for others{' '}
      </p>
      <GreyBtn className={'w-max px-6 my-3'} label={'+ Create Avatar'} />
      <div
        onClick={() => inputRef.current?.click()}
        className='flex flex-col items-center justify-center border rounded-lg border-dashed border-accentYellow-500 [&_*]:cursor-pointer cursor-pointer h-36 bg-[#FBBC0515]'
      >
        <img src='/assets/vectors/common/upload.svg' alt='' />
        <p className='font-semibold text-accentYellow-500'>+ Upload Photo</p>
      </div>
      <input type='file' className='hidden' ref={inputRef} />
      <br />
    </div>
  );
};

export default NewGear;

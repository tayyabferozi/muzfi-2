import React, { useRef } from 'react';
import GreyBtn from '../../../buttons/GreyBtn/GreyBtn';
import { TextField } from '../../../text-field';
import Select from '../../../common/select';
import YellowBtn from '../../../buttons/YellowBtn/YellowBtn';

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
      <TextField />
      <div className='flex'>
        {data.map((_) => (
          <div key={_.label}>
            <p className=' text-[11px] font-semibold mb-1'>
              How’d you receive it?
            </p>
            <Select options={_.options} placeholder={_.placeholder} />
          </div>
        ))}
      </div>
      <div className='grid grid-cols-4 gap-2 my-10'>
        {data2.map((_) => (
          <div className='rounded-md bg-yellow-500/10 p-2.5 '>
            <p className='text-[11px] font-semibold'>{_.label}</p>
            <p className=' text-[10px] '>
              hb sdjbchjbhjbsdjh jhb hj hj hj jh hbhujbhb hb hjbhjbh jbhujb
              hbsdfdsv sdv sdvsd vsvdvvdvsdv sdvsdvv.
            </p>
            <div className='flex justify-between mt-2'>
              {Array.from(Array(5).keys()).map((_) => (
                <div
                  className='w-[26px] h-[26px] bg-gray-800 text-white grid place-content-center font-semibold rounded-full'
                  key={_}
                >
                  {_ + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-4 my-8'>
        <GreyBtn label={'Cancel'} />
        <YellowBtn label={'Save'} className='px-6' />
      </div>
    </div>
  );
};

export default NewGear;

const data = [
  {
    label: 'How’d you receive it?',
    placeholder: 'Select 1',
    options: [{ label: 'hello' }, { label: 'world' }],
  },
];
const data2 = [
  {
    label: 'Usability Rating',
    placeholder:
      'hb sdjbchjbhjbsdjh jhb  hj hj hj jh hbhujbhb hb hjbhjbh jbhujb hbsdfdsv sdv sdvsd vsvdvvdvsdv sdvsdvv.',
  },
  {
    label: 'Usability Rating',
    placeholder:
      'hb sdjbchjbhjbsdjh jhb  hj hj hj jh hbhujbhb hb hjbhjbh jbhujb hbsdfdsv sdv sdvsd vsvdvvdvsdv sdvsdvv.',
  },
];

import { Icon } from '@iconify/react';
import { useId } from 'react';

export function Checkbox({ label, extra }: { label: string; extra?: string }) {
  const id = useId();
  return (
    <div>
      <input type='checkbox' id={id} className='hidden peer' />
      <label
        htmlFor={id}
        className='peer-checked:[&>div]:bg-blue-700 flex items-center gap-2.5 select-none'
      >
        <div className='w-[18px] h-[18px] grid place-content-center group   rounded border border-slate-400 border-opacity-20'>
          <Icon
            icon={'material-symbols:check'}
            className='text-lg text-white'
          />
        </div>
        <p className='text-sm font-medium '>{label}</p>
        {extra && (
          <span className='text-blue-700 bg-blue-100 rounded-sm py-0.5 px-1.5 text-[8px] font-normal'>
            {extra}
          </span>
        )}
      </label>
    </div>
  );
}

export default function Shipping() {
  return (
    <>
      <section>
        <p className='font-semibold '>Shipping</p>
        <p className='text-sm font-semibold '>
          <span>How will you deliver the item to the buyer? </span>
          <span className='text-red-600 '>*</span>
        </p>
        <div className='text-sm '>You can select both options.</div>
        <Checkbox label='Shipping' extra='Items sell faster' />
        <Checkbox label='Local Pickup' />
      </section>
    </>
  );
}

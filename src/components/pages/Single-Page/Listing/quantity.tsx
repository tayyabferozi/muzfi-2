import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Quantity() {
  const [value, setValue] = useState(5);
  return (
    <section className='flex my-4 select-none w-fit'>
      <div
        onClick={() => setValue((p) => ++p)}
        className='grid text-lg font-semibold rounded-tl rounded-bl cursor-pointer place-content-center bg-accentYellow-500 w-11 h-11'
      >
        +
      </div>
      <div className='grid text-lg font-semibold bg-white place-content-center w-11 h-11'>
        {value}
      </div>
      <div
        onClick={() => setValue((p) => --p)}
        className='grid text-lg font-semibold border rounded-tr rounded-br cursor-pointer bg-zinc-100 place-content-center w-11 h-11'
      >
        -
      </div>
      <button className='grid ml-2 bg-white border rounded-lg w-11 place-content-center h-11 border-slate-400/20'>
        <Icon icon='ri:heart-line' className='text-xl text-stone-300' />
      </button>
    </section>
  );
}

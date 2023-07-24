import { Icon } from '@iconify/react';

export default function Filter() {
  return (
    <section className='flex flex-wrap justify-between my-8'>
      {data.map((_) => (
        <div
          key={_.label}
          className='bg-white border p-3 gap-1 rounded-lg max-w-[167px] w-full border-slate-200'
        >
          <div className='flex items-center gap-1'>
            <Icon icon='carbon:location' className='text-lg text-zinc-500' />
            <p className='text-xs text-zinc-500'>{_.label}</p>
          </div>
          <p className='text-sm font-medium'>{_.desc} </p>
        </div>
      ))}
    </section>
  );
}

const data = [
  { label: 'Sub', desc: 'Gibson Les Paul' },
  { label: 'Type', desc: 'None' },
  { label: 'Genre', desc: 'None' },
  { label: 'Create Community', desc: 'Maple' },
];

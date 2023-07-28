import { Icon } from '@iconify/react';

export default function ForSaleTopBar() {
  return (
    <section>
      <div className='p-2 bg-white border rounded-lg border-slate-400/20'>
        <button className='border rounded-md h-11 bg-zinc-100 border-slate-400/20'>
          <Icon icon={'ic:round-menu'} />
        </button>
      </div>
    </section>
  );
}

import { Icon } from '@iconify/react';
import { HTMLAttributes, useState } from 'react';
import { cn } from '../../../../helpers/utils';

interface VoteProps extends HTMLAttributes<HTMLDivElement> {}

export default function Vote({ className, ...props }: VoteProps) {
  const [count, setCount] = useState(Math.round(Math.random() * 10));
  return (
    <section className={cn('space-y-1 select-none', className, {})} {...props}>
      <Icon
        role='button'
        onClick={() => setCount((p) => ++p)}
        icon={'ri:arrow-up-s-line'}
        className='p-1 text-2xl rounded-lg bg-zinc-100 text-neutral-400'
      />
      <div className='w-6 text-sm font-medium text-center text-neutral-400'>
        {count}
      </div>
      <Icon
        role='button'
        onClick={() => setCount((p) => --p)}
        icon={'ri:arrow-down-s-line'}
        className='p-1 text-2xl rounded-lg bg-zinc-100 text-neutral-400'
      />
    </section>
  );
}

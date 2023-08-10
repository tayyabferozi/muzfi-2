import { Icon } from '@iconify/react';
import { HTMLAttributes } from 'react';
import { cn } from '../../../../helpers/utils';

interface VoteProps extends HTMLAttributes<HTMLDivElement> {}

export default function Vote({ className, ...props }: VoteProps) {
  return (
    <section className={cn('space-y-1', className, {})} {...props}>
      <Icon
        icon={'ri:arrow-up-s-line'}
        className='p-1 text-2xl rounded-lg bg-zinc-100 text-neutral-400'
      />
      <div className='w-6 text-sm font-medium text-center text-neutral-400'>
        1
      </div>
      <Icon
        icon={'ri:arrow-down-s-line'}
        className='p-1 text-2xl rounded-lg bg-zinc-100 text-neutral-400'
      />
    </section>
  );
}

import { HTMLAttributes } from 'react';
import { cn } from '../../../helpers/utils';

export const Stat = ({
  className,
  ...props
}: { className?: string } & HTMLAttributes<HTMLDivElement>) => {
  const data = [
    {
      value: 7,
      label: 'posts',
    },
    {
      value: 24,
      label: '# gear',
    },
    {
      value: 20,
      label: 'For sale',
    },
  ];
  return (
    <div {...props} className={cn('gap-3.5 flex', className, {})}>
      {data.map((_) => (
        <div
          className='w-full p-3 border rounded-lg bg-yellow-50/60 border-amber-100'
          key={_.label}
        >
          <p className='text-xl font-semibold text-center '>{_.value}</p>
          <p className='text-xs font-medium text-center'>Posts</p>
        </div>
      ))}
    </div>
  );
};

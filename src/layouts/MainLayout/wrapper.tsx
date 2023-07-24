import React from 'react';
import { cn } from '../../helpers/utils';

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('gap-6 mt-8 lg:flex', className)}>
      <div className='flex-grow min-[1700px]:max-w-[850px] 2xl:max-w-[700px] min-[1350px]:max-w-[675px] xl:max-w-[585px] min-[1150px]:max-w-[675px] lg:max-w-[600px] sm:w-[calc(100vw-48px)] w-[calc(100vw-48px)] '>
        {children}
      </div>
    </div>
  );
}

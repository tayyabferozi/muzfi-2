import { Icon } from '@iconify/react';
import { HTMLAttributes, useState } from 'react';
import CommentBox from './comment-box';
import { cn } from '../../../../helpers/utils';

interface CommentProps extends HTMLAttributes<HTMLDivElement> {}

export default function Comment({ className, ...props }: CommentProps) {
  const [count, setCount] = useState(Math.round(Math.random() * 10));
  return (
    <div
      className={cn(
        '[&_aside]:flex py-3 [&_aside]:justify-center [&_aside]:min-w-[50px] space-y-2',
        {}
      )}
      {...props}
    >
      <div className='flex items-center gap-2'>
        <aside>
          <img
            src='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-12 rounded-full max-sm:w-14 aspect-square'
          />
        </aside>
        <p className='text-sm font-medium grow'>ramsesmiron</p>
        <p
          role='button'
          className='flex items-center gap-2 text-xs font-medium text-blue-700'
        >
          <Icon icon='material-symbols:reply' />
          Reply
        </p>
      </div>
      <div className='flex'>
        <aside>
          <div className='flex flex-col items-center gap-1 p-1 font-semibold border rounded h-fit w-9 text-accentYellow-500 bg-white/80 border-accentYellow-500'>
            <button onClick={() => setCount((p) => ++p)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount((p) => --p)}>-</button>
          </div>
        </aside>
        <div className='pl-3 text-[11.12px]'>
          <span className='text-blue-700'>@maxblagun </span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <CommentBox className='sm:hidden' reply />
        </div>
      </div>
    </div>
  );
}

import { HTMLAttributes } from 'react';
import GradientBtn from '../../../buttons/GradientBtn';
import { cn } from '../../../../helpers/utils';

interface CommentBoxProps extends HTMLAttributes<HTMLDivElement> {
  reply?: boolean;
}

export default function CommentBox({
  className,
  reply,
  ...props
}: CommentBoxProps) {
  const Comp = reply ? 'input' : 'textarea';
  const placeholder = reply ? 'Add a reviews…' : 'Add a Comments…';

  return (
    <section
      className={cn('flex items-start gap-4 mt-2', className, {})}
      {...props}
    >
      <img
        src='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        className={cn('rounded-full w-14 aspect-square', {
          'w-10 max-sm:w-10': reply,
        })}
      />
      <div className='w-full'>
        <Comp
          placeholder={placeholder}
          rows={3}
          className='w-full border rounded p-2.5 min-h-[40px] bg-zinc-100 border-slate-400/20'
        />
        <GradientBtn label={'send'} className={'w-32 mt-4 ml-auto'} />
      </div>
    </section>
  );
}

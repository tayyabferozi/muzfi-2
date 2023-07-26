import { Icon } from '@iconify/react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { TextField } from '../../../text-field';
import GreyBtn from '../../../buttons/GreyBtn';
import YellowBtn from '../../../buttons/YellowBtn';

const Topic = () => {
  // ADD Create Topic Post Page Sequences Here (Figma: 7. Create Thread: TOPIC)

  return (
    <>
      <div className='flex text-sm font-medium border rounded-md bg-stone-50 px-3.5  items-center border-slate-400 '>
        <input
          placeholder='Title '
          className={
            'w-full pt-3 pb-[13px] outline-none placeholder:text-neutral-400 text-sm font-medium bg-stone-50 rounded-md  h-10'
          }
        />
        <div className='ml-4 text-sm font-semibold text-right text-neutral-400'>
          0/300
        </div>
      </div>
      {/* toggle group */}
      <ToggleGroup.Root
        defaultValue='Text'
        type='single'
        className='flex justify-center gap-4 my-8'
      >
        {data.map((_) => (
          <ToggleGroup.Item
            value={_.label}
            className='flex flex-col items-center justify-center w-24 border rounded-md aspect-square bg-stone-50 border-slate-400 aria-checked:bg-yellow-500/20 aria-checked:border-accentYellow-500'
          >
            <Icon icon={_.icon} className='text-3xl' />
            <p className='text-sm font-semibold leading-[18px]'>{_.label}</p>
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
      <TextField />
      <div className='flex gap-3'>
        {tags.map((_) => (
          <GreyBtn label={'+ ' + _.label} />
        ))}
      </div>
      <div className='flex gap-4 my-8'>
        <GreyBtn label={'Cancel'} />
        <YellowBtn label={'Save'} className='px-6' />
      </div>
    </>
  );
};

export default Topic;

const data = [
  {
    label: 'Text',
    icon: 'jam:text',
  },
  {
    label: 'Content',
    icon: 'dashicons:text',
  },
  {
    label: 'Link',
    icon: 'ph:link-bold',
  },
];

const tags = [
  {
    label: 'OC',
  },
  {
    label: 'Spoiler',
  },
  {
    label: 'OC',
  },
  {
    label: 'Spoiler',
  },
];

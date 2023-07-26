import * as Popover from '@radix-ui/react-popover';
import { Link } from 'react-router-dom';
const CreatePost = ({ children }: { children: React.ReactNode }) => (
  <Popover.Root>
    <Popover.Trigger>{children}</Popover.Trigger>
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content className='z-50 w-52  rounded shadow bg-gradient-to-l right-0 from-red-500 to-yellow-500 p-0.5'>
        <div className='px-4 py-3 space-y-2 bg-white rounded'>
          {data.map((_) => (
            <Link
              to={_.href}
              key={_.label}
              className='flex items-center gap-1.5'
            >
              <img src={`/assets/vectors/navbar/${_.label}.svg`} alt='' />
              <p className='right-0 font-medium capitalize hover:text-transparent text-zinc-700 bg-gradient-to-l from-red-500 to-yellow-500 bg-clip-text'>
                {_.label}
              </p>
            </Link>
          ))}
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default CreatePost;

const data = [
  {
    label: 'topic',
    href: '/my-gearroom/topic',
  },
  {
    label: 'listing',
    href: '/my-gearroom/listing',
  },
  {
    label: 'new gear',
    href: '/my-gearroom/new-gear',
  },
  {
    label: 'polls',
    href: '/my-gearroom/polls',
  },
];

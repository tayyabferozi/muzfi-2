import * as RadixTabs from '@radix-ui/react-tabs';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const Tabs = () => (
  <RadixTabs.Root>
    <RadixTabs.List>
      {tabs.map((_, idx) => (
        <RadixTabs.Trigger
          asChild
          key={_.label}
          value={_.label}
          className='flex items-center gap-3 px-6 py-4 text-sm font-semibold group aria-selected:bg-gradient-to-l rounded-xl aria-selected:text-white from-red-500 to-yellow-500 text-neutral-400'
        >
          <NavLink to={_.link}>
            <ReactSVG
              src={`/assets/vectors/common/tab${idx}.svg`}
              className=''
            />
            {_.label}
          </NavLink>
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>
  </RadixTabs.Root>
);

export default Tabs;

const tabs = [
  { label: 'Sell Gear', link: '/my-gearroom/new-gear' },
  { label: 'Topic &Question', link: '/my-gearroom/topic' },
  { label: 'Add Gear', link: '/my-gearroom/listing' },
  { label: 'Poll', link: '/my-gearroom/polls' },
];

import * as Tabs from '@radix-ui/react-tabs';
import { ProductInfo } from './product-info';
import { Icon } from '@iconify/react';
import Description from './description';
import Shipping from './shipping';
import Pricing from './pricing';
import GreyBtn from '../../../buttons/GreyBtn';
import YellowBtn from '../../../buttons/YellowBtn';

const Listing = () => {
  // ADD Create Listing Page Sequence Here (7. Create Thread: LISTING)

  return (
    <>
      {/* steeper           */}

      <Tabs.Root defaultValue='Product Info'>
        <div className='grid grid-cols-4'>
          <div className='col-span-3 pr-2.5'>
            <Tabs.Content value='Product Info'>
              <ProductInfo />
            </Tabs.Content>
            <Tabs.Content value='Photos & Description'>
              <Description />
            </Tabs.Content>
            <div className='flex flex-col h-full'>
              <div className='grow'>
                <Tabs.Content value='Shipping' asChild>
                  <Shipping />
                </Tabs.Content>
                <Tabs.Content value='Pricing' asChild>
                  <>
                    <Shipping />
                    <Pricing />
                  </>
                </Tabs.Content>
              </div>
              <div className='flex gap-5'>
                <GreyBtn className='w-32 my-8' label={'Back'} />
                <YellowBtn className='w-32 my-8' label={'Continue'} />
              </div>
            </div>
          </div>
          <Tabs.List className='border-l pl-1.5 flex flex-col gap-20 relative items-start h-fit border-slate-400/20'>
            <div className='absolute w-px h-full bg-accentYellow-500 left-[18px]' />
            {steps.map((_) => (
              <Tabs.Trigger
                value={_}
                className='relative z-10 flex items-center gap-3 mx-1 group'
              >
                <div className='w-[18px] grid place-content-center h-[18px] group-aria-selected:bg-white bg-accentYellow-500 rounded-full border border-yellow-500'>
                  <Icon
                    icon={'material-symbols:check'}
                    className='text-sm text-white'
                  />
                </div>
                <p className='text-sm font-medium leading-[18px]'>{_}</p>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>
      </Tabs.Root>
    </>
  );
};

export default Listing;

const steps = [
  'Product Info',
  'Photos & Description',
  'Shipping',
  'Pricing',
  'Review',
];

import { Icon } from '@iconify/react';
import GradientBtn from '../../buttons/GradientBtn/GradientBtn';
import Card from '../../common/Card/Card';
import GreyBtn from '../../buttons/GreyBtn/GreyBtn';
import YellowBtn from '../../buttons/YellowBtn/YellowBtn';

export default function GearIHave() {
  return (
    <Card>
      <div className='border flex flex-wrap rounded-lg bg-yellow-50 items-center justify-center gap-5 border-amber-100 p-2.5'>
        <GradientBtn
          label={
            <span className='flex items-center gap-2'>
              <Icon icon={'iconamoon:profile-duotone'} className='text-2xl' />{' '}
              <p className='text-lg font-semibold capitalize'>Current</p>
            </span>
          }
        />
        <div className='flex flex-wrap justify-center gap-5'>
          {action.map((_) => (
            <GreyBtn
              label={
                <span className='flex items-center gap-1.5'>
                  <Icon icon={_.icon} className='text-xl' />
                  <p className='font-bold '>{_.label}</p>
                </span>
              }
              key={_.label}
            />
          ))}
        </div>
      </div>
      {/* after button */}
      <div className='mt-2.5 flex items-center justify-between '>
        <p className='text-[22px] font-semibold'>Gear I Have</p>
        <YellowBtn label={'Edit Gear Room'} short />
      </div>
      <div className='grid grid-cols-4 gap-3 my-4 md:gap-6 md:grid-cols-5 lg:grid-cols-6'>
        {new Array(20).fill(null).map((_) => (
          <div
            key={_}
            className=' relative bg-gradient-to-r w-fit rounded-full p-1.5 from-[#d47ef6] via-[#64bccf] to-[#6fe5b9]'
          >
            <img
              className='w-20 rounded-full aspect-square ring-4 ring-white'
              src='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <img
              className='absolute bottom-0 right-0'
              src='/assets/vectors/common/record.svg'
              alt=''
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

const action = [
  {
    icon: 'mdi:grid',
    label: 'Post',
  },
  {
    icon: 'gg:heart',
    label: 'Want',
  },
  {
    icon: 'la:list-alt-solid',
    label: 'Test',
  },
];

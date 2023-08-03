import { useSelector } from 'react-redux';
import { selectLogin } from '../../../redux/features/auth/authLoginSlice';
import Card from '../../common/Card/Card';

export default function User() {
  const isLogin = useSelector(selectLogin);
  if (!isLogin) return;
  return (
    <Card className='relative !mt-0 mb-3'>
      <img
        src='https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        className='object-cover w-full h-40 rounded-lg'
      />

      <div className='flex items-baseline justify-around px-10 -mt-20 max-lg:items-center max-lg:flex-col lg:px-14'>
        <div className='flex flex-col items-center lg:-translate-x-4'>
          <div className='p-2 bg-white rounded-xl w-44 aspect-square '>
            <img
              src='https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='object-cover w-full h-full rounded-lg ring-4 ring-zinc-300'
            />
          </div>
          <div className='font-semibold'>Jason Mangala</div>
          <div className='flex items-center gap-1'>
            <img src='/assets/vectors/common/flower.svg' alt='' />
            <div className='text-[11px] font-medium '>1,65,201</div>
          </div>
        </div>
        {data.map((_) => (
          <div key={_.label} className='w-20 lg:-translate-y-8 '>
            <p className='text-center  text-[34px] font-semibold'>{_.value}</p>
            <p className='font-medium text-center text-neutral-400'>
              {_.label}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

const data = [
  {
    label: 'Gear',
    value: 68,
  },
  {
    label: 'Reviews',
    value: '2.1K',
  },
  {
    label: 'Sales',
    value: '19.2K',
  },
];

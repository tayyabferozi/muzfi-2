import clsx from 'clsx';
import GradientBtn from '../../../../buttons/GradientBtn';
import Card from '../../../../common/Card';
import './Post.css';
import { Author } from './author';
import { CardFooter } from './card-footer';
import { Images } from './images';
import { User } from './user';

const Listing = ({ el, idx }: { el: any; idx: number }) => {
  if (el.type !== 'prod-sale') return;
  return (
    <Card className='h-full home-post' key={'home-post' + idx}>
      <User el={el} />
      <hr />
      <Author el={el} idx={idx} />

      <div className='mt-7'>
        <div className='text-center'>
          <p className='text-xs font-semibold '>Fender Jazz Bass</p>
          <p className='text-red-400 text-[9px] font-semibold'>Current Gear</p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-2 my-1'>
        {data.map((_) => (
          <div
            key={_.text}
            className='w-full p-px rounded-md bg-gradient-to-r from-amber-500 to-red-600'
          >
            <div className='flex bg-slate-100 gap-2.5 h-full items-center rounded-[5px] px-2.5 py-3'>
              <div className='p-1 rounded-full bg-amber-500'>
                <img src={_.icon} alt='' />
              </div>
              <div>
                <p className='text-xs font-medium text-black/75 '>{_.value}</p>
                <p className='text-black/50 text-[7.5px] font-medium '>
                  {_.text}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className='flex flex-col items-center justify-between w-full gap-2'>
          <div className='flex gap-2'>
            <button
              className={clsx(
                'border border-solid border-accentYellow-300 transition-transform hover:scale-105 bg-accentGray-900 rounded-lg w-6 h-6 inline-flex justify-center items-center'
              )}
            >
              <img
                className='w-5 h-5'
                src='/assets/vectors/common/heart.svg'
                alt='heart'
              />
            </button>

            <button className='h-6 transition-transform hover:scale-105 bg-accentGray-900 rounded-lg border border-solid border-accentYellow-300 text-[10px] font-medium px-4'>
              Make an offer
            </button>
          </div>

          <button className='h-6 commit-btn w-full transition-transform hover:scale-105 bg-black rounded-lg text-[10px] font-medium text-white flex items-center justify-center py-[10px] px-7 gap-5'>
            <img src='/assets/vectors/common/cart.svg' alt='cart' />
            Commit
          </button>
        </div>
      </div>
      {el.prodDescription && (
        <div className='mt-4 text-xs font-medium text-accentGray-800'>
          {el.prodDescription}
        </div>
      )}
      <Images imgs={el.imgs} length={el.imgs?.length} idx={idx} />
      <CardFooter el={el} idx={idx} />
    </Card>
  );
};

export default Listing;

const data = [
  {
    icon: '/assets/vectors/home/tag.svg',
    text: 'Asking Price',
    value: '49.65',
  },
  {
    icon: '/assets/vectors/home/people.svg',
    text: 'Offer',
    value: '11',
  },
  {
    icon: '/assets/vectors/home/calender.svg',
    text: 'Days',
    value: '2',
  },
];
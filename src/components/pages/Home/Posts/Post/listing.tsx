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
            className='p-0.5 rounded-md bg-gradient-to-r w-full h-fit from-amber-500 to-red-600'
          >
            <div className='flex bg-slate-100 gap-2.5 rounded px-2.5 py-3'>
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

import { Icon } from '@iconify/react';
import GreyBtn from '../../buttons/GreyBtn';
import { cn } from '../../../helpers/utils';

export const ProductCard = ({ alt }: { alt?: boolean }) => {
  return (
    <div className='bg-white border rounded-lg border-slate-400/20 p-1.5 '>
      <div className='h-36 w-full bg-neutral-100 rounded-lg border backdrop-blur-[20px] relative'>
        <Icon
          icon={'ri:heart-line'}
          className='text-lg text-[#BEBEBE] right-2 top-2 absolute cursor-pointer hover:text-accentYellow-500 '
        />
        <img
          className='object-cover object-bottom w-full h-full pb-3'
          src='https://s3-alpha-sig.figma.com/img/4e69/4e4c/7f055d65e3c36e6085b1c5a963281e68?Expires=1691366400&Signature=WiChpkhbWXc0aSGS3aGXnPt1S17xXIua-HiI1Tybs1-bpslmn51Ztag8crR0QOUUFH9mvrmabZyAYFoX65rYG1bQCAn-2QbsCB5K704PZ7rSCdWojZzie~hRTw2b3FzFRp2r30ZiynTxrLTpUoiAkbO1teM8CHBhJrqux-Ye6nyjeDHkcc~PiaMt8LDL0VihVbClux6YnkFl52xfvnxVoje~a432CFrFKnduxZwoehZzFIzI-V8ZlSKWBf4deYmno4mC0TUcYwP7vLtNwb6jQKTJcVGxFJQdLl3XL8SinjZgXKTvooE6NDGI-sIw0Jc~RsPsEDvhGFxUZ4Rg6cVVXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt=''
        />
      </div>
      <div>
        <p
          className={cn('mt-1 text-sm font-semibold', { 'line-clamp-1': alt })}
        >
          ASAT Classic Sonic
        </p>
        {alt && (
          <p className='text-zinc-600 text-[10px] font-medium'>
            Lorem Ipsum is simply dummy text of the printing and{' '}
          </p>
        )}

        <div className='flex items-center my-1.5'>
          {Array.from(Array(5)).map((_) => (
            <Icon
              icon={'ic:outline-star'}
              className='text-xs text-yellow-400'
            />
          ))}
          <p className='text-[8px] ml-1 '>108 customer review</p>
        </div>
        <p className='text-sm font-semibold'>$ 1,850</p>
        {!alt && (
          <>
            <p className='text-zinc-600 text-[10px] font-medium'>
              + $115 Shipping
            </p>
            <p className='mt-2 text-xs font-medium'>
              Matts Personal Collection
            </p>
            <p className='text-zinc-600 text-[10px] font-medium'>
              Damascus, OR, United States
            </p>
          </>
        )}

        <button className='flex items-center justify-center gap-2.5 mb-2 mt-4 w-full h-8 rounded-lg bg-gradient-to-l from-red-500 to-yellow-500'>
          <Icon icon={'uil:cart'} className='text-2xl text-white' />
          <p className='text-sm font-semibold text-center text-white'>
            Add to {alt ? 'Room' : 'Cart'}
          </p>
        </button>
        {!alt && <GreyBtn label={'Make an Offer'} short />}
      </div>
    </div>
  );
};

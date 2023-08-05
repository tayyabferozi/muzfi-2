import { HTMLAttributes, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper';
import { cn } from '../../../helpers/utils';

const ThumbGallery = ({
  className,
  ...props
}: { className?: string } & HTMLAttributes<HTMLDivElement>) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      {...props}
      className={cn('select-none px-4 py-3.5 rounded-xl bg-white', {})}
    >
      <Swiper
        spaceBetween={10}
        thumbs={{
          //@ts-ignore
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        zoom={true}
        modules={[FreeMode, Thumbs, Zoom]}
        className='overflow-hidden rounded-xl'
      >
        {data.map((_) => (
          <SwiperSlide key={_}>
            <div className='swiper-zoom-container'>
              <img alt='' className='h-96 w-full !object-cover' src={_} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {data.map((_) => (
          <SwiperSlide
            tabIndex={0}
            className='ring-accentYellow-500  [&:where(.swiper-slide-thumb-active)]:ring m-0.5 mb-1 rounded-lg'
            key={_}
          >
            <img
              alt=''
              className={cn('w-full h-24  rounded-lg shadow-lg cursor-pointer')}
              src={_}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbGallery;

const data = [
  'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1444321/pexels-photo-1444321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

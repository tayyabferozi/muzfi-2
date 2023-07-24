// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import useSwiperRef from '../../../hooks/useSwiperRef';
import Card from '../../common/Card';

const category = {
  img: '/assets/imgs/home/user-img-9.png',
  label: 'General',
};

const BrowseCategories = () => {
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();

  return (
    <Card noMt>
      <div className='flex justify-between w-full'>
        <h4>Browse by Category</h4>
        <div className='flex gap-1'>
          <img
            ref={prevRef}
            className='cursor-pointer your-class-arrow your-class-prev'
            src='/assets/vectors/common/arrow-left.svg'
            alt='arrow left'
          />
          <img
            ref={nextRef}
            className='cursor-pointer your-class-arrow your-class-next'
            src='/assets/vectors/common/arrow-right.svg'
            alt='arrow right'
          />
        </div>
      </div>

      <div className='mt-[18px]'>
        <div className=''>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl,
              nextEl,
            }}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 10,
              },
              1480: {
                slidesPerView: 12,
              },
            }}
          >
            {Array.from(Array(20)).map((el, idx) => {
              return (
                <SwiperSlide key={'home-category-slider-item' + idx}>
                  <div className='flex flex-col items-center'>
                    <div className='rounded-[50%] overflow-hidden w-[54px] h-[54px] relative'>
                      <img
                        className='absolute w-[76x] h-[76x]'
                        src='/assets/vectors/common/outline.svg'
                        alt='border'
                      />
                      <img
                        className='rounded-[50%] w-[48px] h-[48px] absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4'
                        src={category.img}
                        alt='slider'
                      />
                    </div>
                    <div className='mt-1 text-center font-medium text-[10px]'>
                      {category.label}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Card>
  );
};

export default BrowseCategories;

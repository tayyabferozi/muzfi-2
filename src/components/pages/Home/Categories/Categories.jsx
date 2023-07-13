import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Card from "components/common/Card";
import useSwiperRef from "hooks/useSwiperRef";

const categories = [
  {
    img: "/assets/imgs/home/musicians.png",
    label: "General",
  },
  {
    img: "/assets/imgs/home/genre.png",
    label:"Genre's"
  },
  {
    img: "/assets/imgs/home/keys.png",
    label: "Keys/Synths",
  },
  {
    img: "/assets/imgs/home/drums.png",
    label: "Drums",
  },
  {
    img: "/assets/imgs/home/guitar.png",
    label: "Guitar",
  },
  {
    img: "/assets/imgs/home/bass.png",
    label: "Bass",
  },
  {
    img: "/assets/imgs/home/pedalamps.png",
    label: "Pedals",
  },
  {
    img: "/assets/imgs/home/gigs.png",
    label: "Gigging",
  },
  {
    img: "/assets/imgs/home/live.png",
    label: "Live Sound",
  },
  {
    img: "/assets/imgs/home/horns.png",
    label: "Horns",
  },
  {
    img: "/assets/imgs/home/recording.png",
    label: "Studio",
  },
  {
    img: "/assets/imgs/home/prod.png",
    label: "Producers",
  },
  {
    img: "/assets/imgs/home/dj.png",
    label: "DJ / Audio",
  },
  {
    img: "/assets/imgs/home/amplifier.png",
    label: "Amps",
  },
  {
    img: "/assets/imgs/home/vintage.png",
    label: "Vintage/Rare",
  },
  {
    img: "/assets/imgs/home/slider-img-5.png",
    label: "Vocals",
  },
  {
    img: "/assets/imgs/home/mixing.png",
    label: "Mixing",
  },
   {
    img: "/assets/imgs/home/workers.png",
    label: "Luthiers",
  },
   {
    img: "/assets/imgs/home/wind.png",
    label: "Wind",
  },
];

const Categories = () => {
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();

  return (
    <Card noMt>
      <div className="flex justify-between">
        <h4>Categories</h4>
        <div className="flex gap-1">
          <img
            ref={prevRef}
            className="cursor-pointer your-class-arrow your-class-prev"
            src="/assets/vectors/common/arrow-left.svg"
            alt="arrow left"
          />
          <img
            ref={nextRef}
            className="cursor-pointer your-class-arrow your-class-next"
            src="/assets/vectors/common/arrow-right.svg"
            alt="arrow right"
          />
        </div>
      </div>

      <div className="mt-[18px]">
        <div className="">
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
            {categories.map((el, idx) => {
              return (
                <SwiperSlide key={"home-category-slider-item" + idx}>
                  <div className="flex flex-col items-center">
                    <div className="rounded-[50%] overflow-hidden w-[54px] h-[54px] relative">
                      <img
                        className="absolute w-[76x] h-[76x]"
                        src="/assets/vectors/home/slider-border.svg"
                        alt="border"
                      />
                      <img
                        className="rounded-[50%] w-[48px] h-[48px] absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4"
                        src={el.img}
                        alt="slider"
                      />
                      
                    </div>
                    <div className="mt-1 text-center font-medium text-[10px]">
                      {el.label}
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

export default Categories;

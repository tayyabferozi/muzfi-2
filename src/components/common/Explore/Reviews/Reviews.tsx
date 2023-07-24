const reviews = [
  {
    img: '/assets/imgs/home/product-img-1.png',
    title: 'Piano',
    subTitle: 'Lady Stetson',
    user: 'Lovaloo',
    userImg: '/assets/imgs/home/user-img-1.png',
  },
  {
    img: '/assets/imgs/home/product-img-2.png',
    title: 'Piano',
    subTitle: 'I Want Choo',
    user: 'Lovaloo',
    userImg: '/assets/imgs/home/user-img-4.png',
  },
  {
    img: '/assets/imgs/home/product-img-3.png',
    title: 'Saxaphone',
    subTitle: 'Acqua Fiorentina',
    user: 'Lovaloo',
    userImg: '/assets/imgs/home/user-img-5.png',
  },
  {
    img: '/assets/imgs/home/product-img-4.png',
    title: 'Violin',
    subTitle: 'Lady Stetson',
    user: 'Lovaloo',
    userImg: '/assets/imgs/home/user-img-6.png',
  },
  {
    img: '/assets/imgs/home/product-img-3.png',
    title: 'Piano',
    subTitle: 'Lady Stetson',
    user: 'Lovaloo',
    userImg: '/assets/imgs/home/user-img-7.png',
  },
];

const Reviews = () => {
  return (
    <div>
      <h4 className='mb-[18px]'>Reviews</h4>

      <div>
        {reviews.map((el, idx) => {
          return (
            <div
              className='flex items-start gap-[14px] mb-[18px]'
              key={'home-top-gear' + idx}
            >
              <img
                className='w-[54px] h-[54px] rounded-[50%] flex-shrink-0'
                src={el.img}
                // @ts-ignore
                alt={el.name}
              />
              <div className='mt-[2px] flex-grow flex justify-between items-center'>
                <div className='w-full'>
                  <div className='text-base font-semibold'>{el.title}</div>
                  <div className='text-sm font-medium text-accentBlue-500'>
                    {el.subTitle}
                  </div>
                  <div className='flex items-center justify-end w-full gap-2'>
                    <div>by {el.user}</div>
                    <img
                      className='w-8 h-8 rounded-[50%]'
                      src={el.userImg}
                      alt={el.user}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;

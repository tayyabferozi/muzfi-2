export default function Gallery() {
  return (
    <div className='grid grid-cols-2 gap-2 mt-3 sm:grid-cols-4 sm:flex-nowrap'>
      {imgs?.map((el) => {
        return (
          <div className='relative flex-grow'>
            <img
              className='object-cover w-full shadow-md aspect-square brightness-50 rounded-xl '
              src={el.img}
              alt='product'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 mt-8 font-semibold text-white img-overlay'>
              <p className=' text-[28px]'>{el.value}</p>
              <p className='text-lg'>{el.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const imgs = [
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Guitars',
    value: 7,
  },
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Pianos',
    value: 2,
  },
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Drum(s)',
    value: 32,
  },
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Trumpet',
    value: 1,
  },
];

export default function Gallery() {
  return (
    <div className='grid grid-cols-2 gap-2 mt-3 sm:grid-cols-6 sm:flex-nowrap'>
      {imgs?.map((el) => {
        return (
          <div className="relative flex-grow">
            <img
              className="object-cover w-full h-20 shadow-md aspect-square brightness-50 rounded-xl "
              src={el.img}
              alt="product"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white img-overlay">
              <p className=" text-[20px] text-stone-50">{el.value}</p>
              <p className="text-md text-yellow-400">{el.label}</p>
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
    label: 'Basses',
    value: 3,
  },
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Pedals',
    value: 8,
  },
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Amps',
    value: 2,
  },
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Audio Equipment',
    value: 10,
  },
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Guitars',
    value: 1,
  },
  {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Accessaries',
    value: 19,
  },
];

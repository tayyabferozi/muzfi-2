export default function News() {
  return (
    <section className='grid grid-cols-1 gap-5 p-4 bg-white border rounded-lg border-slate-200 lg:grid-cols-2'>
      {Array.from(Array(8)).map((_, idx) => (
        <Card {..._} idx={idx + 1} />
      ))}
    </section>
  );
}

const Card = ({ idx }) => {
  return (
    <div>
      <div className='flex items-center gap-2.5 text-black'>
        <p className='w-5  text-sm font-medium'>0{idx}</p>
        <img
          alt=''
          className='w-[54px] h-[54px] rounded-[108.49px] shadow'
          src='https://via.placeholder.com/54x54'
        />
        <div>
          <p className=' text-base font-semibold '>r/news</p>
          <p className='w-[229px]  text-sm font-medium'>
            Learning and Education
          </p>
          <p className='text-neutral-400 text-sm font-medium '>41M members</p>
        </div>
      </div>
      <div className='flex mt-2'>
        <div className='basis-[5.5rem] ' />
        <div className='flex justify-between grow'>
          <button className=' h-[31px] bg-accentYellow-500 hover:bg-accentYellow-600 w-[70px]  rounded-md text-sm font-medium'>
            Join
          </button>
          <button className=' h-[31px] border border-black  hover:bg-slate-100 w-[70px]  rounded-md text-sm font-medium'>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

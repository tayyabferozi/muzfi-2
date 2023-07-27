import { useLocation } from 'react-router-dom';

export default function Ad() {
  const { pathname } = useLocation();
  const [{ head = null, caption = '' } = {}] = routes.filter(
    (_) => _.pathname === pathname
  );

  if (!head) return;

  return (
    <div className='h-32 relative rounded-lg bg-gradient-to-l overflow-hidden mb-6 from-[#EA4335]/20 flex flex-col justify-center p-5 to-[#FBBC05]/20'>
      <p className='text-lg font-semibold text-black'>{head}</p>
      <p className='w-[222px] text-zinc-600 text-xs font-normal leading-[13.92px]'>
        {caption}
      </p>
      <img
        className='absolute top-0 right-0'
        src='/assets/vectors/browse/hands.svg'
        alt=''
      />
      <img
        className='absolute bottom-0 right-0 rotate-180 translate-x-10'
        src='/assets/vectors/browse/hands.svg'
        alt=''
      />
    </div>
  );
}

const routes = [
  {
    pathname: '/browse',
    head: 'Communities',
    caption: 'Find, Build, and connect with like minded Peers',
  },
  {
    pathname: '/browse/single',
    head: 'B/ TeamFBASS',
    caption: 'Find, Build, and connect with like minded Peers',
  },
];
